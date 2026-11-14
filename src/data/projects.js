import placeholderImage from "../images/placeholder.svg";
import tomatoImage from "../images/tomato.jpg";
import projectOneImage from "../images/project-one.jpg";

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
			"A diary and journaling app built with Next.js for writing and keeping personal entries.",
		url: "https://diary-2jv99sgyx-terry-biesboers-projects.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Diary",
		image: placeholderImage,
		tags: ["Next.js", "JavaScript", "React"],
	},
	{
		title: "Project Three",
		description: "Placeholder description. Replace with a short summary of this site.",
		url: "https://example.com",
		repo: "https://github.com/thatdevterry/project-three",
		image: placeholderImage,
		tags: ["JavaScript", "API"],
	},
	{
		title: "Project Four",
		description: "Placeholder description. Replace with a short summary of this site.",
		url: "https://example.com",
		repo: "https://github.com/thatdevterry/project-four",
		image: placeholderImage,
		tags: ["React", "Firebase"],
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
		title: "Demo Site Six",
		description: "Placeholder demo site. Replace with a short summary of this site.",
		url: "https://example.com",
		repo: "https://github.com/thatdevterry/demo-site-six",
		image: placeholderImage,
		tags: ["Node.js", "MongoDB"],
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
