import React from "react";
import Parser from "html-react-parser";

const config = {};

export const ParseHTML = html => {
	const clean = Parser(html, config);
	return clean;
};

export default ParseHTML;
