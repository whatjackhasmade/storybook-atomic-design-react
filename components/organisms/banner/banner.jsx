import React from "react";
import { shape, string } from "prop-types";

import StyledBanner from "./banner.styles";

import ParseHTML from "../../particles/parseHTML";

import Button from "../../atoms/button/button";

const Banner = props => {
	const { content, cta, title } = props;
	return (
		<StyledBanner {...props} className="banner">
			<div className="banner__contents">
				{title && <h2 className="banner__title">{title}</h2>}
				{content && <div className="banner__content">{ParseHTML(content)}</div>}
				{cta && cta.title && cta.title !== "" && (
					<footer className="banner__footer">
						<Button href={cta.url} target={cta.target}>
							{cta.title}
						</Button>
					</footer>
				)}
			</div>
		</StyledBanner>
	);
};

Banner.propTypes = {
	cta: shape({
		target: string,
		title: string,
		url: string
	}),
	content: string.isRequired,
	title: string,
	variant: string.isRequired
};

Banner.defaultProps = {
	content: "",
	variant: "primary"
};

export default Banner;
