import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const lastUpdated = "November 18, 2026";

const focusAreas = [
	"Completing my Bachelor’s in Computer Science for Web Design & Development at Full Sail University, graduating May 2027.",
	"Shaping this site into a complete portfolio piece with strong navigation, discovery, and content presentation.",
	"Documenting my process, decisions, and incremental progress as I build.",
	"Improving frontend craft through better accessibility, theming, metadata, and maintainable component patterns.",
];

const learning = [
	"Next.js App Router patterns for content-heavy sites (routing, metadata, static generation, and feed routes).",
	"MDX/content workflows that balance authoring simplicity with richer rendering capabilities.",
	"Practical SEO and discoverability for personal sites: Open Graph, sitemap/robots, and RSS.",
	"Cross-platform development with Expo and React Native for mobile app experiences.",
];

const nearTerm = [
	"Finish my degree in May 2027 and transition into a full-time web development role.",
	"Keep expanding this portfolio with new projects and clearer case studies.",
	"Refine project outcomes, visuals, and links to live work or repositories.",
	"Polish content readability and accessibility based on real usage and review.",
];

const values = [
	["Consistency", "small, steady progress in writing and building."],
	["Clarity", "interfaces and content that are easy to understand and navigate."],
	["Craft", "attention to details that improve usability and trust."],
	["Momentum", "shipping improvements regularly instead of waiting for “perfect.”"],
];

const Work = () => {
	useEffect(() => {
		document.title = "Now | Terry Biesboer";
	}, []);

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">03</span>
				<p className="eyebrow">Current snapshot</p>
				<h1>
					<span className="accent">now</span>
				</h1>
				<p>
					A living snapshot of what I’m focused on right now—what I’m
					building, learning, and refining. This page keeps the portfolio
					current rather than static.
				</p>
				<p className="lastUpdated">
					<strong>Last updated:</strong> {lastUpdated}
				</p>
			</header>

			<div className="cardGrid twoUp">
				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">current focus</span>
					</h2>
					<ul className="bulletList">
						{focusAreas.map((item) => <li key={item}>{item}</li>)}
					</ul>
				</section>

				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">learning &amp; exploration</span>
					</h2>
					<ul className="bulletList">
						{learning.map((item) => <li key={item}>{item}</li>)}
					</ul>
				</section>
			</div>

			<div className="cardGrid twoUp">
				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">near-term goals</span>
					</h2>
					<ul className="bulletList">
						{nearTerm.map((item) => <li key={item}>{item}</li>)}
					</ul>
				</section>

				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">what I value right now</span>
					</h2>
					<ul className="bulletList">
						{values.map(([title, text]) => (
							<li key={title}><strong>{title}:</strong> {text}</li>
						))}
					</ul>
				</section>
			</div>

			<section className="infoCard opportunityCard">
				<h2 className="cardTitle">
					<span className="accent">open to opportunities</span>
				</h2>
				<p>
					I’m actively looking for internships, entry-level positions, and
					freelance projects in web development, UI implementation, and
					full-stack application work. If you have an opportunity or just want
					to connect, please reach out through the{" "}
					<Link className="accentLink" to="/contact">contact page</Link>.
				</p>
			</section>
		</div>
	);
};

export default Work;
