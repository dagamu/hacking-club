import { defineCollection, z } from "astro:content";

export const collections = {
	authors: defineCollection({
		schema: z.object({
			image: z.string().optional(),
			name: z.string(),
			title: z.string().optional(),
			github: z.string().optional(),
			twitter: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			authors: z.array(z.string()),
			categories: z.array(z.string()).default(["others"]),
			socialImage: z.string().optional(),
			coverImage: z.string().optional(),
			coverImageAlt: z.string().optional(),
			lang: z.enum(["en"]).default("en"),
			featured: z.boolean().optional(),
			draft: z.boolean().optional(),
		}),
	}),
	pages: {
		schema: z.object({
			seo: z.object({
				title: z.string().min(5).max(60),
				description: z.string().min(15).max(160),
				image: z
					.object({
						src: z.string().default("/og/social.jpg"),
						alt: z.string().default("Build the web you want"),
					})
					.default({}),
				pageType: z.enum(["website", "article"]).default("website"),
				robots: z
					.object({
						index: z.boolean().default(true),
						follow: z.boolean().default(true),
					})
					.default({}),
			}),
			updated_date: z
				.date()
				.describe("The date this content was last updated."),
			lang: z.enum(["en"]).default("en"),
		}),
	},
};
