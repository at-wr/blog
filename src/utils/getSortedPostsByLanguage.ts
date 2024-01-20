import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import postFilter from "./postFilter";

const getSortedPostsByLanguage = (
  posts: CollectionEntry<"blog">[],
  language: string
) => {
  const filteredPosts = posts.filter(post => post.data.language === language);
  const sortedAndFilteredPosts = getSortedPosts(filteredPosts);
  return sortedAndFilteredPosts.filter(postFilter);
};

export default getSortedPostsByLanguage;
