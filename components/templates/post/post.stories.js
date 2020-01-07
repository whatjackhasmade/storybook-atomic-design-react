import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";

import PostTemplate from "./post";

import knobData from "./post.knobs.json";
const { banner, footer, header, related } = knobData;

const blogContent =
	"<h1>Post Content</h1><p>You need to have a very firm paint to do this. Didn't you know you had that much power? You can move mountains. You can do anything. This is unplanned it really just happens. Let's make a nice big leafy tree.</p><img src='http://unsplash.it/1000/400?random&gravity=center' alt=''/><p>We don't want to set these clouds on fire. There is immense joy in just watching - watching all the little creatures in nature. And maybe, maybe, maybe...</p><p>All you have to learn here is how to have fun. Don't fiddle with it all day. This piece of canvas is your world. And I will hypnotize that just a little bit. Have fun with it.</p><p>In nature, dead trees are just as normal as live trees. I'm sort of a softy, I couldn't shoot Bambi except with a camera. We want to use a lot pressure while using no pressure at all. Let's do that again.</p><p>We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Nice little fluffy clouds laying around in the sky being lazy. Just go out and talk to a tree. Make friends with it.</p><p>We'll play with clouds today. We'll throw some old gray clouds in here just sneaking around and having fun. Anytime you learn something your time and energy are not wasted. Just a little indication.</p><p>If you don't like it - change it. It's your world. Just go back and put one little more happy tree in there. We need a shadow side and a highlight side. It's important to me that you're happy. We spend so much of our life looking - but never seeing. There comes a nice little fluffer.</p>";

export const examplePost = () => (
	<PostTemplate
		banner={object(banner.label, banner.default, banner.group)}
		content={blogContent}
		footer={object(footer.label, footer.default, footer.group)}
		header={object(header.label, header.default, header.group)}
		related={object(related.label, related.default, related.group)}
	/>
);

export default {
	component: PostTemplate,
	decorators: [withKnobs],
	title: "Templates|Blog Post"
};
