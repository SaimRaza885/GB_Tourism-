'use client'

import React, { useState, useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function GalleryViewer({ images = [] }) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Open the lightbox
    const openLightbox = (index) => {
        setSelectedImage(images[index])
        setCurrentIndex(index)
        // Prevent background scrolling
        document.body.style.overflow = 'hidden'
    }

    // Close the lightbox
    const closeLightbox = () => {
        setSelectedImage(null)
        // Restore background scrolling
        document.body.style.overflow = 'auto'
    }

    // Next image
    const nextImage = (e) => {
        e.stopPropagation()
        const nextIndex = (currentIndex + 1) % images.length
        setSelectedImage(images[nextIndex])
        setCurrentIndex(nextIndex)
    }

    // Previous image
    const prevImage = (e) => {
        e.stopPropagation()
        const prevIndex = (currentIndex - 1 + images.length) % images.length
        setSelectedImage(images[prevIndex])
        setCurrentIndex(prevIndex)
    }

    const scrollContainerRef = useRef(null)

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef
            const scrollAmount = direction === 'left' ? -300 : 300
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    const isDown = useRef(false)
    const startX = useRef(0)
    const scrollLeftVal = useRef(0)
    const isDragging = useRef(false)

    const handleMouseDown = (e) => {
        isDown.current = true
        isDragging.current = false
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft
        scrollLeftVal.current = scrollContainerRef.current.scrollLeft
        scrollContainerRef.current.style.cursor = 'grabbing'
        // Disable smooth scrolling during drag for instant feedback
        scrollContainerRef.current.style.scrollBehavior = 'auto'
    }

    const handleMouseLeave = () => {
        isDown.current = false
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab'
            // Re-enable smooth scrolling for snapping
            scrollContainerRef.current.style.scrollBehavior = 'smooth'
        }
    }

    const handleMouseUp = () => {
        isDown.current = false
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab'
            scrollContainerRef.current.style.scrollBehavior = 'smooth'
        }
    }

    const handleMouseMove = (e) => {
        if (!isDown.current) return
        e.preventDefault()
        const x = e.pageX - scrollContainerRef.current.offsetLeft
        const walk = (x - startX.current) * 2 // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeftVal.current - walk

        if (Math.abs(x - startX.current) > 5) {
            isDragging.current = true
        }
    }

    const handleImageClick = (idx) => {
        if (isDragging.current) return
        openLightbox(idx)
    }

    if (!images || images.length === 0) return null

    return (
        <>
            <div className="relative group/gallery">
                {/* Left Navigation Button */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover/gallery:opacity-100 transition-opacity disabled:opacity-0 hover:bg-black/70 hidden md:block"
                    aria-label="Scroll left"
                >
                    <FaChevronLeft />
                </button>

                {/* Right Navigation Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover/gallery:opacity-100 transition-opacity disabled:opacity-0 hover:bg-black/70 hidden md:block"
                    aria-label="Scroll right"
                >
                    <FaChevronRight />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 px-1 scrollbar-custom cursor-grab select-none"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <style jsx global>{`
                        .scrollbar-custom::-webkit-scrollbar {
                            height: 8px;
                        }
                        .scrollbar-custom::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        .scrollbar-custom::-webkit-scrollbar-thumb {
                            background-color: rgba(var(--primary-rgb), 0.2);
                            border-radius: 20px;
                        }
                        .scrollbar-custom:hover::-webkit-scrollbar-thumb {
                            background-color: rgba(var(--primary-rgb), 0.5);
                        }
                    `}</style>
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleImageClick(idx)}
                            className="relative flex-none w-[85vw] sm:w-[350px] aspect-4/3 rounded-xl overflow-hidden group border border-border cursor-pointer snap-start shadow-sm hover:shadow-md transition-all"
                            onDragStart={(e) => e.preventDefault()} // Prevent default image drag
                        >
                            <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animation-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-50"
                    >
                        <FaTimes className="text-2xl" />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-50"
                    >
                        <FaChevronLeft className="text-2xl" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-50"
                    >
                        <FaChevronRight className="text-2xl" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                    >
                        <img
                            src={selectedImage}
                            alt="Full screen gallery"
                            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
