import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Overlay from "./Overlay";
import logo from "../images/logo.png";

const pageLinks = [
	{ to: "/", label: "home" },
	{ to: "/about", label: "about" },
	{ to: "/work", label: "work" },
	{ to: "/portfolio", label: "portfolio" },
	{ to: "/contact", label: "contact" },
];

const Navigation = () => {
	const [isToggled, setIsToggled] = useState(false);
	const onClickHandler = () => setIsToggled(!isToggled);
	const { pathname } = useLocation();

	return (
		<>
			<div className="navWrapper">
				{isToggled && (
					<div className="logo menuLogo">
						<img src={logo} alt="logo" />
					</div>
				)}
				<button
					type="button"
					onClick={onClickHandler}
					className={isToggled ? "menu active" : "menu"}
					aria-label={isToggled ? "Close menu" : "Open menu"}
					aria-expanded={isToggled}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			<div className="headerWrapper"></div>
			{pathname !== "/" && (
				<nav className="sideNav">
					{pageLinks.map((link) => (
						<NavLink key={link.to} to={link.to} end>
							{link.label}
						</NavLink>
					))}
				</nav>
			)}
			<Overlay
				toggleData={isToggled}
				onClose={() => setIsToggled(false)}
			/>
		</>
	);
};

export default Navigation;

// import React, { useState } from "react";
// import styled from "styled-components";
// import Overlay from "./Overlay";
// import logo from "../images/logo.png";

// // Styled Components
// const NavWrapper = styled.div`
// 	position: fixed;
// 	width: 100%;
// 	top: 0;
// 	z-index: 800;
// 	mix-blend-mode: darken;
// 	padding: 20px 0 0 30px;
// `;

// const Logo = styled.div`
// 	width: 200px;
// 	height: 200px;
// 	overflow: hidden;
// 	border-radius: 100%;
// 	border: 5px solid #fff;

// 	img {
// 		width: 100%;
// 		height: 100%;
// 		object-fit: cover;
// 	}
// `;

// const Menu = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	position: absolute;
// 	flex-direction: column;
// 	top: 0;
// 	right: 0;
// 	height: 80px;
// 	width: 150px;
// 	color: #fff;
// 	font-size: 20px;
// 	cursor: pointer;
// 	padding-top: 20px;
// 	transition: all 0.3s ease-in-out;

// 	@media (max-width: 768px) {
// 		width: 80px;
// 	}

// 	span {
// 		width: 40px;
// 		height: 3px;
// 		background-color: #000;
// 		transition: all 0.3s ease-in-out;

// 		&:nth-child(2) {
// 			width: 30px;
// 			margin-left: 10px;
// 		}

// 		&:hover:nth-child(2) {
// 			margin-left: -10px;
// 		}
// 	}

// 	span + span {
// 		margin-top: 8px;
// 	}

// 	&.active span:nth-child(1) {
// 		transform-origin: center right;
// 		transform: rotate(-45deg) translateY(-4px);
// 	}

// 	&.active span:nth-child(2) {
// 		opacity: 0;
// 		transform: translateY(30px);
// 	}

// 	&.active span:nth-child(3) {
// 		transform-origin: center right;
// 		transform: rotate(45deg) translateY(4px);
// 	}
// `;

// const HeaderWrapper = styled.div`
// 	width: 150px;
// 	height: 100vh;
// 	background-color: #fff;
// 	position: absolute;
// 	right: 0;
// 	top: 0;

// 	@media (max-width: 768px) {
// 		display: none;
// 	}
// `;

// const ScrollDown = styled.div`
// 	position: absolute;
// 	bottom: 80px;
// 	width: 100%;
// 	text-align: center;
// 	font-size: 12px;
// 	transform: rotate(90deg);
// 	cursor: pointer;
// `;

// // Navigation Component
// const Navigation = () => {
// 	const [isToggled, setIsToggled] = useState(false);

// 	const onClickHandler = () => setIsToggled(!isToggled);

// 	return (
// 		<>
// 			<NavWrapper>
// 				<Logo>
// 					<img src={logo} alt="logo" />
// 				</Logo>
// 				<Menu
// 					onClick={onClickHandler}
// 					className={isToggled ? "active" : ""}
// 				>
// 					<span></span>
// 					<span></span>
// 					<span></span>
// 				</Menu>
// 			</NavWrapper>
// 			<HeaderWrapper>
// 				<ScrollDown>scroll down</ScrollDown>
// 			</HeaderWrapper>
// 			<Overlay toggleData={isToggled} />
// 		</>
// 	);
// };

// export default Navigation;
