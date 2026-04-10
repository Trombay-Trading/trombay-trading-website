import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { z } from 'zod'

const postsDirectory = path.join(process.cwd(), 'blogposts')

const FrontmatterSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  date: z.string(),
  readTime: z.string(),
  excerpt: z.string().optional(),
  coverImage: z.string().optional(),
})

export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  excerpt?: string
  coverImage?: string
  content?: string
}

export function getSortedPostsData(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    const parsed = FrontmatterSchema.safeParse(data)
    if (!parsed.success) {
      throw new Error(
        `Frontmatter validation failed for "${fileName}".\n${parsed.error.message}\n` +
          `Required fields: title, subtitle, date, readTime`
      )
    }

    const { title, subtitle, date, readTime, excerpt, coverImage } = parsed.data
    return { slug, title, subtitle, date, readTime, excerpt, coverImage }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post not found: "${slug}"`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const parsed = FrontmatterSchema.parse(data)
  const processedContent = await remark().use(html).process(content)

  return {
    slug,
    content: processedContent.toString(),
    title: parsed.title,
    subtitle: parsed.subtitle,
    date: parsed.date,
    readTime: parsed.readTime,
    excerpt: parsed.excerpt,
    coverImage: parsed.coverImage,
  }
}
