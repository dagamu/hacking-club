import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { sortPosts } from "~/helpers/posts";
import siteInfo from "~/data/site-info";

export async function get(context) {
	const allPosts = await getCollection("blog");
	const posts = sortPosts(allPosts);
	return rss({
		stylesheet: "/feed/styles.xsl",
		title: siteInfo.name,
		description: siteInfo.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
	});
}
