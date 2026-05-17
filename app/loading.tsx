export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
                <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                </div>
            </div>
            <p className="mt-6 text-foreground font-medium animate-pulse">Loading amazing experiences...</p>
        </div>
    )
}
