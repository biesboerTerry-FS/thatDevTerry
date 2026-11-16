import React, { useEffect } from "react";
import {
	FaFacebook,
	FaInstagram,
	FaGithub,
	FaTwitter,
	FaSlack,
} from "react-icons/fa";
import avatar from "../images/terry.jpeg";

const Homepage = (props) => {
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
					></div>
				</div>
				<div className="bio">
					<h1>Terry Biesboer</h1>
					<p>
						I'm Terry, a passionate Full-Stack Developer from San Diego,
						CA
					</p>
					<div className="social">
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
							href="https://www.github.com"
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
