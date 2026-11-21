import React, { useEffect, useState } from "react";
import duckLogo from "../images/logo.png";

const SESSION_KEY = "thatdevterry-intro-seen";
const WORDMARK = "thatDevTerry";

/**
 * Page-load intro: the duck logo scales in with an expanding pink ring, blurs
 * away, then a monospace typewriter types "thatDevTerry" with a blinking caret
 * before the whole overlay fades to reveal the app. Runs once per session and
 * respects reduced-motion.
 */
export default function Intro({ onDone }) {
	const [phase, setPhase] = useState("duck"); // duck -> typing -> done
	const [typed, setTyped] = useState("");

	useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			onDone();
			return;
		}

		// Duck appears, holds, then collapses into the wordmark area.
		const toTyping = setTimeout(() => setPhase("typing"), 1700);
		const timers = [];

		// Type the wordmark one character at a time (starts after the duck).
		WORDMARK.split("").forEach((_, index) => {
			timers.push(
				setTimeout(() => setTyped(WORDMARK.slice(0, index + 1)), 1850 + index * 130),
			);
		});

		// Hold the completed wordmark briefly, then fade the overlay out.
		const finish = setTimeout(onDone, 1850 + WORDMARK.length * 130 + 700);

		return () => {
			clearTimeout(toTyping);
			timers.forEach(clearTimeout);
			clearTimeout(finish);
		};
	}, [onDone]);

	const caretVisible = phase === "typing" && typed.length < WORDMARK.length;

	return (
		<div className={`intro ${phase === "typing" ? "intro-typing" : ""}`} aria-hidden="true">
			<div className="intro-ring" />
			<img className="intro-duck" src={duckLogo} alt="" />
			<div className={`intro-code${phase === "typing" ? " intro-code-active" : ""}`}>
				<span className="intro-prompt">&gt;_</span>
				<span className="intro-typed">{typed}</span>
				{caretVisible ? <span className="intro-caret" /> : null}
			</div>
		</div>
	);
}

export function shouldShowIntro() {
	try {
		return !sessionStorage.getItem(SESSION_KEY);
	} catch {
		return true;
	}
}

export function markIntroSeen() {
	try {
		sessionStorage.setItem(SESSION_KEY, "1");
	} catch {
		// storage unavailable — intro will simply replay next load
	}
}
