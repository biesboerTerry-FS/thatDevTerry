import placeholderImage from "../images/placeholder.svg";
import tomatoImage from "../images/tomato.jpg";
import projectOneImage from "../images/project-one.jpg";
import diaryImage from "../images/diary.jpg";
import foreverImage from "../images/forever.jpg";
import pokeAppImage from "../images/thepokeapp.jpg";
import portfolioThumbnail from "../images/portfolio-thumbnail.jpg";

export const projects = [
	{
		title: "Lindbergh Ultimate",
		description: "A site for Lindbergh Ultimate with a public page and admin login.",
		url: "https://brisk-tuba-bxj90bu.tmp.now",
		repo: "https://github.com/biesboerTerry-FS/lindberghUltimate",
		image: projectOneImage,
		tags: ["React", "CSS"],
		links: [
			{
				label: "Admin Login",
				url: "https://brisk-tuba-bxj90bu.tmp.now/admin/login",
			},
		],
	},
	{
		title: "Diary",
		description:
			"A personal diary site built with Next.js, featuring dated entries and sections like Archive, About, Projects, and Now.",
		url: "https://diary-2jv99sgyx-terry-biesboers-projects.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Diary",
		image: diaryImage,
		tags: ["Next.js", "JavaScript", "React"],
	},
	{
		title: "Forever",
		description:
			"An e-commerce storefront with product browsing, search, wishlist, cart, and sign-in.",
		url: "https://forever-frontend-gamma-wheat.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Forever",
		image: foreverImage,
		tags: ["React", "JavaScript", "E-commerce"],
		links: [
			{
				label: "Admin",
				url: "https://vercel.com/terry-biesboers-projects/forever-admin/BWXD8TmKLL19UAPWHHSkeNS2NWeg",
			},
		],
	},
	{
		title: "ThePokeApp",
		description:
			"A Pokédex-style app for organizing your collection, tracking levels, managing sprites, and playing a Card Match game.",
		url: "https://thepokeapp.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/ThePokeApp",
		image: pokeAppImage,
		tags: ["React", "JavaScript", "Expo"],
	},
	{
		title: "Tomato",
		description: "A food ordering site with menu browsing, cart, and app download sections.",
		url: "https://tomato-dqkd.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Tomato",
		image: tomatoImage,
		tags: ["React", "Vercel", "Demo"],
		links: [
			{
				label: "Admin Dashboard",
				url: "https://tomato-admin-ten.vercel.app/dashboard",
			},
		],
	},
	{
		title: "Portfolio Demo",
		description:
			"My personal portfolio site showcasing projects, skills, and contact information.",
		url: "https://github.com/biesboerTerry-FS/thatDevTerry",
		repo: "https://github.com/biesboerTerry-FS/thatDevTerry",
		image: portfolioThumbnail,
		tags: ["React", "SCSS", "Portfolio"],
	},
	{
		title: "Demo Site Seven",
		description: "Placeholder demo site. Replace with a short summary of this site.",
		url: "https://example.com",
		repo: "https://github.com/thatdevterry/demo-site-seven",
		image: placeholderImage,
		tags: ["React", "REST API"],
	},
	{
		title: "Demo Site Eight",
		description: "Placeholder demo site. Replace with a short summary of this site.",
		url: "https://example.com",
		repo: "https://github.com/thatdevterry/demo-site-eight",
		image: placeholderImage,
		tags: ["JavaScript", "CSS"],
	},
];
