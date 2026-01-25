import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function SectionHeading({
    badge,
    title,
    subtitle,
    description,
    center = false,
    linkHref,
    linkText,
    rightContent
}) {
    const displayBadge = badge || subtitle;

    if (center) {
        return (
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                {displayBadge && (
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                        {displayBadge}
                    </span>
                )}
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {title}
                </h2>
                {description && (
                    <p className="text-muted-foreground text-lg">
                        {description}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
                {displayBadge && (
                    <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center md:text-left">
                        {displayBadge}
                    </p>
                )}
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {title}
                </h2>
            </div>
            {(linkHref && linkText) && (
                <Link
                    href={linkHref}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group shrink-0"
                >
                    {linkText}
                    <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
            )}
            {rightContent}
        </div>
    );
}
