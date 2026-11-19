import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import {
// 	FaFacebook,
// 	FaInstagram,
// 	FaGithub,
// 	FaTwitter,
// 	FaSlack,
// } from "react-icons/fa";
import avatar from "../images/terry.jpeg";

const Homepage = () => {
	useEffect(() => {
		document.title = "Terry Biesboer | Portfolio";
	}, []);

	return (
		<div className="contentArea">
			<div className="bioContainer">
				<div className="avatar">
					<div
						className="image"
						style={{ backgroundImage: `url(${avatar})` }}
						role="img"
						aria-label="Terry Biesboer"
					></div>
				</div>
				<div className="bio">
					<h1>
						<span className="accent">Terry Biesboer</span>
					</h1>
					<p>
						Hi, I&apos;m <strong>Terry Biesboer</strong> — a passionate full-stack
						developer based in <span className="accent">San Diego, CA</span>.
					</p>
					<p>
						I&apos;m currently completing my Bachelor&apos;s in Computer Science
						for Web Design &amp; Development at <span className="accent">Full Sail University</span> and
						actively seeking opportunities in web development and related fields.
					</p>
					<p>
						This portfolio is a place to share the projects I&apos;ve built, the
						decisions behind them, and a snapshot of what I&apos;m focused on as
						I keep building for the web.
					</p>
					<div className="homeLinks">
						<Link className="accentLink" to="/about">About me →</Link>
						<Link className="accentLink" to="/portfolio">View projects →</Link>
						<Link className="accentLink" to="/contact">Get in touch →</Link>
					</div>
					{/* <div className="social">
						<a
							href="https://www.facebook.com"
							className="socialLinks"
							aria-label="Facebook"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook />
						</a>
						<a
							href="https://www.instagram.com"
							className="socialLinks"
							aria-label="Instagram"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram />
						</a>
						<a
							href="https://github.com/biesboerTerry-FS"
							className="socialLinks"
							aria-label="GitHub"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.twitter.com"
							className="socialLinks"
							aria-label="Twitter"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter />
						</a>
						<a
							href="https://www.slack.com"
							className="socialLinks"
							aria-label="Slack"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaSlack />
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Homepage;
