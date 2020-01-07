import React from "react";
import { shape, string } from "prop-types";

import StyledIntro from "./intro.styles";

const Intro = ({ cta, subtitle, text, title }) => (
	<StyledIntro className="intro">
		<div className="intro__contents">
			{subtitle && <h3 className="intro__subtitle">{subtitle}</h3>}
			{title && <h2 className="intro__title">{title}</h2>}
			{text && <p className="intro__text">{text}</p>}
			{cta && (
				<a className="intro__cta" href={cta.href} target={cta.target}>
					{cta.label}
				</a>
			)}
		</div>
	</StyledIntro>
);

Intro.propTypes = {
	cta: shape({
		href: string.isRequired,
		label: string.isRequired,
		target: string
	}),
	subtitle: string.isRequired,
	text: string.isRequired,
	title: string.isRequired
};

export default Intro;
