import React from "react";

import StyledPostContent from "./postContent.styles";

import ParseHTML from "../../particles/parseHTML";

const PostContent = ({ content }) => (
	<StyledPostContent>{ParseHTML(content)}</StyledPostContent>
);

export default PostContent;
