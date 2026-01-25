import Link from "next/link"
import { FaChevronRight, FaCalendarAlt, FaUser } from "react-icons/fa"
import { blogPosts } from "@/data/blogPosts"

export default function BlogSection() {
    // Show the 3 latest posts for a balanced 3-column look
    const latestPosts = blogPosts.slice(0, 3)

    return (
        <section className="py-16 lg:py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-center md:text-left">
                    <div>
                        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center md:text-left">Latest News</p>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            Our Travel <span className="text-primary text-center">Stories</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group shrink-0"
                    >
                        Read All Stories
                        <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-border/50">
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col grow">
                                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-3">
                                        <div className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-primary/70" />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
