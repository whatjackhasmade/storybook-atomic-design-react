import React from "react";
import { func, node, string } from "prop-types";

const Button = ({ children, href, onClick }) => {
	if (!href) return <button onClick={onClick}>{children}</button>;
	return <a href={href}>{children}</a>;
};

Button.propTypes = {
	children: node.isRequired,
	href: string,
	onClick: func
};

export default Button;
