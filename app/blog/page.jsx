import React from 'react'
import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/data/blogPosts'

const Blog_Page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Travel Stories & <span className="text-primary">Inspiration</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our latest articles, guides, and stories from the heart of Gilgit-Baltistan.
              Get inspired for your next adventure in the mountains.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More / Pagination Placeholder */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white border border-input rounded-full text-foreground font-medium hover:bg-muted transition-colors shadow-sm">
              Load More Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog_Page