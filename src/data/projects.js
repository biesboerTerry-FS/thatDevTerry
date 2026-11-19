import portfolioImage from "../images/portfolio.jpg";
import quickStayDarkImage from "../images/quickstayhotels-dark.jpg";
import quickStayLightImage from "../images/quickstayhotels-light.jpg";
import quickStayMobileImage from "../images/quickstayhotels-mobile.jpg";
import lindberghDarkImage from "../images/lindbergh-dark.jpg";
import lindberghLightImage from "../images/lindbergh-light.jpg";
import lindberghMobileImage from "../images/lindbergh-mobile.jpg";
import foreverDarkImage from "../images/forever-dark.jpg";
import foreverLightImage from "../images/forever-light.jpg";
import foreverMobileImage from "../images/forever-mobile.jpg";
import tomatoDarkImage from "../images/tomato-dark.jpg";
import tomatoLightImage from "../images/tomato-light.jpg";
import tomatoMobileImage from "../images/tomato-mobile.jpg";
import prescriptoDarkImage from "../images/prescripto-dark.jpg";
import prescriptoLightImage from "../images/prescripto-light.jpg";
import prescriptoMobileImage from "../images/prescripto-mobile.jpg";
import holisticasfDarkImage from "../images/holisticasf-dark.jpg";
import holisticasfLightImage from "../images/holisticasf-light.jpg";
import holisticasfMobileImage from "../images/holisticasf-mobile.jpg";
import pokeAppMobileImage from "../images/thepokeapp-mobile.jpg";
import pokeAppImage from "../images/thepokeapp.jpg";

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
		image: lindberghDarkImage,
		lightImage: lindberghLightImage,
		mobileImage: lindberghMobileImage,
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
			{ label: "Front", url: "https://github.com/biesboerTerry-FS/Diary" },
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
			"Connected Stripe test-mode Checkout with server-side session verification.",
			"Added a full-screen mobile menu and accessible admin skip link.",
		],
		outcomes: [
			"A functioning e-commerce frontend, admin panel, mobile app, and backend with test-mode payments.",
		],
		repo: "https://github.com/biesboerTerry-FS/Forever",
		image: foreverDarkImage,
		lightImage: foreverLightImage,
		mobileImage: foreverMobileImage,
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
			"Added a web build with demo login, a separately deployed Express API, and offline Pokémon fallback.",
		],
		outcomes: [
			"A cross-platform app experience with web and mobile surfaces for collectors and casual players.",
		],
		repo: "https://github.com/biesboerTerry-FS/ThePokeApp",
		image: pokeAppImage,
		mobileImage: pokeAppMobileImage,
		views: [
			{ label: "Front", url: "https://thepokeapp.vercel.app" },
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
			"Wired Stripe test-mode Checkout and added a responsive hamburger menu with accessible food cards.",
		],
		outcomes: [
			"A live ordering site with admin, backend API, and test-mode payment flow.",
		],
		repo: "https://github.com/biesboerTerry-FS/Tomato",
		image: tomatoDarkImage,
		lightImage: tomatoLightImage,
		mobileImage: tomatoMobileImage,
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
			"Provisioned Clerk authentication for patient and admin surfaces.",
		],
		outcomes: [
			"A multi-role platform spanning web, admin, and mobile surfaces with Clerk authentication.",
		],
		repo: "https://github.com/biesboerTerry-FS/Prescripto",
		image: prescriptoDarkImage,
		lightImage: prescriptoLightImage,
		mobileImage: prescriptoMobileImage,
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
			"Integrated Clerk authentication with webhook user sync, multi-origin CORS, and a responsive hamburger menu.",
			"Replaced mocked card validation with Stripe test-mode Checkout and added a confirmation route.",
			"Developed an Express/MongoDB API and deployed separate client, server, owner, and mobile web projects to Vercel.",
		],
		outcomes: [
			"Live Vercel deployments for the client, owner, server, and mobile web experiences with authentication and test-mode payments.",
		],
		repo: "https://github.com/biesboerTerry-FS/QuickStayHotels",
		image: quickStayDarkImage,
		lightImage: quickStayLightImage,
		mobileImage: quickStayMobileImage,
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
			"Created a 24-product catalog shared by the web storefront and mobile app, with dark/light themes and accessible product modals.",
			"Added cash-on-delivery and Stripe test-mode checkout with a success flow.",
			"Implemented admin routes for dashboard, schedule, inventory, and orders.",
			"Developed an Express/MongoDB backend and deployed client, server, admin, and mobile web projects to Vercel.",
		],
		outcomes: [
			"Live Vercel deployments for the client, admin, server, and mobile web experiences with a shared catalog and test-mode payments.",
		],
		repo: "https://github.com/biesboerTerry-FS/HolisticAsF",
		image: holisticasfDarkImage,
		lightImage: holisticasfLightImage,
		mobileImage: holisticasfMobileImage,
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
	// linkedin: "https://www.linkedin.com/in/terrybiesboer",
};
