import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import ApolloWrapper from "../components/particles/apollo/provider";
import GlobalStyles from "../components/particles/globalStyles";
import themeDefault from "../components/particles/themeDefault";

// automatically import all files ending in *.stories.js
configure(require.context("../components", true, /\.stories\.js$/), module);

const GlobalWrapper = storyFn => (
	<ApolloWrapper>
		<ThemeProvider theme={themeDefault}>
			<GlobalStyles />
			{storyFn()}
		</ThemeProvider>
	</ApolloWrapper>
);

addDecorator(GlobalWrapper);
