import React, { useEffect } from "react";

const experience = [
	{
		role: "Full-Stack Developer",
		company: "Company Name",
		dates: "2022 - Present",
		description: "Placeholder summary of responsibilities and key wins in this role.",
	},
	{
		role: "Web Developer",
		company: "Company Name",
		dates: "2019 - 2022",
		description: "Placeholder summary of responsibilities and key wins in this role.",
	},
	{
		role: "Junior Developer",
		company: "Company Name",
		dates: "2017 - 2019",
		description: "Placeholder summary of responsibilities and key wins in this role.",
	},
];

const Work = () => {
	useEffect(() => {
		document.title = "Work | Terence Biesboer";
	}, []);

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">03</span>
				<h1>
					<span className="accent">work</span> history
				</h1>
			</header>

			<div className="timeline">
				{experience.map((job) => (
					<div className="timelineItem" key={`${job.company}-${job.dates}`}>
						<span className="timelineDates">{job.dates}</span>
						<h2>
							{job.role} <span className="accent">@ {job.company}</span>
						</h2>
						<p>{job.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
