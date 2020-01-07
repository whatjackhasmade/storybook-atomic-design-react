import React from "react";
import { array, shape, string } from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SyledCarousel, { SyledCarouselItem } from "./carousel.styles";

import ParseHTML from "../../particles/parseHTML";

import Intro from "../../molecules/intro/intro";

const settings = {
	centerMode: true,
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1240,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			slidesToShow: 1
		}
	]
};

const Carousel = ({ intro, items, type }) => {
	if (!items) return null;
	if (!items.length) return null;
	items = [...items, ...items];

	return (
		<SyledCarousel className="carousel" type={type}>
			{intro && <Intro {...intro} />}
			<Slider className="carousel__slider" {...settings}>
				{items.map((item, index) => (
					<CarouselItem {...item} index={index} type={type} />
				))}
			</Slider>
		</SyledCarousel>
	);
};

const CarouselItem = ({
	category,
	description,
	image,
	index,
	productCategories,
	shortDescription,
	slug,
	title,
	type
}) => (
	<SyledCarouselItem className="carousel__item" index={index} type={type}>
		{image && slug && (
			<a href={`/${slug}`}>
				<div className="carousel__item__image">
					<img src={image} alt={title} />
				</div>
			</a>
		)}
		{category && category.label && (
			<h4 className="carousel__item__subtitle">{category.label}</h4>
		)}
		{title && (
			<a href={`/${slug}`}>
				<h3 className="carousel__item__title">{title}</h3>
			</a>
		)}
		<div className="carousel__item__description">{ParseHTML(description)}</div>
	</SyledCarouselItem>
);

// Expected prop values
Carousel.propTypes = {
	intro: shape({
		cta: shape({
			target: string,
			title: string,
			url: string
		}),
		subtitle: string.isRequired,
		text: string.isRequired,
		title: string.isRequired
	}),
	items: array.isRequired,
	type: string.isRequired
};

Carousel.defaultProps = {
	items: [],
	type: "standard"
};

export default Carousel;
