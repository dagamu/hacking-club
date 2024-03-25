import type { CollectionEntry } from "astro:content";

export const getCategories = (posts: CollectionEntry<"blog">[]) => {
	let categories: string[] = [];
	const publishedPosts = posts.filter(({ data }) => !data.draft);
	publishedPosts.forEach((post) => {
		categories = [...categories, ...post.data.categories].filter(
			(value: string, index: number, self: string[]) =>
				self.indexOf(value) === index,
		);
	});
	return categories.sort();
};

export const getPostsByCategory = (
	posts: CollectionEntry<"blog">[],
	category: string,
) => posts.filter((post) => post.data.categories.includes(category));
