import React from "react";
import { func, node, string } from "prop-types";

import StyledButton, { StyledLinkButton } from "./button.styles";

const Button = ({ children, href, onClick, variant }) => {
	if (!href)
		return (
			<StyledButton onClick={onClick} variant={variant}>
				{children}
			</StyledButton>
		);
	return (
		<StyledLinkButton href={href} variant={variant}>
			{children}
		</StyledLinkButton>
	);
};

// Expected prop values
Button.propTypes = {
	children: node.isRequired,
	href: string,
	onClick: func,
	variant: string
};

// Default prop values
Button.defaultProps = {
	children: "Button text",
	variant: "primary"
};

export default Button;
