import styled from "styled-components";

const buttonBackground = props => {
	// Fallback value if we can't get access to props
	if (!props || !props.theme || !props.theme.primary) return "#00FFFF";
	// If no variant is specified, return the primary colour in our theme
	if (!props.variant) return props.theme.primary;

	// Dynamically determine the background colour based on props
	let colour;
	switch (props.variant) {
		case "primary":
			colour = props.theme.primary;
			break;
		case "secondary":
			colour = props.theme.secondary;
			break;
		case "tertiary":
			colour = props.theme.tertiary;
			break;
		default:
			colour = props.theme.primary;
			break;
	}

	return colour;
};

const StyledButton = styled.button`
	align-items: center;
	display: inline-flex;
	padding: 16px;

	background-color: ${props => buttonBackground(props)};
	border: none;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	color: ${props => props.theme.white};
	cursor: pointer;
	font-weight: 700;
	line-height: 1;
	outline: none;
	text-decoration: none;
	transition: all 0.15s ease;
	white-space: nowrap;

	.button__icon {
		display: inline-block;
		margin-right: 4px;
	}
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;

export default StyledButton;
