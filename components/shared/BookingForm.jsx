'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
export default function BookingForm({ item, type, onClose, status: externalStatus, setStatus: externalSetStatus, }) {
    const [internalStatus, setInternalStatus] = useState('idle');
    const status = externalStatus || internalStatus;
    const setStatus = externalSetStatus || setInternalStatus;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '1',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';
        if (!PUBLIC_KEY) {
            toast.error('Email service not configured');
            setStatus('error');
            return;
        }
        const currentTime = new Date().toLocaleString();
        const price = item?.price || item?.pricePerDay || 0;
        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            booking_date: formData.date,
            guests: formData.guests,
            message: formData.message,
            item_name: item?.name ?? 'Listing',
            item_type: type === 'plan' ? 'CUSTOM PLAN' : type.toUpperCase(),
            item_price: price.toLocaleString(),
            time: currentTime,
        };
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

Message: ${formData.message}`;
                const whatsapp = item?.whatsapp?.replace(/[^0-9]/g, '') ||
                    '923123456789';
                window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                setStatus('success');
                toast.success('Redirecting to WhatsApp...');
                return;
            }
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setStatus('success');
            toast.success('Booking request sent!');
        }
        catch (err) {
            console.error(err);
            setStatus('error');
            toast.error('Failed to send booking');
        }
    };
    /* ================= SUCCESS UI ================= */
    if (status === 'success') {
        return (<div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                    Booking Request Sent!
                </h3>

                <button onClick={onClose} className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold transition-all hover:bg-primary/90 active:scale-98 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50">
                    Close
                </button>
            </div>);
    }
    /* ================= ERROR UI ================= */
    if (status === 'error') {
        return (<div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
                <h3 className="text-2xl font-bold text-destructive">
                    Something went wrong
                </h3>

                <button onClick={() => setStatus('idle')} className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold transition-all hover:bg-primary/90 active:scale-98 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50">
                    Try Again
                </button>
            </div>);
    }
    /* ================= FORM UI (UNCHANGED) ================= */
    return (<form onSubmit={handleSubmit} className="space-y-4 py-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 flex flex-col">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <input name="name" required value={formData.name} onChange={handleChange} className="w-full h-11 px-3.5 py-2.5 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"/>
                </div>

                <div className="space-y-2 flex flex-col">
                    <label className="text-sm font-semibold text-foreground">Email</label>
                    <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full h-11 px-3.5 py-2.5 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"/>
                </div>
            </div>

            <div className="space-y-2 flex flex-col">
                <label className="text-sm font-semibold text-foreground">Phone</label>
                <input name="phone" required value={formData.phone} onChange={handleChange} className="w-full h-11 px-3.5 py-2.5 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"/>
            </div>

            <div className="space-y-2 flex flex-col">
                <label className="text-sm font-semibold text-foreground">Date</label>
                <input name="date" type="date" required value={formData.date} onChange={handleChange} className="w-full h-11 px-3.5 py-2.5 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"/>
            </div>

            {type !== 'car' && type !== 'plan' && (<div className="space-y-2 flex flex-col">
                    <label className="text-sm font-semibold text-foreground">Guests</label>
                    <input name="guests" type="number" min="1" value={formData.guests} onChange={handleChange} className="w-full h-11 px-3.5 py-2.5 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"/>
                </div>)}

            <div className="space-y-2 flex flex-col">
                <label className="text-sm font-semibold text-foreground">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full min-h-[100px] px-3.5 py-2.5 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"/>
            </div>

            <button type="submit" className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center cursor-pointer transition-all hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none active:scale-99 outline-none focus-visible:ring-2 focus-visible:ring-primary/50" disabled={status === 'loading'}>
                {status === 'loading' ? (<>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                        Sending...
                    </>) : ('Confirm Booking Request')}
            </button>
        </form>);
}
