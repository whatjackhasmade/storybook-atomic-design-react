import React from "react";
import { array, object, shape, string, arrayOf } from "prop-types";

import StyledRelated from "./related.styles";

import ParseHTML from "../../particles/parseHTML";

import Intro from "../../molecules/intro/intro";

const Related = ({ intro, items, variant }) => {
	if (!items) return null;
	if (!items.length) return null;
	return (
		<StyledRelated className="related" variant={variant}>
			<div className="related__contents">
				<Intro {...intro} />
				<div className="related__items">
					{items.map(item => (
						<RelatedItem {...item} variant={variant} />
					))}
				</div>
			</div>
		</StyledRelated>
	);
};

// Expected prop values
Related.propTypes = {
	intro: shape({
		cta: shape({
			href: string.isRequired,
			label: string.isRequired,
			target: string
		}),
		subtitle: string.isRequired,
		text: string.isRequired,
		title: string.isRequired
	}),
	items: array.isRequired,
	variant: string
};

Related.defaultProps = {
	items: [],
	variant: "posts"
};

const RelatedItem = ({
	category,
	description,
	image,
	slug,
	title,
	variant
}) => (
	<div className="related-item">
		{image && slug && (
			<a href={`/${slug}`}>
				<div className="related-item__image">
					<img src={image} alt={title} />
				</div>
			</a>
		)}
		{category && category.href && category.label && (
			<h4 className="related-item__subtitle">
				<a href={category.href}>{category.label}</a>
			</h4>
		)}
		<h3 className="related-item__title">
			<a href={`/${slug}`}>{title}</a>
		</h3>
		<div className="related-item__description">{ParseHTML(description)}</div>
		<a href="#">View article</a>
	</div>
);

// Expected prop values
RelatedItem.propTypes = {
	category: object,
	description: string,
	image: shape({
		altText: string,
		mediaItemUrl: string.isRequired
	}),
	productCategories: object,
	shortDescription: string,
	title: string.isRequired
};

export default Related;
