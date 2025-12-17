import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postUrls = posts.map((post) => {
    return {
      url: `${BASE_URL}/posts/${post.slug}`,
      lastModified: new Date(post.date),
    };
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}