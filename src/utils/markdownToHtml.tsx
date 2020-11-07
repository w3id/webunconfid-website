import markdownit from 'markdown-it'
import implicitFigures from 'markdown-it-implicit-figures'

export function renderMarkdown(markdown: string) {
  const md = markdownit({
    html: true
  })

  md.use(implicitFigures)
  const result = md.render(markdown)
  return result
}

export default async function markdownToHtml(markdown: string) {
  return renderMarkdown(markdown)
}
