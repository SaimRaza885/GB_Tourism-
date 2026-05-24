'use client';
import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { X } from 'lucide-react';
export default function BookingModal({ isOpen, onClose, item, type }) {
    const [status, setStatus] = useState('idle');
    // Reset status and lock scroll when modal opens
    useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    // Escape key listener to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out" role="dialog" aria-modal="true">
            {/* Modal Backdrop click */}
            <div className="absolute inset-0 cursor-default" onClick={onClose}/>

            {/* Modal Content container */}
            <div className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8 z-10 overflow-hidden transform transition-all duration-300 ease-out scale-100 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50" aria-label="Close modal">
                    <X className="h-5 w-5"/>
                </button>

                {(status === 'idle' || status === 'loading') && (<div className="space-y-2 mb-4">
                        <h3 className="text-2xl font-bold text-foreground pr-8">
                            {type === 'plan' ? 'Request a Custom Tour Plan' : `Book ${item?.name}`}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {type === 'plan'
                ? "Fill out the form below and our experts will design a perfect itinerary just for you!"
                : `Enter your details below to request a booking for this ${type}. Our team will contact you shortly to confirm the reservation.`}
                        </p>
                    </div>)}
                
                <BookingForm item={item} type={type} onClose={onClose} status={status} setStatus={setStatus}/>
            </div>
        </div>);
}
