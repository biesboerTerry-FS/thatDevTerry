import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { siteLinks } from "../data/projects";

const reasons = [
	"Frontend development or UI implementation opportunities",
	"Full-stack projects using React, Next.js, Node.js, Express, or MongoDB",
	"Internships or entry-level roles for a soon-to-graduate web developer",
	"Content-driven websites and portfolio projects",
	"Collaboration on design + development work",
	"Feedback, suggestions, or questions about this site",
];

const details = [
	"A brief summary of what you’re looking for",
	"Timeline or key dates (if applicable)",
	"Links to relevant references, repos, or examples",
	"The best way and time to follow up",
];

const Contact = () => {
	useEffect(() => {
		document.title = "Contact | Terry Biesboer";
	}, []);

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">05</span>
				<p className="eyebrow">Let’s connect</p>
				<h1>
					<span className="accent">contact</span>
				</h1>
				<p>
					Interested in the work, have feedback on the site, or want to talk
					about a project or collaboration? I’d be glad to hear from you. I’m
					currently completing my Bachelor’s in Computer Science for Web Design
					&amp; Development at Full Sail University and actively seeking
					opportunities in the field.
				</p>
			</header>

			<div className="cardGrid twoUp">
				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">direct links</span>
					</h2>
					<ul className="contactList">
						<li>
							<strong>Email:</strong>{" "}
							<a className="accentLink" href={`mailto:${siteLinks.email}`}>
								{siteLinks.email}
							</a>
						</li>
						<li>
							<strong>Location:</strong>{" "}
							<span className="accent">San Diego, CA</span>
						</li>
						<li>
							<strong>GitHub:</strong>{" "}
							<a
								className="accentLink"
								href={siteLinks.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								{siteLinks.github}
							</a>
						</li>
						{/* <li>
							<strong>LinkedIn:</strong>{" "}
							<a
								className="accentLink"
								href={siteLinks.linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								linkedin.com/in/terrybiesboer
							</a>
						</li> */}
					</ul>
					<p className="cardNote">
						For the fastest response, email is best. Include a short subject
						and any relevant links or context.
					</p>
				</section>

				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">send a quick message</span>
					</h2>
					<p>
						This site is statically exported, so the contact flow uses{" "}
						<code>mailto:</code> links for broad compatibility (no backend
						required). Use a button below to open your email client with a
						prefilled subject line.
					</p>
					<div className="buttonRow">
						<a
							className="actionButton"
							href={`mailto:${siteLinks.email}?subject=${encodeURIComponent("Portfolio inquiry")}`}
						>
							Email about a project
						</a>
						<a
							className="actionButton"
							href={`mailto:${siteLinks.email}?subject=${encodeURIComponent("Site feedback")}`}
						>
							Share feedback
						</a>
					</div>
				</section>
			</div>

			<div className="cardGrid twoUp">
				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">good reasons to reach out</span>
					</h2>
					<ul className="bulletList">
						{reasons.map((item) => <li key={item}>{item}</li>)}
					</ul>
				</section>

				<section className="infoCard">
					<h2 className="cardTitle">
						<span className="accent">helpful details to include</span>
					</h2>
					<ul className="bulletList">
						{details.map((item) => <li key={item}>{item}</li>)}
					</ul>
				</section>
			</div>

			<section className="infoCard">
				<h2 className="cardTitle">
					<span className="accent">elsewhere on this site</span>
				</h2>
				<p>
					If you want more context before reaching out, you can learn more{" "}
					<Link className="accentLink" to="/about">about me</Link>, browse{" "}
					<Link className="accentLink" to="/portfolio">selected projects</Link>, or see
					what I’m focused on <Link className="accentLink" to="/work">now</Link>.
				</p>
			</section>
		</div>
	);
};

export default Contact;
