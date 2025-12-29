# A statically generated blog example using Next.js, Markdown, and TypeScript

This site showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source for blog posts.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.


# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

# Unbelievable-Story-Blog

## IndexNow  
https://www.bing.com/indexnow/getstarted  
  
https://www.bing.com/webmasters/indexnow?siteUrl=https://myunbelievablestory.info/  https://www.bing.com/indexnow?url=https://myunbelievablestory.info/posts/bware&key= 92ada8efe6b141179078270834521fe2&keyLocation=https://myunbelievablestory.info/ 92ada8efe6b141179078270834521fe2.txt