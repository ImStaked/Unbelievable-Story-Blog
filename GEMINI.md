# Project Overview

This is a statically generated blog built with Next.js, TypeScript, and Tailwind CSS. The blog posts are written in Markdown and stored in the `_posts` directory. The project uses `remark` and `remark-html` to convert the Markdown to HTML, and `gray-matter` to parse the post metadata.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The blog will be available at [http://localhost:3000](http://localhost:3000).

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Start the production server:**
    ```bash
    npm run start
    ```

## Development Conventions

*   **Blog Posts:** To create a new blog post, add a new Markdown file to the `_posts` directory. The file should include a YAML front matter section with the following fields:
    *   `title`: The title of the post.
    *   `excerpt`: A short summary of the post.
    *   `coverImage`: The path to the cover image.
    *   `date`: The publication date of the post.
    *   `author`: An object with `name` and `picture` fields.
    *   `ogImage`: An object with a `url` field for the Open Graph image.
*   **Styling:** The project uses Tailwind CSS for styling. The configuration is in `tailwind.config.ts`.
*   **Components:** Reusable components are located in the `src/app/_components` directory.
*   **API:** The logic for fetching and parsing blog posts is in `src/lib/api.ts`.
