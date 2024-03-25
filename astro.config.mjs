import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import solidJs from "@astrojs/solid-js";

const toc = (str) => {
	return "Expand the " + str;
};

// https://astro.build/config
export default defineConfig({
	site: "https://astroprops.netlify.app/",
	integrations: [
		robotsTxt(),
		sitemap(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		solidJs(),
	],
	markdown: {
		remarkPlugins: [
			remarkToc,
			[
				remarkCollapse,
				{
					test: "Table of Contents",
					summary: toc,
				},
			],
		],
	},
});
