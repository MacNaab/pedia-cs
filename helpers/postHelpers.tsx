import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'md');

export const getListOfPosts = () => {
  const folder = path.join(process.cwd(), 'md')
  const files = fs.readdirSync(folder)
  return files.filter(file => file.endsWith('.md'))
}

export const getPostContent = (slug: string) => {
  const file = path.join(process.cwd(), 'md', slug) + '.md'
  const content = fs.readFileSync(file, 'utf8')
  return content
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}