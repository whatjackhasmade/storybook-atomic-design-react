import styled from "styled-components";

export const StyledFooter = styled.footer`
	background-color: ${props => props.theme.grey800};
	color: ${props => props.theme.white};

	a {
		color: ${props => props.theme.grey300};
		font-size: 18px;
		line-height: 140%;
		text-decoration: none;
		transition: 0.2s color ease;

		&:active,
		&:focus,
		&:hover {
			color: ${props => props.theme.white};

			&:after {
				display: none;
			}

			svg {
				fill: ${props => props.theme.grey200};
			}
		}
	}

	a[aria-current="page"] {
		color: ${props => props.theme.white};

		&:after {
			display: none;
		}
	}

	button {
		min-width: auto;
	}

	button[type="submit"] {
		margin-top: 0;
		padding-left: 8px;
		padding-right: 8px;

		color: ${props => props.theme.grey200};
		transition: 0.2s color ease;

		&:active,
		&:focus,
		&:hover {
			color: ${props => props.theme.white};
		}

		&:focus {
			outline: 1px dotted ${props => props.theme.blue};
		}
	}

	form {
		display: flex;
		margin-top: 16px;

		border-bottom: 2px solid ${props => props.theme.white};
		background-color: ${props => props.theme.grey800};
		color: ${props => props.theme.white};
		transition: 0.2s background-color ease, 0.2s color ease;

		input {
			color: inherit;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0 0 8px;
	}

	input[type="email"] {
		padding-left: 0;
		padding-top: 16px;
		padding-bottom: 16px;
		width: 100%;

		background-color: transparent;
		border: none;
		color: ${props => props.theme.white};
		font-size: 18px;
		font-weight: 400;
		line-height: 140%;

		&::placeholder {
			color: ${props => props.theme.white};
			font-size: 18px;
			font-weight: 400;
			line-height: 140%;
		}
	}

	svg {
		max-width: 20px;

		fill: ${props => props.theme.white};
		transition: 0.2s fill ease;
	}

	.form--submitted {
		cursor: default;

		background-color: ${props => props.theme.white};
		color: ${props => props.theme.grey800};
		transition: 0.2s background-color ease, 0.2s color ease;

		input {
			color: inherit;
		}

		input[disabled] {
			cursor: default;
		}

		input[type="email"] {
			padding-left: 12px;
		}
	}

	.footer__contents {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: ${props => props.theme.gridMax};
		padding: 48px 30px 30px;

		flex-direction: row;
		flex-wrap: wrap;
	}

	.footer__copyright {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin: 48px auto 0;
		width: 100%;

		flex-direction: row;

		* {
			margin: 0;
		}

		a {
			padding: 16px 0;
			position: relative;

			color: ${props => props.theme.white};

			margin-left: 12px;
			padding: 16px;

			&::before {
				border-radius: 50%;
				content: "";
				display: block;
				height: 8px;
				left: -2px;
				position: absolute;
				top: 50%;
				width: 8px;

				background-color: ${props => props.theme.grey500};
				transform: translateY(-50%);
			}
		}
	}

	.footer__navigation {
		a {
			font-weight: 400;
		}

		a + a {
			margin-left: 0;
			margin-top: 16px;
		}

		nav {
			align-items: flex-start;
			flex-direction: column;
			margin-top: 16px;
			padding: 0;
		}
	}

	.footer__navigation + .footer__navigation {
		margin-top: 40px;
		padding-top: 40px;

		border-top: 1px solid ${props => props.theme.grey600};

		margin-left: 64px;
		margin-top: 0;
		padding-top: 0;

		border-top: none;
	}

	.footer__newsletter {
		margin-top: 48px;
		padding-top: 48px;

		border-top: 1px solid ${props => props.theme.grey600};

		margin-left: auto;
		margin-top: 0;
		max-width: 320px;
		padding-top: 0;

		border-top: none;

		p {
			color: ${props => props.theme.grey300};
			font-size: 18px;
			font-weight: 300;
			line-height: 140%;
		}
	}

	.footer__social {
		margin: 24px auto 16px;

		a + a {
			margin-left: 16px;
		}
	}

	.footer__wrapper {
		display: flex;
		flex-direction: column;

		flex-direction: row;
	}
`;

export default StyledFooter;
