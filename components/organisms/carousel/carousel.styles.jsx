import styled from "styled-components";

const productBackground = ({ index }) => {
	if (!index) return `#ECDCC6`;
	if (index % 2 === 0) return `#ECDCC6`;
	return `#c6e3ec`;
};

export const StyledCarousel = styled.section`
	margin-left: calc(-50vw + 50%);
	margin-right: calc(-50vw + 50%);
	padding: 64px 0;

	@media (min-width: 992px) {
		padding: 96px 0;
	}

	.carousel__slider {
		overflow: hidden;
	}

	.slick-dots {
		bottom: 0;
		margin-top: 64px;
		position: relative;

		button {
			border-radius: 50%;

			border: 2px solid #a0d0df;
			box-shadow: none;
			transition: 0.2s background-color ease;

			&::before {
				display: none;
			}

			&:active,
			&:focus,
			&:hover {
				 {
					/* TODO: Replace with theme values */
				}
				background-color: "#a0d0df";
			}
		}

		.slick-active {
			button {
				background-color: #54aac5;
				border-color: #54aac5;
			}
		}
	}

	.slick-slide {
		align-items: center;
		display: flex;
		height: auto;
		justify-content: center;

		opacity: 0.4;
		transition: 0.4s opacity ease;

		> div {
			height: 100%;
		}
	}

	.slick-track {
		display: flex;

		cursor: grab;
	}

	.slick-active {
		opacity: 1;
	}
`;

export const SyledCarouselItem = styled.div`
	height: 100%;
	margin: ${props => (props.type === "product" ? `0 20px` : undefined)};
	padding: ${props => (props.type === "product" ? `24px` : `0 30px`)};

	background-color: ${props =>
		props.type === "product" ? productBackground(props) : undefined};

	.carousel__item__description {
		display: ${props => (props.type === "product" ? `none` : undefined)};
		margin: 12px 0 0;
	}

	.carousel__item__image {
		margin-bottom: 24px;
		padding-top: 56.25%;
		position: relative;
		width: 100%;

		img {
			bottom: 0;
			height: 100%;
			left: 0;
			position: absolute;
			right: 0;
			top: 0;
			width: 100%;

			object-fit: cover;
		}
	}

	.carousel__item__title {
		margin-bottom: ${props => (props.type === "product" ? `0` : `12px`)};
		margin-top: ${props => (props.type === "product" ? `10px` : `12px`)};
		padding-right: 24px;

		color: ${props => props.theme.grey900};
		font-size: ${props => (props.type === "product" ? `24px` : `28px`)};
	}

	.carousel__item__subtitle {
		margin-bottom: 8px;
		margin-top: 24px;

		color: ${props => props.theme.black};
		font-size: ${props => (props.type === "product" ? `16px` : `18px`)};
		font-weight: ${props => (props.type === "product" ? `300` : `400`)};
	}
`;

export default StyledCarousel;
