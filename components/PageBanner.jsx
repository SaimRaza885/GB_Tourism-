import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

export default function PageBanner({
    title,
    subtitle,
    badge,
    badgeIcon: BadgeIcon,
    image,
    description,
    height = "60vh",
    overlayOpacity = "0.4",
    children,
    showBreadcrumbs = true
}) {
    return (
        <section
            className="relative flex items-center justify-center overflow-hidden mb-20"
            style={{ height: height, minHeight: '450px' }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={typeof title === 'string' ? title : 'Banner'}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
                {badge && (
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm">
                        {BadgeIcon && <BadgeIcon className="text-sm" />} {badge}
                    </span>
                )}

                <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                    {typeof title === 'string' ? (
                        <>
                            {title.split(' ').slice(0, -1).join(' ')} <br />
                            <span className="text-primary italic">{title.split(' ').slice(-1)}</span>
                        </>
                    ) : title}
                </h1>

                {description && (
                    <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                        {description}
                    </p>
                )}

                {children}

                {showBreadcrumbs && (
                    <div className="mt-10 flex items-center justify-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <FaChevronRight className="text-[8px]" />
                        <span className="text-primary">{subtitle || title}</span>
                    </div>
                )}
            </div>

            {/* Decorative side accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </section>
    )
}
