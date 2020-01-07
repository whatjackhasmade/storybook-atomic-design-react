import React from "react";
import { array, object, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";
import Homepage from "./homepage";

import knobData from "./homepage.knobs.json";
const { banner, carousel, footer, header } = knobData;

export const homepageExample = () => (
	<Homepage
		footer={object(footer.label, footer.default, footer.group)}
		header={object(header.label, header.default, header.group)}
		banner={{
			content: text(
				banner.content.label,
				banner.content.default,
				banner.content.group
			),
			cta: object(banner.cta.label, banner.cta.default, banner.cta.group),
			title: text(banner.title.label, banner.title.default, banner.title.group)
		}}
		carousel={{
			intro: {
				cta: object(
					carousel.intro.cta.label,
					carousel.intro.cta.default,
					carousel.intro.cta.group
				),
				subtitle: text(
					carousel.intro.subtitle.label,
					carousel.intro.subtitle.default,
					carousel.intro.subtitle.group
				),
				text: text(
					carousel.intro.text.label,
					carousel.intro.text.default,
					carousel.intro.text.group
				),
				title: text(
					carousel.intro.title.label,
					carousel.intro.title.default,
					carousel.intro.title.group
				)
			},
			items: array(
				carousel.items.label,
				carousel.items.default,
				carousel.items.group
			)
		}}
	/>
);

homepageExample.story = {
	parameters: {
		design: {
			type: "figma",
			url:
				"https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=16%3A858"
		}
	}
};

export default {
	component: Homepage,
	decorators: [withDesign],
	title: "Pages|Homepage"
};
