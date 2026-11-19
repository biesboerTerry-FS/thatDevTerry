import React from "react";
import { NavLink } from "react-router-dom";
import {
	FaFacebook,
	FaInstagram,
	FaGithub,
	FaTwitter,
	FaSlack,
} from "react-icons/fa";

const Overlay = (props) => {
	return (
		<div className={props.toggleData ? "navOverlay active" : "navOverlay"}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<div className="navItems">
				<div
					className={
						props.toggleData
							? "navContainer active"
							: "navContainer"
					}
				>
					<div className="navLink">
						<NavLink
							to="/"
							end
							data-number="I"
							onClick={props.onClose}
						>
							home
						</NavLink>
					</div>
					<div className="navLink">
						<NavLink
							to="/about"
							data-number="II"
							onClick={props.onClose}
						>
							about
						</NavLink>
					</div>
					<div className="navLink">
						<NavLink
							to="/work"
							data-number="III"
							onClick={props.onClose}
						>
							now
						</NavLink>
					</div>
					<div className="navLink">
						<NavLink
							to="/portfolio"
							data-number="IV"
							onClick={props.onClose}
						>
							portfolio
						</NavLink>
					</div>
					<div className="navLink">
						<NavLink
							to="/contact"
							data-number="V"
							onClick={props.onClose}
						>
							contact
						</NavLink>
					</div>
				</div>
			</div>

			<div
				className={props.toggleData ? "navSocial active" : "navSocial"}
			>
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

			<div
				className={
					props.toggleData ? "copyWrapper active" : "copyWrapper"
				}
			>
				<p className="copyright">
					Copyright © {new Date().getFullYear()} | Terry Biesboer
				</p>
			</div>
		</div>
	);
};

export default Overlay;

// import React from "react";
// import styled, { css } from "styled-components";
// import { NavLink } from "react-router-dom";
// import {
// 	FaFacebook,
// 	FaInstagram,
// 	FaGithub,
// 	FaTwitter,
// 	FaSlack,
// } from "react-icons/fa";

// const OverlayContainer = styled.div`
// 	width: 100%;
// 	height: 100vh;
// 	position: fixed;
// 	top: 0;
// 	z-index: 500;
// 	visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
// 	overflow: hidden;

// 	span {
// 		background-color: #000;
// 		width: 100%;
// 		height: 25%;
// 		position: relative;
// 		display: block;
// 		transform: translateX(-100%);
// 		transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);

// 		${({ isActive }) =>
// 			isActive &&
// 			css`
// 				transform: translateX(0);
// 			`}

// 		&:nth-child(4) {
// 			transition-delay: 0s;
// 		}
// 		&:nth-child(3) {
// 			transition-delay: 0.1s;
// 		}
// 		&:nth-child(2) {
// 			transition-delay: 0.2s;
// 		}
// 		&:nth-child(1) {
// 			transition-delay: 0.3s;
// 		}
// 	}
// `;

// const NavItems = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	position: absolute;
// 	top: 0;
// 	width: 100%;
// 	height: 100vh;
// `;

// const NavContainer = styled.div`
// 	.navLink {
// 		overflow: hidden;

// 		a {
// 			display: block;
// 			text-align: center;
// 			text-decoration: none;
// 			font-size: 40px;
// 			font-weight: bold;
// 			position: relative;
// 			line-height: 1.5;
// 			padding-bottom: 30px;
// 			color: rgba(255, 255, 255, 0.5);
// 			transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
// 			transform: ${({ isActive }) =>
// 				isActive ? "translateY(0)" : "translateY(100%)"};

// 			&.active,
// 			&:hover {
// 				color: #fff;

// 				&::after {
// 					content: attr(data-number);
// 					position: absolute;
// 					top: 0;
// 					left: 0;
// 					right: 0;
// 					opacity: 0.2;
// 					letter-spacing: 0;
// 					transform: scale(2);
// 				}
// 			}
// 		}
// 	}
// `;

// const NavSocial = styled.div`
// 	height: 250px;
// 	position: absolute;
// 	left: 30px;
// 	bottom: 10%;

// 	a {
// 		display: block;
// 		padding: 20px;
// 		position: relative;
// 		left: ${({ isActive }) => (isActive ? "0" : "-100px")};
// 		color: #fff;
// 		transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);

// 		&:nth-child(1) {
// 			transition-delay: 0.1s;
// 		}
// 		&:nth-child(2) {
// 			transition-delay: 0.2s;
// 		}
// 		&:nth-child(3) {
// 			transition-delay: 0.3s;
// 		}
// 		&:nth-child(4) {
// 			transition-delay: 0.4s;
// 		}
// 		&:nth-child(5) {
// 			transition-delay: 0.5s;
// 		}
// 	}
// `;

// const CopyWrapper = styled.div`
// 	text-align: center;
// 	position: absolute;
// 	left: 0;
// 	right: 0;
// 	bottom: 20px;
// 	overflow: hidden;

// 	.copyright {
// 		font-size: 12px;
// 		color: #8f8e8e;
// 		transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
// 		letter-spacing: 1.2px;
// 		transform: ${({ isActive }) =>
// 			isActive ? "translateY(0)" : "translateY(100%)"};
// 	}
// `;

// const Overlay = ({ toggleData }) => {
// 	return (
// 		<OverlayContainer isActive={toggleData}>
// 			<span></span>
// 			<span></span>
// 			<span></span>
// 			<span></span>

// 			<NavItems>
// 				<NavContainer isActive={toggleData}>
// 					<div className="navLink">
// 						<NavLink
// 							exact
// 							to="/"
// 							activeClassName="active"
// 							data-number="I"
// 						>
// 							home
// 						</NavLink>
// 					</div>
// 					<div className="navLink">
// 						<NavLink
// 							to="/about"
// 							activeClassName="active"
// 							data-number="II"
// 						>
// 							about
// 						</NavLink>
// 					</div>
// 					<div className="navLink">
// 						<NavLink
// 							to="/work"
// 							activeClassName="active"
// 							data-number="III"
// 						>
// 							work
// 						</NavLink>
// 					</div>
// 					<div className="navLink">
// 						<NavLink
// 							to="/portfolio"
// 							activeClassName="active"
// 							data-number="IV"
// 						>
// 							portfolio
// 						</NavLink>
// 					</div>
// 					<div className="navLink">
// 						<NavLink
// 							to="/contact"
// 							activeClassName="active"
// 							data-number="V"
// 						>
// 							contact
// 						</NavLink>
// 					</div>
// 				</NavContainer>
// 			</NavItems>

// 			<NavSocial isActive={toggleData}>
// 				<a href="/">
// 					<FaFacebook />
// 				</a>
// 				<a href="/">
// 					<FaInstagram />
// 				</a>
// 				<a href="/">
// 					<FaGithub />
// 				</a>
// 				<a href="/">
// 					<FaTwitter />
// 				</a>
// 				<a href="/">
// 					<FaSlack />
// 				</a>
// 			</NavSocial>

// 			<CopyWrapper isActive={toggleData}>
// 				<p className="copyright">Copyright © 2024 | Terry Biesboer</p>
// 			</CopyWrapper>
// 		</OverlayContainer>
// 	);
// };

// export default Overlay;
