import styled from "styled-components";

const StyledPostContent = styled.article`
	padding: 32px 0 64px;

	> * {
		margin-left: auto;
		margin-right: auto;
		max-width: 700px;
	}

	img {
		display: block;
		margin: 32px auto;
		max-width: 900px;
	}
`;

export default StyledPostContent;
