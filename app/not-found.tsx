import Link from "next/link"
import { FaMountain, FaHome, FaSearch } from "react-icons/fa"

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <div className="mb-8 relative">
                <div className="text-9xl font-bold font-heading text-muted/30">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <FaMountain className="text-6xl text-primary/20 animate-bounce-slow" />
                </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Page Not Found
            </h2>

            <p className="text-muted-foreground max-w-md mb-8 text-lg">
                The destination you are looking for seems to have moved or does not exist.
                Let's get you back on track to your next adventure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                    <FaHome /> Back to Home
                </Link>
                <Link
                    href="/tours"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background border border-input rounded-full font-medium hover:bg-muted transition-colors text-foreground"
                >
                    <FaSearch /> Explore Tours
                </Link>
            </div>
        </div>
    )
}
