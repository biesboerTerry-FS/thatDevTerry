import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Overlay from "./Overlay";
import logo from "../images/logo.png";

const pageLinks = [
	{ to: "/", label: "home" },
	{ to: "/about", label: "about" },
	{ to: "/work", label: "more" },
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
