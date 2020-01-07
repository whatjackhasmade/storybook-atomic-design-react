import styled from "styled-components";

export const StyledRelated = styled.section`
	padding: 64px 30px;

	@media (min-width: 992px) {
		padding: 96px 30px;
	}

	.related__contents {
		margin: 0 auto;
		max-width: ${props => props.theme.gridMax};
	}

	.related__items {
		@media (min-width: 556px) {
			display: grid;
			grid-gap: 32px;
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 992px) {
			grid-gap: 40px;
			grid-row-gap: 48px;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.related-item {
		padding: ${props => (props.variant === "products" ? `32px` : undefined)};

		background-color: ${props =>
			props.variant === "products" ? `#ecdcc6` : undefined};

		&:nth-of-type(2n) {
			background-color: ${props =>
				props.variant === "products" ? props.theme.secondary200 : undefined};
		}

		&:active,
		&:focus,
		&:focus-within,
		&:hover {
			img {
				transform: ${props =>
					props.variant !== "products" ? `scale(1.1)` : undefined};
			}
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-top: 0;

			color: ${props => props.theme.grey900};
			letter-spacing: -0.05em;
		}

		p {
			color: ${props => props.theme.grey800};
			font-size: 16px;
			letter-spacing: -0.05em;
			line-height: 140%;
		}

		& + .related-item {
			margin-top: 64px;

			@media (min-width: 992px) {
				margin-top: 0;
			}
		}
	}

	.related-item__image {
		display: block;
		height: 0;
		margin-bottom: 16px;
		padding-top: 62.5%;
		position: relative;
		overflow: hidden;
		width: 100%;

		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

		img {
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;

			object-fit: cover;
			transform: scale(1);
			transition: 1s transform ease;
		}

		&:active,
		&:focus,
		&:focus-within,
		&:hover {
			img {
				transform: ${props =>
					props.variant === "products" ? `scale(1.1)` : undefined};
			}
		}
	}

	.related-item__subtitle {
		margin-bottom: 12px;

		color: ${props => props.theme.black};
		font-size: 16px;
		font-weight: 300;
	}

	.related-item__title {
		margin-bottom: ${props => (props.variant !== "products" ? `18px` : `0`)};

		font-size: 24px;
	}
`;

export default StyledRelated;
