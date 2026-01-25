'use client'

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import BookingForm from './BookingForm'

export default function BookingModal({ isOpen, onClose, item, type }) {
    const [status, setStatus] = useState('idle')

    // Reset status when modal opens
    React.useEffect(() => {
        if (isOpen) setStatus('idle')
    }, [isOpen])

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-xl">
                {status === 'idle' || status === 'loading' ? (
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            {type === 'plan' ? 'Request a Custom Tour Plan' : `Book ${item.name}`}
                        </DialogTitle>
                        <DialogDescription>
                            {type === 'plan'
                                ? "Fill out the form below and our experts will design a perfect itinerary just for you!"
                                : `Enter your details below to request a booking for this ${type}. Our team will contact you shortly to confirm the reservation.`
                            }
                        </DialogDescription>
                    </DialogHeader>
                ) : null}
                <BookingForm item={item} type={type} onClose={onClose} status={status} setStatus={setStatus} />
            </DialogContent>
        </Dialog>
    )
}
