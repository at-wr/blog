import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";

const getSortedPostsByLanguage = (
  posts: CollectionEntry<"blog">[],
  language: string
) => {
  const filteredPosts = posts.filter(post => post.data.language === language);
  return getSortedPosts(filteredPosts);
};

export default getSortedPostsByLanguage;
