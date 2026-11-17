import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

const Portfolio = () => {
	const [selectedProject, setSelectedProject] = useState(null);
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

	return (
		<div className="page">
			<header className="pageHeader">
				<span className="pageNumber">04</span>
				<h1>
					<span className="accent">portfolio</span>
				</h1>
				<p>
					A collection of sites and apps I've built across the stack — from
					patient-facing frontends and admin panels to backends, APIs, and
					mobile experiences. Click a card to explore each project.
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
							setSelectedProject(project);
						}}
					>
						<div className="projectImage">
							<img src={project.image} alt={project.title} />
						</div>
						<div className="projectInfo">
							<h2>{project.title}</h2>
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
						<div
							className="modalImageWrapper"
							ref={modalImageWrapperRef}
						>
							<img
								className="modalImage"
								src={selectedProject.image}
								alt={selectedProject.title}
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
							<p>{selectedProject.description}</p>
							<div className="modalLinks">
								<div className="modalLinksLeft">
									<a
										href={selectedProject.url}
										className="modalLink primary"
										target="_blank"
										rel="noopener noreferrer"
									>
										Visit Site
									</a>
									{selectedProject.views &&
										selectedProject.views.map((view) => (
											<a
												key={`${view.label}-${view.url}`}
												href={view.url}
												className="modalLink"
												target="_blank"
												rel="noopener noreferrer"
											>
												{view.label}
											</a>
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
								{selectedProject.tags.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Portfolio;
