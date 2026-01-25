'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import BookingModal from './BookingModal'
import { FaWhatsapp } from 'react-icons/fa'

export default function BookingButton({ item, type }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="w-full py-6 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
                Book Now
            </Button>

            <a
                href={`https://wa.me/${item.whatsapp?.replace(/[^0-9]/g, "")}?text=Hi, I am interested in ${item.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-muted/50 text-muted-foreground rounded-xl font-semibold text-sm hover:bg-muted transition-all mt-4"
            >
                <FaWhatsapp className="text-xl" /> Or Chat via WhatsApp
            </a>

            <BookingModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                item={item}
                type={type}
            />
        </>
    )
}
