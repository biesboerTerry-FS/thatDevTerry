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
					I'm Terry, a Full-Stack Developer from San Diego, CA, currently
					pursuing a Bachelor of Science in Computer Science for Web Design and
					Development at Full Sail University, with projected graduation in
					2026. I love building clean, responsive web apps and exploring the
					full stack from frontend interfaces to backend APIs and databases.
				</p>
				<p>
					I'm actively seeking opportunities in web development where I can
					contribute to meaningful projects, continue growing my skills, and
					collaborate with teams that value quality code and thoughtful design.
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
