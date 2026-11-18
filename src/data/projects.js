import tomatoImage from "../images/tomato.jpg";
import projectOneImage from "../images/project-one.jpg";
import portfolioImage from "../images/portfolio.jpg";
import foreverImage from "../images/forever.jpg";
import pokeAppImage from "../images/thepokeapp.jpg";
import prescriptoImage from "../images/prescripto.jpg";
import quickStayImage from "../images/quickstayhotels.jpg";
import holisticAsFImage from "../images/holisticasf.jpg";

// Selected work and case studies.
export const projects = [
	{
		title: "Lindbergh Ultimate",
		role: "Full-Stack Development",
		timeframe: "2024",
		stack: ["React", "CSS", "JavaScript"],
		summary:
			"A public-facing site for Lindbergh Ultimate with team info, program history, and a secured admin panel for content management.",
		problem:
			"The program needed a central hub to share information publicly while giving administrators a secure place to manage content.",
		contributions: [
			"Built a responsive public site with team sections, program history, and highlight galleries.",
			"Implemented an admin authentication flow to protect management routes.",
			"Deployed the application for live access and ongoing updates.",
		],
		outcomes: [
			"A live site visitors can browse and an admin experience for content management.",
		],
		repo: "https://github.com/biesboerTerry-FS/LindberghUltimateFrisbee",
		image: projectOneImage,
		views: [
			{ label: "Front", url: "https://lindberghultimatefrisbee-terry-biesboers-projects.vercel.app" },
			{ label: "Admin", url: "https://lindberghultimatefrisbee-terry-biesboers-projects.vercel.app/admin/login" },
			{ label: "Mobile", url: "https://lindbergh-ultimate-mobile-n6xhd7h6x-terry-biesboers-projects.vercel.app" },
		],
		missing: [],
	},
	{
		title: "Terry Biesboer Portfolio",
		role: "Design & Frontend Development",
		timeframe: "2026",
		stack: ["React", "React Router", "Sass", "JavaScript", "Vercel"],
		summary:
			"A personal portfolio site that presents selected work, background, and contact details in a focused single-page experience.",
		problem:
			"A clear, polished portfolio was needed to showcase projects, education, and availability in one easy-to-navigate place.",
		contributions: [
			"Built a responsive React single-page app with routing for portfolio sections.",
			"Styled the interface with Sass and component-based layouts for consistent visual design.",
			"Deployed the site to Vercel with a dedicated /portfolio route.",
		],
		outcomes: [
			"A live portfolio that introduces Terry Biesboer and links to selected projects.",
		],
		repo: "https://github.com/biesboerTerry-FS/thatDevTerry.git",
		image: portfolioImage,
		views: [
			{ label: "Front", url: "https://portfolio-three-pink-69.vercel.app/portfolio" },
		],
		missing: [],
	},
	{
		title: "Forever",
		role: "Full-Stack Development",
		timeframe: "2024",
		stack: ["React", "JavaScript", "E-commerce", "Vercel"],
		summary:
			"An e-commerce storefront with product browsing, search, wishlist, cart, sign-in, backend API, admin dashboard, and mobile app.",
		problem:
			"A complete e-commerce experience requires product discovery, user state, and admin control working together.",
		contributions: [
			"Built a storefront with product browsing, search, wishlist, and cart.",
			"Implemented user sign-in and session-aware features.",
			"Created an admin dashboard for product and order management.",
			"Developed a companion mobile experience and supporting backend API.",
		],
		outcomes: [
			"A functioning e-commerce frontend, admin panel, mobile app, and backend deployed to Vercel.",
		],
		repo: "https://github.com/biesboerTerry-FS/Forever",
		image: foreverImage,
		views: [
			{ label: "Front", url: "https://forever-frontend-gamma-wheat.vercel.app" },
			{ label: "Back", url: "https://forever-backend-neon-eta.vercel.app" },
			{ label: "Admin", url: "https://forever-admin-mocha-omega.vercel.app" },
			{ label: "Mobile", url: "https://forever-mobile.vercel.app" },
		],
		missing: [],
	},
	{
		title: "ThePokeApp",
		role: "Mobile & Frontend Development",
		timeframe: "2024",
		stack: ["React", "Expo", "React Native", "JavaScript"],
		summary:
			"A Pokédex-style app for organizing your collection, tracking levels, managing sprites, and playing a Card Match game.",
		problem:
			"Pokémon fans need a playful, organized way to track collections and levels across devices.",
		contributions: [
			"Built collection and level-tracking features with persistent state.",
			"Implemented sprite management and a Card Match mini-game.",
			"Used Expo to target mobile platforms with a shared codebase.",
		],
		outcomes: [
			"A cross-platform app experience for collectors and casual players.",
		],
		repo: "https://github.com/biesboerTerry-FS/ThePokeApp",
		image: pokeAppImage,
		views: [
			{ label: "Mobile", url: "https://thepokeapp.vercel.app" },
		],
		missing: [],
	},
	{
		title: "Tomato",
		role: "Full-Stack Development",
		timeframe: "2024",
		stack: ["React", "JavaScript", "E-commerce", "Vercel"],
		summary:
			"A food ordering site with menu browsing, cart, app download sections, backend API, and an admin panel for menu and order management.",
		problem:
			"A food-ordering brand needs a fast menu experience plus a way to manage orders behind the scenes.",
		contributions: [
			"Built a customer-facing menu, cart, and checkout flow.",
			"Added app download sections and promotional content areas.",
			"Developed an admin dashboard for menu and order management.",
			"Created a supporting backend API for data and auth.",
		],
		outcomes: [
			"A live ordering site, admin dashboard, and backend API for ongoing operations.",
		],
		repo: "https://github.com/biesboerTerry-FS/Tomato",
		image: tomatoImage,
		views: [
			{ label: "Front", url: "https://tomato-dqkd.vercel.app" },
			{ label: "Back", url: "https://tomato-green-nine.vercel.app" },
			{ label: "Admin", url: "https://tomato-admin-ten.vercel.app/dashboard" },
			{ label: "Mobile", url: "https://tomato-mobile-pm96a8bev-terry-biesboers-projects.vercel.app" },
		],
		missing: [],
	},
	{
		title: "Prescripto",
		role: "Full-Stack Development",
		timeframe: "2024",
		stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Expo"],
		summary:
			"A doctor appointment platform with a patient-facing site, admin/doctor panel, Express/MongoDB API, and Expo mobile app.",
		problem:
			"Scheduling medical appointments involves patients, doctors, and admins—each needing a tailored interface.",
		contributions: [
			"Built a patient-facing React frontend for browsing doctors and booking appointments.",
			"Developed an Express/MongoDB API to handle appointments, users, and roles.",
			"Created an admin/doctor panel and an Expo mobile app for cross-platform access.",
		],
		outcomes: [
			"A multi-role platform spanning web, admin, and mobile surfaces.",
		],
		repo: "https://github.com/biesboerTerry-FS/Prescripto",
		image: prescriptoImage,
		views: [
			{ label: "Front", url: "https://frontend-hg1m8ls5a-terry-biesboers-projects.vercel.app" },
			{ label: "Back", url: "https://backend-6f0maqq3u-terry-biesboers-projects.vercel.app" },
			{ label: "Admin", url: "https://admin-7yqgsp6gf-terry-biesboers-projects.vercel.app" },
			{ label: "Doctor", url: "https://admin-7yqgsp6gf-terry-biesboers-projects.vercel.app" },
			{ label: "Mobile", url: "https://prescripto-mobile-akovorl10-terry-biesboers-projects.vercel.app" },
		],
		missing: [],
	},
	{
		title: "QuickStayHotels",
		role: "Full-Stack Development",
		timeframe: "2026",
		stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Expo", "Vercel"],
		summary:
			"A hotel booking platform with a guest-facing site, hotel owner dashboard, backend API, and mobile web experience.",
		problem:
			"Travelers need a simple way to browse rooms and book stays, while hotel owners need tools to manage listings, bookings, and offers.",
		contributions: [
			"Built a React/Vite frontend for browsing rooms, offers, and booking flows.",
			"Implemented hotel owner routes for dashboard, room management, bookings, offers, and profile.",
			"Developed an Express/MongoDB API and deployed separate client, server, owner, and mobile web projects to Vercel.",
		],
		outcomes: [
			"Live Vercel deployments for the client, owner, server, and mobile web experiences (server requires production environment variables to fully operate).",
		],
		repo: "https://github.com/biesboerTerry-FS/QuickStayHotels",
		image: quickStayImage,
		views: [
			{ label: "Front", url: "https://quickstayhotels-client.vercel.app" },
			{ label: "Back", url: "https://quickstayhotels-server.vercel.app" },
			{ label: "Owner", url: "https://quickstayhotels-client.vercel.app/owner" },
			{ label: "Mobile", url: "https://quickstayhotels-mobile.vercel.app" },
		],
		missing: [],
	},
	{
		title: "HolisticAsF",
		role: "Full-Stack Development",
		timeframe: "2026",
		stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Expo", "Vercel"],
		summary:
			"A holistic wellness storefront with product browsing, cart and checkout flows, admin management, backend API, and mobile web experience.",
		problem:
			"A wellness brand needs a cohesive storefront and admin workflow to present products, manage inventory/orders, and support customers across devices.",
		contributions: [
			"Built a React/Vite client for browsing products, categories, cart, and account flows.",
			"Implemented admin routes for dashboard, schedule, inventory, and orders.",
			"Developed an Express/MongoDB backend and deployed client, server, admin, and mobile web projects to Vercel.",
		],
		outcomes: [
			"Live Vercel deployments for the client, admin, server, and mobile web experiences.",
		],
		repo: "https://github.com/biesboerTerry-FS/HolisticAsF",
		image: holisticAsFImage,
		views: [
			{ label: "Front", url: "https://holisticasf-client.vercel.app" },
			{ label: "Back", url: "https://holisticasf-server.vercel.app" },
			{ label: "Admin", url: "https://holisticasf-client.vercel.app/admin" },
			{ label: "Mobile", url: "https://holisticasf-mobile.vercel.app" },
		],
		missing: [],
	},
];

export const siteLinks = {
	email: "terry@thatdudeterry.com",
	github: "https://github.com/biesboerTerry-FS",
	linkedin: "https://www.linkedin.com/in/terrybiesboer",
};
