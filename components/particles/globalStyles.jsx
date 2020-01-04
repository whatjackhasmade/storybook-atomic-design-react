import { createGlobalStyle } from "styled-components";
import "normalize.css/normalize.css";

const GlobalStyle = createGlobalStyle`
		/* Accessibly remove animations: https://gist.githubusercontent.com/bellangerq/6cdfe6e3701b4048c72546960c7c9f66/raw/dc5036697d0da57eff8e0f659106b319102e72a0/a11y-disable-animations.css */
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.001ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.001ms !important;
		}
	}

	html {
		color: black;
	  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		font-size: 62.5%;
		/* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
	}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.link--icon::after {
		display: none !important;
	}

	p {
		a {
			color: ${props => props.theme.primary};

			&:active,
			&:focus,
			&:hover {
				text-decoration: underline;
			}
		}
	}

	body {
		overflow-y: scroll;

		background-color: ${props => props.theme.white};
		font-size: 1.6rem;
		line-height: 1.5;
		scroll-behavior: smooth;
	}

	main {
		flex: 1;
		margin: 0 auto;
		width: 100%;

		> * {
			margin-left: auto;
			margin-right: auto;
			max-width: 1440px;
		}
	}

	#___gatsby {
		/* Fix anchor scroll positioning */
		[id]::before {
			display: block;
			content: '';
			margin-top: -4rem;
			height: 4rem;
		}
	}

	.wrapper {
		overflow: hidden;

		@supports (display: flex) {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}

	.grid {
		margin: 0 auto;
		max-width: ${props => props.theme.gridMax};
		padding: 0 30px;
	}

	/* Common base styles for the site */
	figure, img, svg, video {
		max-width: 100%;
	}

	figure {
		width: auto !important;
	}

	video {
		display: block;
		width: 100%;
	}

	h1, h2, h3, h4, h5, h6 {
		line-height: 1.25;
		margin: 16px 0;

		font-weight: 700;
		text-transform: capitalize;
	}

	h1,
	.h1 {
		margin-bottom: 24px;
		margin-top: 24px;

		font-size: 32px;
		font-weight: 700;
		line-height: 1.1;
	}

	h2,
	.h2 {
		font-size: 30px;
	}

	h3,
	.h3 {
		font-size: 24px;
	}

	h4,
	.h4 {
		font-size: 20px;
	}

	h5,
	.h5 {
		font-size: 18px;
	}

	h6,
	.h6 {
		font-size: 16px;
	}

	main {
		ol,
		ul {
			margin: 24px 0;
		}
	}

	main article {
		ol,
		ul {
			margin: 32px 0;
		}

		li {
			font-size: 16px;
			font-weight: 400;
			line-height: 30px;

			+ li {
				margin-top: 24px;
			}
		}
	}

	ol {
		padding-left: 24px;

		counter-reset: list-counter;
		list-style: none;
	}

	ol {
		margin: 48px 0;

		li {
			position: relative;

			counter-increment: list-counter;
			font-size: 16px;
			line-height: 30px;

			+ li {
				margin-top: 12px;
			}

			&::before {
				position: absolute;
				top: 0;
				left: 0;

				color: ${props => props.theme.primary};
				content: counter(list-counter) ". ";
				font-style: normal;
				font-weight: bold;

				transform: translateX(-110%);
				transform: translateX(calc(-100% - 12px));
			}
		}
	}

	/* FORM */
	button[type="submit"] {
		margin-top: 24px;
	}

	input[disabled] {
		cursor: not-allowed;
	}

  input,
  label,
  textarea {
    display: block;
    width: 100%;
	}

  input,
  textarea {
    padding: 16px;

		background-color: ${props => props.theme.white};
		border: 1px solid rgba(0, 0, 0, 0.12);

    & + & {
      margin-top: 24px;
    }
  }

  label {
    margin: 16px 0 8px;

		color: ${props => props.theme.black};
		font-size: 16px;
		font-weight: bold;
		line-height: 32px;
    text-transform: capitalize;
	}

	textarea {
		min-height: 150px;
		resize: vertical;
		width: 100%;
	}

	option {
		padding: 16px;

		font-weight:normal;
	}

	::placeholder {
		color: ${props => props.theme.grey500};
		font-size: 14px;
		font-weight: 300;
		line-height: 20px;
	}

	/* https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html */
	.hide:not(:focus):not(:active),
	.hidden:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
		}
	}
`;

export default GlobalStyle;
