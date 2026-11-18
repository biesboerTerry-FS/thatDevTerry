import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const skills = [
	"JavaScript",
	"React",
	"Next.js",
	"Node.js",
	"Express",
	"MongoDB",
	"HTML & CSS",
	"SCSS",
	"Tailwind CSS",
	"Expo",
	"Vercel",
	"Git",
];

const principles = [
	{
		title: "Clarity first",
		text: "I prioritize readable layouts, clear hierarchy, and interfaces that help people find what they need quickly.",
	},
	{
		title: "Accessible by default",
		text: "Semantic structure, keyboard support, focus states, and thoughtful contrast are part of the build—not afterthoughts.",
	},
	{
		title: "Content with purpose",
		text: "Whether it’s a short reflection or a project case study, I aim to make content easy to browse, scan, and revisit.",
	},
	{
		title: "Iterative growth",
		text: "I treat projects as living systems: ship a solid foundation, learn from it, and improve through consistent iteration.",
	},
];

const demonstrates = [
	[
		"Component-based architecture",
		"Reusable React components and shared project data keep the Home, About, Projects, Now, and Contact sections consistent.",
	],
	[
		"Discovery & navigation",
		"A slide-out menu plus a persistent side nav on inner pages makes it easy to move between sections.",
	],
	[
		"Portfolio-ready presentation",
		"Dedicated About, Projects, Now, and Contact pages frame the work as a complete personal portfolio.",
	],
	[
		"Production-minded polish",
		"Fast static builds deployed on Vercel, meaningful page titles, and responsive layouts.",
	],
	[
		"Accessible interactions",
		"Keyboard-friendly navigation, a focus-trapped project dialog, and readable contrast throughout.",
	],
	[
		"Rich content rendering",
		"Project case studies with challenges, contributions, and outcomes, plus skill lists and a deployment table.",
	],
];

const About = () => {
	useEffect(() => {
		document.title = "About | Terry Biesboer";
	}, []);

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">02</span>
				<p className="eyebrow">Portfolio</p>
				<h1>
					<span className="accent">about</span> me
				</h1>
				<p>
					I’m Terry Biesboer, a full-stack developer from San Diego, CA,
					currently completing my Bachelor’s in Computer Science for Web
					Design &amp; Development at Full Sail University, with an expected
					graduation in May 2027. I’m actively seeking opportunities in web
					development and related fields.
				</p>
			</header>

			<section className="aboutGrid">
				<div className="pageBody">
					<h2 className="sectionTitle">
						<span className="accent">background</span>
					</h2>
					<p>
						I’m Terry, a full-stack developer based in San Diego, CA. I enjoy
						building thoughtful digital experiences across the stack—from
						responsive frontends with React and Next.js to backend services
						with Node.js, Express, and MongoDB.
					</p>
					<p>
						I’m currently pursuing a Bachelor of Science in Computer Science
						with a focus on Web Design &amp; Development at Full Sail University,
						where I’ve strengthened my skills in software engineering, user
						experience, and modern web technologies.
					</p>
					<p>
						This portfolio highlights the technical and design decisions behind
						my work, including structure, accessibility, and maintainability. I
						treat it as a living record of what I’m building and how my thinking
						evolves.
					</p>
					<p>
						I’m especially interested in projects where strong fundamentals
						matter: clean information architecture, responsive layouts,
						readable typography, and systems that can grow without becoming
						fragile.
					</p>
				</div>

				<aside className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">skills &amp; tools</span>
					</h2>
					<ul className="skillList">
						{skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</aside>
			</section>

			<section className="contentSection">
				<h2 className="sectionTitle">
					<span className="accent">how I approach work</span>
				</h2>
				<div className="cardGrid">
					{principles.map((item) => (
						<article className="infoCard" key={item.title}>
							<h3 className="cardTitle">{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>
			</section>

			<section className="contentSection">
				<h2 className="sectionTitle">
					<span className="accent">what this project demonstrates</span>
				</h2>
				<div className="cardGrid">
					{demonstrates.map(([title, desc]) => (
						<article className="infoCard" key={title}>
							<h3 className="cardTitle">{title}</h3>
							<p>{desc}</p>
						</article>
					))}
				</div>
			</section>

			<section className="infoCard opportunityCard">
				<h2 className="cardTitle">
					<span className="accent">currently open to opportunities</span>
				</h2>
				<p>
					I’m interested in internships, entry-level roles, and collaborations
					involving frontend development, full-stack web applications,
					content-driven websites, UI implementation, and portfolio/product
					storytelling. If you’d like to connect, the best place to start is the
					contact page.
				</p>
				<div className="inlineLinks">
					<Link className="accentLink" to="/portfolio">View projects →</Link>
					<Link className="accentLink" to="/work">Read what I’m focused on →</Link>
					<Link className="accentLink" to="/contact">Get in touch →</Link>
				</div>
			</section>
		</div>
	);
};

export default About;
