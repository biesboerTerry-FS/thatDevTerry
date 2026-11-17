import placeholderImage from "../images/placeholder.svg";
import tomatoImage from "../images/tomato.jpg";
import projectOneImage from "../images/project-one.jpg";
import diaryImage from "../images/diary.jpg";
import foreverImage from "../images/forever.jpg";
import pokeAppImage from "../images/thepokeapp.jpg";
import prescriptoImage from "../images/prescripto.jpg";

export const projects = [
	{
		title: "Lindbergh Ultimate",
		description:
			"A public-facing site for Lindbergh Ultimate with a dedicated admin login for managing team content.",
		url: "https://brisk-tuba-bxj90bu.tmp.now",
		repo: "https://github.com/biesboerTerry-FS/lindberghUltimate",
		image: projectOneImage,
		tags: ["React", "CSS", "JavaScript"],
		views: [
			{
				label: "Admin",
				url: "https://brisk-tuba-bxj90bu.tmp.now/admin/login",
			},
		],
	},
	{
		title: "Diary",
		description:
			"A personal diary and journaling site built with Next.js, featuring dated entries, archive browsing, and dedicated About, Projects, and Now sections.",
		url: "https://diary-2jv99sgyx-terry-biesboers-projects.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Diary",
		image: diaryImage,
		tags: ["Next.js", "React", "JavaScript", "Vercel"],
	},
	{
		title: "Forever",
		description:
			"A full e-commerce storefront with product browsing, search, wishlist, cart, checkout flow, and a separate admin panel for managing products and orders.",
		url: "https://forever-frontend-gamma-wheat.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Forever",
		image: foreverImage,
		tags: ["React", "JavaScript", "E-commerce", "Vercel"],
		views: [
			{
				label: "Admin",
				url: "https://vercel.com/terry-biesboers-projects/forever-admin/BWXD8TmKLL19UAPWHHSkeNS2NWeg",
			},
		],
	},
	{
		title: "ThePokeApp",
		description:
			"A Pokédex-style app for organizing your collection, tracking levels, managing sprites, and playing an interactive Card Match game.",
		url: "https://thepokeapp.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/ThePokeApp",
		image: pokeAppImage,
		tags: ["React", "Expo", "React Native", "JavaScript"],
	},
	{
		title: "Tomato",
		description:
			"A food ordering platform with menu browsing, cart management, app download prompts, and an admin dashboard for restaurant operations.",
		url: "https://tomato-dqkd.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Tomato",
		image: tomatoImage,
		tags: ["React", "JavaScript", "E-commerce", "Vercel"],
		views: [
			{
				label: "Admin",
				url: "https://tomato-admin-ten.vercel.app/dashboard",
			},
		],
	},
	{
		title: "Prescripto",
		description:
			"A full-stack doctor appointment platform with a patient-facing frontend, admin/doctor panel, Express/MongoDB API, and an Expo mobile app for patients.",
		url: "https://frontend-q6gdqz96a-terry-biesboers-projects.vercel.app",
		repo: "https://github.com/biesboerTerry-FS/Prescripto",
		image: prescriptoImage,
		tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Expo"],
		views: [
			{
				label: "Admin",
				url: "https://admin-fneq9067c-terry-biesboers-projects.vercel.app",
			},
			{
				label: "Doctor",
				url: "https://admin-fneq9067c-terry-biesboers-projects.vercel.app",
			},
		],
	},
	{
		title: "QuickStayHotels",
		description:
			"A hotel booking and reservation project. Details and live views will be added as the project progresses.",
		url: "https://github.com/biesboerTerry-FS/QuickStayHotels",
		repo: "https://github.com/biesboerTerry-FS/QuickStayHotels",
		image: placeholderImage,
		tags: ["React", "JavaScript"],
	},
	{
		title: "HolisticAsF",
		description:
			"A holistic wellness project. Details and live views will be added as the project progresses.",
		url: "https://github.com/biesboerTerry-FS/HolisticAsF",
		repo: "https://github.com/biesboerTerry-FS/HolisticAsF",
		image: placeholderImage,
		tags: ["React", "JavaScript"],
	},
];
