import React from "react";
import { Route, Switch } from "react-router-dom";

import { Theme, Box, Gap } from "themeor";
import theme from "./theme.json";

import dataEn from "./data-en.js";
import dataRu from "./data-ru.js";

import "./styles/css/index.css";

import Page from "./components/Page";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import TabsSelect from "./components/Tabs";

import { ReactComponent as deliverables1 } from "./icons/deliverables-1.svg";
import { ReactComponent as deliverables2 } from "./icons/deliverables-2.svg";
import { ReactComponent as deliverables3 } from "./icons/deliverables-3.svg";
import { ReactComponent as deliverables4 } from "./icons/deliverables-4.svg";

// export const path = "/offer/bank";

const md = { deliverables1, deliverables2, deliverables3, deliverables4 };

const iconSet = { xs: md, sm: md, lg: md, xl: md };

function LandingBanks(data) {
	return (
		<>
			<Page title={data.seoTitle} description={data.description}>
				<Header data={data} />

				<Hero data={data} />

				<Gap size="x3l" />
				<Gap size="x3l" />
				<Gap size="x3l" />

				<Partners language={data.language} />

				<TabsSelect data={data} />
			</Page>
		</>
	);
}

export default function () {
	return (
		<Theme config={theme} icons={iconSet} reset>
			<Box.TryTagless fill="base">
				<Switch>
					<Route
						path='/'
						component={() => LandingBanks(dataEn)}
						exact={true}
					/>

					<Route path="/ru" component={() => LandingBanks(dataRu)} />
				</Switch>
			</Box.TryTagless>
		</Theme>
	);
}
