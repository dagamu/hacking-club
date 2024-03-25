export type SocialLink = {
	platform: string;
	href: string;
	me?: string;
	text: string;
	icon: string;
	footerOnly?: boolean;
};

export type SiteInfo = {
	name: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	twitterHandle?: string;
	socialLinks: SocialLink[];
	fathomSiteId?: string;
	fathom404GoalId?: string;
	brandColor?: string;
	featuredPosts: number;
	recentPosts: number;
	postPerPage?: number;
};

const siteInfo: SiteInfo = {
	name: "Hacking Club",
	title: "Beautiful Astro blog theme styled with Open Props",
	description:
		"AstroProps is an accessible, performant and responsive Astro blog theme.",
	image: {
		src: "/og/social.jpg",
		alt: "Beautiful Astro blog theme styled with Open Props",
	},
	socialLinks: [
		{
			platform: "youtube",
			href: "https://youtube.com/@cedricbontems",
			me: "https://youtube.com/@cedricbontems",
			text: "AstroProps' Youtube demo video",
			icon: "mdi:youtube",
		},
		{
			platform: "twitter",
			href: "https://twitter.com/cedricbontems",
			me: "https://twitter.com/cedricbontems/",
			text: "Find the author on twitter",
			icon: "mdi:twitter",
		},
		{
			platform: "github",
			href: "https://github.com/cbontems/astroprops",
			me: "https://github.com/cbontems/",
			text: "Go to AstroProps' GitHub repo",
			icon: "mdi:github",
		},
		{
			platform: "feed",
			href: "/feed.xml",
			text: "Subscribe to our RSS feed",
			icon: "mdi:rss",
			footerOnly: true,
		},
	],
	twitterHandle: "cbontems",
	fathomSiteId: "MXLWXIIW",
	fathom404GoalId: "HCBWLVGO",
	brandColor: "#ff4500",
	featuredPosts: 2,
	recentPosts: 4,
	postPerPage: 5,
};

export default siteInfo;
