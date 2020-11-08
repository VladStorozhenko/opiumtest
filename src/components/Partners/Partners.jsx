import React from "react";

import { Align, Gap, Line } from "themeor";
// Russian logos 
import gazprombankLogo from "../../icons/gazprombank.svg";
import vtbLogo from "../../icons/vtb.svg";
import otkritieLogo from "../../icons/otkritie.svg";
// English logos
import gazprombankLogoEng from "../../icons/gazprombankEng.svg";
import vtbLogoEng from "../../icons/vtbEng.svg";
import otkritieLogoEng from "../../icons/otkritieEng.svg";

export default function Partners(language) {
	return (
		<>
			<Line fill="faint" weight="md" />
			<Gap />
			<Align row vert="center" hor="center">
				<img
					src={
						language.language === "Eng" ? gazprombankLogoEng : gazprombankLogo
					}
					alt="Gazprom Bank"
				/>
				<Gap right="x3l" />
				<Gap right="x2l" />
				<img
					src={language.language === "Eng" ? vtbLogoEng : vtbLogo}
					alt="Vtb Bank"
				/>
				<Gap right="x3l" />
				<Gap right="x2l" />
				<img
					src={language.language === "Eng" ? otkritieLogoEng : otkritieLogo}
					alt="Otkritie bank"
				/>
			</Align>
			<Gap />
			<Line fill="faint" weight="md" />
		</>
	);
}
