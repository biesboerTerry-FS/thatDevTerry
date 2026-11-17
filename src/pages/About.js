import React, { useEffect } from "react";

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

const About = () => {
	useEffect(() => {
		document.title = "About | Terence Biesboer";
	}, []);

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">02</span>
				<h1>
					<span className="accent">about</span> me
				</h1>
			</header>

			<div className="pageBody">
				<p>
					I'm Terry, a Full-Stack Developer from San
					Diego, CA. Replace this with your story: how you got into
					development, what you enjoy building, and what you're looking for.
				</p>
				<p>
					Placeholder paragraph about your approach to design, code quality,
					and working with clients or teams.
				</p>

				<h2 className="sectionTitle">
					<span className="accent">skills</span>
				</h2>
				<ul className="skillList">
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default About;
