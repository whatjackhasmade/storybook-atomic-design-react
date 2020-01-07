import React from "react";

import StyledPost from "./post.styles";

import PostContent from "../../molecules/post/postContent";

import Banner from "../../organisms/banner/banner";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import Related from "../../organisms/related/related";

const PostTemplate = ({ banner, content, footer, header, related }) => (
	<StyledPost>
		<Header {...header} />
		<PostContent content={content} />
		<Banner {...banner} />
		<Related {...related} />
		<Footer {...footer} />
	</StyledPost>
);

export default PostTemplate;
