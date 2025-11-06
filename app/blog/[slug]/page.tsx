
import { getBlogPosts, getPostBySlug } from '@/lib/blog'
import { marked } from 'marked'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return <div>Post não encontrado</div>
  }

  const contentHtml = marked(post.content)

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  )
}
