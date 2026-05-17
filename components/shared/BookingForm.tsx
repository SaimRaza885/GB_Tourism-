'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

import { BookingFormProps } from '@/types'


export default function BookingForm({
    item,
    type,
    onClose,
    status: externalStatus,
    setStatus: externalSetStatus,
}: BookingFormProps) {

    const [internalStatus, setInternalStatus] = useState<
        'idle' | 'loading' | 'success' | 'error'
    >('idle')

    const status = externalStatus || internalStatus
    const setStatus = externalSetStatus || setInternalStatus

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '1',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('loading')

        const SERVICE_ID =
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
        const TEMPLATE_ID =
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
        const PUBLIC_KEY =
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

        if (!PUBLIC_KEY) {
            toast.error('Email service not configured')
            setStatus('error')
            return
        }

        const currentTime = new Date().toLocaleString()

        const price =
            item?.price || item?.pricePerDay || 0

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            booking_date: formData.date,
            guests: formData.guests,
            message: formData.message,
            item_name: item?.name ?? 'Listing',
            item_type:
                type === 'plan' ? 'CUSTOM PLAN' : type.toUpperCase(),
            item_price: price.toLocaleString(),
            time: currentTime,
        }

        try {
            if (!SERVICE_ID || !TEMPLATE_ID) {
                const text = `*New Booking Request*

Item: ${item?.name}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Guests: ${formData.guests}
Price: Rs ${price.toLocaleString()}

Message: ${formData.message}`

                const whatsapp =
                    item?.whatsapp?.replace(/[^0-9]/g, '') ||
                    '923123456789'

                window.open(
                    `https://wa.me/${whatsapp}?text=${encodeURIComponent(
                        text
                    )}`,
                    '_blank'
                )

                setStatus('success')
                toast.success('Redirecting to WhatsApp...')
                return
            }

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            )

            setStatus('success')
            toast.success('Booking request sent!')
        } catch (err) {
            console.error(err)
            setStatus('error')
            toast.error('Failed to send booking')
        }
    }

    /* ================= SUCCESS UI ================= */
    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
                <h3 className="text-2xl font-bold">
                    Booking Request Sent!
                </h3>

                <Button onClick={onClose}>
                    Close
                </Button>
            </div>
        )
    }

    /* ================= ERROR UI ================= */
    if (status === 'error') {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
                <h3 className="text-2xl font-bold">
                    Something went wrong
                </h3>

                <Button onClick={() => setStatus('idle')}>
                    Try Again
                </Button>
            </div>
        )
    }

    /* ================= FORM UI (UNCHANGED) ================= */
    return (
        <form onSubmit={handleSubmit} className="space-y-4 py-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label>Date</Label>
                <Input
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>

            {type !== 'car' && type !== 'plan' && (
                <div className="space-y-2">
                    <Label>Guests</Label>
                    <Input
                        name="guests"
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                    />
                </div>
            )}

            <div className="space-y-2">
                <Label>Message</Label>
                <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <Button
                type="submit"
                className="w-full h-12"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    'Confirm Booking Request'
                )}
            </Button>
        </form>
    )
}