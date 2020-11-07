import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { BasePageProps } from '~/types/common'

const postsDirectory = join(process.cwd(), '_pages')

export function getPageSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPageBySlug(slug: string, fields: string[] = []): BasePageProps {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: any = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPages(fields: string[] = []) {
  const slugs = getPageSlugs()
  const posts = slugs
    .map(slug => getPageBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => Date.parse(post2.date) - Date.parse(post1.date))
  return posts
}
