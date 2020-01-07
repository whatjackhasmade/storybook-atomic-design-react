import styled from "styled-components";

const bannerBackground = props => {
	// Fallback value if we can't get access to props
	if (!props || !props.theme || !props.theme.primary) return "#25136C";

	// If a background value is specified, use that instead of theme
	if (props.background) return props.background;

	// If no variant is specified, return the primary colour in our theme
	if (!props.variant) return props.theme.primary700;

	// Dynamically determine the background colour based on props
	let colour;
	switch (props.variant) {
		case "primary":
			colour = props.theme.primary700;
			break;
		case "secondary":
			colour = props.theme.secondary;
			break;
		case "tertiary":
			colour = props.theme.offWhite;
			break;
		default:
			colour = props.theme.primary700;
			break;
	}

	return colour;
};

const bannerColour = props => {
	// Fallback value if we can't get access to props
	if (!props || !props.theme || !props.theme.primary) return "white";

	// If no variant is specified, return the white colour
	if (!props.variant) return "white";

	// Dynamically determine the background colour based on props
	let colour;
	switch (props.variant) {
		case "primary":
			colour = props.theme.white;
			break;
		case "secondary":
			colour = props.theme.white;
			break;
		case "tertiary":
			colour = props.theme.black;
			break;
		default:
			colour = props.theme.white;
			break;
	}

	return colour;
};

export const StyledBanner = styled.section`
	padding: 64px 30px;

	background-color: ${props => bannerBackground(props)};
	color: ${props => bannerColour(props)};
	text-align: center;

	@media (min-width: 992px) {
		padding: 96px 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 36px;
		letter-spacing: -0.05em;
		line-height: 110%;
	}

	p {
		margin: 16px auto;
		max-width: 352px;

		color: ${props => props.theme.white};
		font-size: 18px;
		letter-spacing: -0.05em;
		line-height: 140%;
	}

	p:first-of-type {
		margin-top: 0;
	}

	p:last-of-type {
		margin-bottom: 0;
	}

	.banner__contents {
		margin: 0 auto;
		max-width: ${props => props.theme.gridMax};
	}

	.banner__footer {
		margin-top: 32px;

		a {
			background-color: ${props => props.theme.white};
			color: ${props => props.theme.primary700};
		}
	}
`;

export default StyledBanner;
