import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

const Portfolio = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [previewMode, setPreviewMode] = useState("dark");
	const triggerRef = useRef(null);
	const modalRef = useRef(null);
	const closeButtonRef = useRef(null);
	const modalImageWrapperRef = useRef(null);

	useEffect(() => {
		document.title = "Portfolio | Terry Biesboer";
	}, []);

	useEffect(() => {
		if (!selectedProject) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				setSelectedProject(null);
				return;
			}
			if (event.key !== "Tab" || !modalRef.current) return;
			const focusable = modalRef.current.querySelectorAll(
				'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
			);
			if (!focusable.length) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = previousOverflow;
			triggerRef.current?.focus();
		};
	}, [selectedProject]);

	const scrollImageFrame = () => {
		const wrapper = modalImageWrapperRef.current;
		if (!wrapper) return;
		wrapper.scrollTo({ top: wrapper.scrollHeight, behavior: "smooth" });
	};

	const hasView = (project, type) =>
		project.views.some((view) => view.label.toLowerCase() === type)
			? "✅"
			: project.missing.includes(type)
			? "🔜 planned"
			: "—";

	const isBackendView = (view) => /back/i.test(view.label);

	const getPreviewImage = (project, mode) => {
		if (!project) return "";
		if (mode === "light" && project.lightImage) return project.lightImage;
		if (mode === "mobile" && project.mobileImage) return project.mobileImage;
		return project.image;
	};

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">04</span>
				<p className="eyebrow">Selected work</p>
				<h1>
					<span className="accent">portfolio</span>
				</h1>
				<p>
					A selection of sites and apps I&apos;ve built. Each project reflects
					a different challenge—e-commerce, content publishing, mobile apps,
					and multi-role platforms. I&apos;m currently completing my
					Bachelor&apos;s in Computer Science for Web Design &amp; Development
					at Full Sail University and actively seeking opportunities in the
					field.
				</p>
			</header>

			<div className="projectGrid">
				{projects.map((project) => (
					<button
						key={project.title}
						type="button"
						className="projectCard"
						onClick={(event) => {
							triggerRef.current = event.currentTarget;
							setPreviewMode("dark");
							setSelectedProject(project);
						}}
					>
						<div className="projectImage">
							<img src={project.image} alt={project.title} />
						</div>
						<div className="projectInfo">
							<h2>{project.title}</h2>
							<p className="projectRole">
								{project.role}{project.timeframe ? ` · ${project.timeframe}` : ""}
							</p>
							<p className="projectSummary">{project.summary}</p>
							<div className="projectTags">
								{project.stack.map((item) => <span key={item}>{item}</span>)}
							</div>
						</div>
					</button>
				))}
			</div>

			{selectedProject && (
				<div
					className="modalOverlay"
					onClick={() => setSelectedProject(null)}
				>
					<div
						className="projectModal"
						ref={modalRef}
						role="dialog"
						aria-modal="true"
						aria-label={selectedProject.title}
						onClick={(event) => event.stopPropagation()}
					>
						<button
							ref={closeButtonRef}
							type="button"
							className="modalClose"
							onClick={() => setSelectedProject(null)}
							aria-label="Close"
						>
							×
						</button>
						<div className="previewTabs" role="tablist" aria-label="Preview mode">
							<button
								type="button"
								role="tab"
								aria-selected={previewMode === "dark"}
								className={previewMode === "dark" ? "active" : ""}
								onClick={() => setPreviewMode("dark")}
							>
								Dark
							</button>
							{selectedProject.lightImage && (
								<button
									type="button"
									role="tab"
									aria-selected={previewMode === "light"}
									className={previewMode === "light" ? "active" : ""}
									onClick={() => setPreviewMode("light")}
								>
									Light
								</button>
							)}
							{selectedProject.mobileImage && (
								<button
									type="button"
									role="tab"
									aria-selected={previewMode === "mobile"}
									className={previewMode === "mobile" ? "active" : ""}
									onClick={() => setPreviewMode("mobile")}
								>
									Mobile
								</button>
							)}
						</div>
						<div
							className="modalImageWrapper"
							ref={modalImageWrapperRef}
						>
							<img
								className={previewMode === "mobile" ? "modalImage mobilePreview" : "modalImage"}
								src={getPreviewImage(selectedProject, previewMode)}
								alt={`${selectedProject.title} ${previewMode} preview`}
							/>
							<button
								type="button"
								className="scrollSiteOverlay"
								onClick={scrollImageFrame}
								aria-label="Scroll to view full site screenshot"
							>
								<span>Scroll to view site</span>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<polyline points="6 9 12 15 18 9" />
								</svg>
							</button>
						</div>
						<div className="modalBody">
							<h2>{selectedProject.title}</h2>
							<p className="modalRole">
								{selectedProject.role}{selectedProject.timeframe ? ` · ${selectedProject.timeframe}` : ""}
							</p>
							<p>{selectedProject.summary}</p>

							<div className="modalDetailGrid">
								<section>
									<h3>Challenge</h3>
									<p>{selectedProject.problem}</p>
								</section>
								<section>
									<h3>What I contributed</h3>
									<ul className="bulletList">
										{selectedProject.contributions.map((item) => <li key={item}>{item}</li>)}
									</ul>
								</section>
								<section>
									<h3>Outcomes</h3>
									<ul className="bulletList">
										{selectedProject.outcomes.map((item) => <li key={item}>{item}</li>)}
									</ul>
								</section>
							</div>

							<div className="modalLinks">
								<div className="modalLinksLeft">
									{selectedProject.views.filter((view) => !isBackendView(view)).map((view) => (
										<a
											key={`${view.label}-${view.url}`}
											href={view.url}
											className={view.label === "Front" ? "modalLink primary" : "modalLink"}
											target="_blank"
											rel="noopener noreferrer"
										>
											{view.label}
										</a>
									))}
									{selectedProject.views.some(isBackendView) && (
										<span className="backendNote">Backend available / running</span>
									)}
									{selectedProject.missing.map((type) => (
										<span key={type} className="modalLink planned" title={`${selectedProject.title} - ${type}: needs to be created`}>
											{type.charAt(0).toUpperCase() + type.slice(1)} (planned)
										</span>
									))}
								</div>
								{selectedProject.repo && (
									<div className="modalLinksRight">
										<a
											href={selectedProject.repo}
											className="modalLink"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub Repo
										</a>
									</div>
								)}
							</div>
							<div className="projectTags">
								{selectedProject.stack.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			<section className="infoCard inventoryCard">
				<h2 className="cardTitle">
					<span className="accent">deployment inventory</span>
				</h2>
				<p>
					Below is the current state of deployed views for each project. Items
					marked <span className="accent">planned</span> still need a Vercel
					project/deployment created. The naming convention is{" "}
					<code>sitename - type</code>, where type is frontend, backend, admin,
					or mobile.
				</p>
				<div className="tableScroll">
					<table className="dataTable">
						<thead>
							<tr>
								<th>Project</th>
								<th>Frontend</th>
								<th>Backend</th>
								<th>Admin</th>
								<th>Mobile</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project) => (
								<tr key={project.title}>
									<td className="tableProject">{project.title}</td>
									<td>{hasView(project, "front")}</td>
									<td>{hasView(project, "back")}</td>
									<td>{hasView(project, "admin")}</td>
									<td>{hasView(project, "mobile")}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			<section className="infoCard closingCard">
				<h2 className="cardTitle">
					<span className="accent">what these projects show</span>
				</h2>
				<p>
					Together, these projects highlight a progression from interface
					implementation to content architecture, deployment awareness, and
					cross-platform thinking. I value work that balances visual clarity,
					technical reliability, and room for future iteration.
				</p>
			</section>
		</div>
	);
};

export default Portfolio;
