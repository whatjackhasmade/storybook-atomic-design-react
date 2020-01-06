import styled from "styled-components";

const StyledNavigation = styled.nav`
	display: flex;
	flex-direction: ${props =>
		props.direction !== "horizontal" ? `column` : undefined};
	padding: 16px;

	a + a {
		margin-left: ${props =>
			props.direction === "horizontal" ? `24px` : undefined};
		margin-top: ${props =>
			props.direction !== "horizontal" ? `24px` : undefined};
	}
`;

export default StyledNavigation;
