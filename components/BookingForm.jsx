'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export default function BookingForm({ item, type, onClose, status, setStatus }) {



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '1',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        if (!PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            console.error('EmailJS Public Key is missing or not configured.')
            toast.error('Email service is not properly configured.')
            setStatus('error')
            return
        }

        const currentTime = new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            booking_date: formData.date,
            guests: formData.guests,
            message: formData.message,
            item_name: item.name,
            item_type: type === 'plan' ? 'CUSTOM PLAN' : type.toUpperCase(),
            item_price: type === 'plan' ? 'Custom Quote' : (item.price || item.pricePerDay || 0).toLocaleString(),
            time: currentTime,
        }

        try {
            if (SERVICE_ID === 'YOUR_SERVICE_ID') {
                console.warn('EmailJS not configured. Falling back to WhatsApp.')
                const text = `*New ${type.toUpperCase()} Booking Request*\n\n*Item:* ${item.name}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Date:* ${formData.date}\n*Guests/Units:* ${formData.guests}\n*Price:* Rs ${(item.price || item.pricePerDay || 0).toLocaleString()}\n\n*Message:* ${formData.message}`
                const whatsappLink = `https://wa.me/${item.whatsapp?.replace(/[^0-9]/g, '') || "923123456789"}?text=${encodeURIComponent(text)}`
                window.open(whatsappLink, '_blank')
                setStatus('success')
                toast.success('Redirecting to WhatsApp...')
            } else {
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                setStatus('success')
                toast.success('Your booking request has been sent successfully!')
            }
        } catch (error) {
            console.error('EmailJS Error:', error)
            setStatus('error')
            toast.error('Failed to send booking request.')
        }
    }

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Booking Request Sent!</h3>
                    <p className="text-muted-foreground px-4">
                        Thank you for choosing us, <span className="font-semibold text-primary">{formData.name}</span>.
                        We've received your request for <span className="font-semibold text-primary">{item.name}</span>.
                        Our team will contact you shortly.
                    </p>
                </div>
                <Button onClick={onClose} className="w-full max-w-[200px] h-12 text-lg font-bold">
                    Close
                </Button>
            </div>
        )
    }

    if (status === 'error') {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Oops! Something went wrong</h3>
                    <p className="text-muted-foreground px-4">
                        We couldn't process your booking request at the moment. Please try again or contact us directly via WhatsApp.
                    </p>
                </div>
                <div className="flex gap-4 w-full">
                    <Button variant="outline" onClick={() => setStatus('idle')} className="flex-1 h-12 font-bold">
                        Try Again
                    </Button>
                    <a
                        href={`https://wa.me/${item.whatsapp?.replace(/[^0-9]/g, '') || "923123456789"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                    >
                        <Button className="w-full h-12 font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
                            WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {type !== 'car' && type !== 'plan' && (
                <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                    />
                </div>
            )}

            <div className="space-y-2">
                <Label htmlFor="message">Special Requirements / Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about any specific needs..."
                    className="min-h-[100px]"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" className="w-full text-lg font-bold h-12" disabled={status === 'loading'}>
                {status === 'loading' ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    type === 'plan' ? 'Get My Free Quote' : 'Confirm Booking Request'
                )}
            </Button>
        </form>
    )
}
