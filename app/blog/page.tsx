
import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-primary hover:text-secondary">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-primary hover:text-secondary mt-4 inline-block">
              Ler mais →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
