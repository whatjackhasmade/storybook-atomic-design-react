import styled from "styled-components";
import { device } from "../../particles/mediaQueries";

const headerColour = props => {
	// Fallback value if we can't get access to props
	if (!props || !props.theme || !props.theme.black) return "#131313";

	// If no variant is specified, return the white colour
	if (!props.variant) return props.theme.black;

	// Dynamically determine the background colour based on props
	let colour;
	switch (props.variant) {
		case "fixedLight":
			colour = props.theme.white;
			break;
		case "fixedDark":
			colour = props.theme.black;
			break;
		default:
			colour = props.theme.black;
			break;
	}

	return colour;
};

const headerPosition = props => {
	// Fallback value if we can't get access to props
	if (!props || !props.variant) return "relative";

	// Dynamically determine the background colour based on props
	let position;
	switch (props.variant) {
		case "fixedLight":
			position = "absolute";
			break;
		case "fixedDark":
			position = "absolute";
			break;
		default:
			position = "relative";
			break;
	}

	return position;
};

export const StyledHeader = styled.header`
	align-items: center;
	display: flex;
	left: ${props => (props.variant ? `0` : undefined)};
	padding: 30px;
	position: relative;
	top: ${props => (props.variant ? `0` : undefined)};
	width: 100%;
	z-index: 9;

	color: ${props => headerColour(props)};

	@media ${device.md} {
		display: block;
		padding: 0;
		position: ${props => headerPosition(props)};
	}

	button {
		display: inline-flex;
		margin-left: auto;

		@media ${device.md} {
			display: none;
		}
	}

	img {
		height: 40px;

		@media ${device.md} {
			height: 64px;
			left: 50%;
			position: absolute;
			top: 50%;

			transform: translate(-50%, -50%);
		}
	}

	nav {
		padding: 0;
	}

	nav + nav {
		margin-left: auto;
	}

	svg {
		height: 24px;
		stroke: 1px solid ${props => props.theme.black};
	}

	.header__navigation {
		align-items: center;
		display: block;
		height: 100%;
		padding: 124px 30px 30px;
		position: fixed;
		left: 0;
		top: -100%;
		width: 100%;
		z-index: -1;

		background-color: ${props => props.theme.offWhite};
		color: ${props => props.theme.black};
		transition: 0.4s top ease;

		a + a {
			margin-left: 0;
			margin-top: 16px;

			@media ${device.md} {
				margin-left: 32px;
				margin-top: 0;
			}
		}

		nav {
			padding-top: 24px;
			flex-direction: column;

			border-top: 1px solid ${props => props.theme.grey600};

			@media ${device.md} {
				flex-direction: unset;
				padding-top: 0;

				border-top: none;
			}
		}

		nav + nav {
			margin-top: 24px;

			@media ${device.md} {
				margin-top: 0;
			}
		}

		@media ${device.md} {
			display: flex;
			left: unset;
			margin: 0 auto;
			max-width: 1920px;
			min-height: 124px;
			padding: 30px;
			position: relative;

			background-color: transparent;
			color: inherit;
		}
	}

	&.header--open {
		.header__navigation {
			top: 0%;

			@media ${device.md} {
				left: unset;
			}
		}
	}
`;

export default StyledHeader;
