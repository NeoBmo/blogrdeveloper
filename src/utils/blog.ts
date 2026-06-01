import type { CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

export const getBlogSlug = (post: BlogPost): string => post.id.replace(/\.(md|mdx)$/, "");

export const getBlogUrl = (post: BlogPost): string => `/blog/${getBlogSlug(post)}/`;

export const sortPostsByDateDesc = (posts: BlogPost[]): BlogPost[] =>
  posts.toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
