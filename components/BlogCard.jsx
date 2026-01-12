import Link from "next/link"
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa"

export default function BlogCard({ post }) {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-primary/70" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaUser className="text-primary/70" />
            <span>{post.author}</span>
          </div>
        </div>

        <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-muted-foreground text-sm mb-5 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
        >
          Read Article <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
