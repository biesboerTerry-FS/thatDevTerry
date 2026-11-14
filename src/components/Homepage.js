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
		document.title = "Terence Biesboer | Portfolio";
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
					<h1>Terence Biesboer</h1>
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

// import React from "react";
// import avatar from "../images/terry.jpeg";
// import styled from "styled-components";

// const ContentArea = styled.div`
// 	width: calc(100% - 15px);
// 	height: 100vh;
// 	margin-top: 0;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	@media (max-width: 760px) {
// 		width: 100%;
// 	}

// 	@media (max-width: 375px) {
// 		padding-top: 50px;
// 	}
// `;

// const BioContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	padding: 0 8% 0 5%;
// 	box-sizing: border-box;

// 	@media (max-width: 768px) {
// 		flex-direction: column;
// 		padding: 0 2%;
// 	}
// `;

// const Avatar = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 300px;
// 	height: 300px;
// 	border-radius: 100%;
// 	position: relative;

// 	@media (max-width: 767px) {
// 		width: 200px;
// 		height: 200px;
// 	}

// 	.image {
// 		position: absolute;
// 		top: 0;
// 		right: 0;
// 		left: 0;
// 		bottom: 0;
// 		background-repeat: no-repeat;
// 		background-position: center;
// 		background-size: cover;
// 		animation: morph 8s ease-in-out infinite 1s;
// 		background-blend-mode: multiply;
// 		box-shadow: inset 0 0 0 9px rgba(255, 255, 255, 0.3);
// 	}
// `;

// const Bio = styled.div`
// 	width: calc(100% - 350px);
// 	margin-left: 50px;
// 	color: #fff;

// 	@media (max-width: 768px) {
// 		width: 100%;
// 		padding: 0 15px;
// 		text-align: center;
// 		margin: 0;
// 	}

// 	h1 {
// 		font-size: 5vw;
// 		margin-bottom: 15px;
// 		padding: 0;
// 		color: #bbb;

// 		@media (max-width: 768px) {
// 			margin-top: 30px;
// 		}
// 	}

// 	p {
// 		font-style: italic;
// 		font-weight: 500;
// 		max-width: 450px;
// 		margin-bottom: 30px;
// 		color: #bbb;
// 		line-height: 1.5;
// 	}
// `;

// const MorphAnimation = styled.keyframes`
// 	0% {
// 		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
// 	}
// 	50% {
// 		border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
// 	}
// 	100% {
// 		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
// 	}
// `;

// const SocialLinks = styled.div`
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;

// 	@media (max-width: 768px) {
// 		justify-content: center;
// 	}

// 	.fa {
// 		font-size: 20px;

// 		+ .fa {
// 			margin-left: 20px;
// 		}
// 	}
// `;

// const Homepage = () => {
// 	return (
// 		<ContentArea>
// 			<BioContainer>
// 				<Avatar>
// 					<div
// 						className="image"
// 						style={{ backgroundImage: `url(${avatar})` }}
// 					></div>
// 				</Avatar>
// 				<Bio>
// 					<h1>Terence Biesboer</h1>
// 					<p>
// 						I'm Terry, a passionate Full-Stack Developer from Saint
// 						Louis, MO
// 					</p>
// 				</Bio>
// 			</BioContainer>
// 		</ContentArea>
// 	);
// };

// export default Homepage;

// import React from "react";
// import avatar from "../images/terry.jpeg";
// import styled, { keyframes } from "styled-components";

// const ContentArea = styled.div`
// 	width: calc(100% - 15px);
// 	height: 100vh;
// 	margin-top: 0;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	@media (max-width: 760px) {
// 		width: 100%;
// 	}

// 	@media (max-width: 375px) {
// 		padding-top: 50px;
// 	}
// `;

// const BioContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	padding: 0 8% 0 5%;
// 	box-sizing: border-box;

// 	@media (max-width: 768px) {
// 		flex-direction: column;
// 		padding: 0 2%;
// 	}
// `;

// const Avatar = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 300px;
// 	height: 300px;
// 	border-radius: 100%;
// 	position: relative;

// 	@media (max-width: 767px) {
// 		width: 200px;
// 		height: 200px;
// 	}

// 	.image {
// 		position: absolute;
// 		top: 0;
// 		right: 0;
// 		left: 0;
// 		bottom: 0;
// 		background-repeat: no-repeat;
// 		background-position: center;
// 		background-size: cover;
// 		animation: morph 8s ease-in-out infinite 1s;
// 		background-blend-mode: multiply;
// 		box-shadow: inset 0 0 0 9px rgba(255, 255, 255, 0.3);
// 	}
// `;

// const morphAnimation = keyframes`
// 	0% {
// 		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
// 	}
// 	50% {
// 		border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
// 	}
// 	100% {
// 		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
// 	}
// `;

// const Bio = styled.div`
// 	width: calc(100% - 350px);
// 	margin-left: 50px;
// 	color: #fff;

// 	@media (max-width: 768px) {
// 		width: 100%;
// 		padding: 0 15px;
// 		text-align: center;
// 		margin: 0;
// 	}

// 	h1 {
// 		font-size: 5vw;
// 		margin-bottom: 15px;
// 		padding: 0;
// 		color: #bbb;

// 		@media (max-width: 768px) {
// 			margin-top: 30px;
// 		}
// 	}

// 	p {
// 		font-style: italic;
// 		font-weight: 500;
// 		max-width: 450px;
// 		margin-bottom: 30px;
// 		color: #bbb;
// 		line-height: 1.5;
// 	}
// `;

// const SocialLinks = styled.div`
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;

// 	@media (max-width: 768px) {
// 		justify-content: center;
// 	}

// 	.fa {
// 		font-size: 20px;

// 		+ .fa {
// 			margin-left: 20px;
// 		}
// 	}
// `;

// const Homepage = () => {
// 	return (
// 		<ContentArea>
// 			<BioContainer>
// 				<Avatar>
// 					<div
// 						className="image"
// 						style={{ backgroundImage: `url(${avatar})` }}
// 					></div>
// 				</Avatar>
// 				<Bio>
// 					<h1>Terence Biesboer</h1>
// 					<p>
// 						I'm Terry, a passionate Full-Stack Developer from Saint
// 						Louis, MO
// 					</p>
// 				</Bio>
// 			</BioContainer>
// 		</ContentArea>
// 	);
// };

// export default Homepage;
