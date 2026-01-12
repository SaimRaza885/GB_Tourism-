import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaCalendarAlt, FaUser, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { blogPosts } from '@/data/blogPosts'

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }) {
    // Awaiting params for Next.js 15+ compatibility (if needed in future versions, safely handled here)
    const { slug } = await params

    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full text-sm font-medium w-fit"
                    >
                        <FaArrowLeft className="text-xs" /> Back to Blog
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-white/90 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <FaUser />
                            </div>
                            <span className="text-white">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-primary" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                {/* Main Content */}
                <div className="lg:max-w-none">
                    {/* Post Content */}
                    <div
                        className="prose prose-lg prose-slate dark:prose-invert max-w-none
            prose-headings:font-heading prose-headings:font-bold prose-h2:text-primary prose-a:text-primary 
            prose-img:rounded-xl prose-img:shadow-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                        <h4 className="font-heading font-semibold text-foreground">Share this article:</h4>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-[#3b5998] hover:text-white transition-all">
                                <FaFacebook size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-[#1DA1F2] hover:text-white transition-all">
                                <FaTwitter size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-[#0077b5] hover:text-white transition-all">
                                <FaLinkedin size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-[#25D366] hover:text-white transition-all">
                                <FaWhatsapp size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Recent Posts Widget */}
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                        <h3 className="font-heading font-semibold text-lg mb-4 pb-4 border-b border-border">
                            More Stories
                        </h3>
                        <div className="space-y-6">
                            {blogPosts
                                .filter(p => p.id !== post.id)
                                .slice(0, 3)
                                .map(related => (
                                    <Link key={related.id} href={`/blog/${related.slug}`} className="group flex gap-4">
                                        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">
                                                {related.title}
                                            </h4>
                                            <span className="text-xs text-muted-foreground">{related.date}</span>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    )
}
