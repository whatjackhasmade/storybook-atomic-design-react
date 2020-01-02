import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./button";

export const text = () => (
	<Button onClick={action("clicked")}>Just a Button</Button>
);

export const emoji = () => (
	<Button onClick={action("clicked")}>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>
);

export default {
	component: Button,
	title: "Button"
};
