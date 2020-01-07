import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";

import Footer from "./footer";

import knobData from "./footer.knobs.json";
const { menus } = knobData;

export const standardFooter = () => (
	<Footer menus={array(menus.label, menus.default, menus.group)} />
);

export default {
	component: Footer,
	decorators: [withKnobs],
	title: "Organisms|Footer"
};
