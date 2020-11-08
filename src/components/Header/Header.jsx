import React from "react";
import { Align, Font, Box, Gap } from "themeor";

import { Link } from "react-router-dom";

import headerLogo from "../../icons/header-logo.svg";
import jtc from "../../icons/jtc.svg";

/**
 * Header component
 */

export default function Header(data) {
	const dataToShow = data.data;

	let langlink = "";
	let langtext = "";

	if (dataToShow.language === "Eng") {
		langlink = "/offer/bank/ru";
		langtext = "Рус";
	} else {
		langlink = "/offer/bank";
		langtext = "Eng";
	}
	return (
		<>
			<Gap />
			<Align row vert="center">
				<Gap size="x2l" />
				<header>
					<Align row vert="center">
						<Align hor="center">
							<img src={headerLogo} alt="header logo" className="header-logo" />
							<Font weight="700" fill="base"> 
								Opium Pro
							</Font>
							<img src={jtc} alt="jtc logo" />
						</Align>
						<Gap size="xl" />
						<Link to={langlink}>
							<Box
								className="language-switch"
								borderFill="faint"
								inverse
								borderWeight="lg"
							>
								<Font fill="faint" weight="700">
									{langtext}
								</Font>
							</Box>
						</Link>
					</Align>
					<Box
						className="cta-button"
						borderFill="accent"
						inverse
						borderWeight="lg"
					>
						<Font fill="accent" weight="700">
							{dataToShow.callToAction.label}
						</Font>
					</Box>
				</header>
				<Gap size="x2l" />
			</Align>
			<Gap />
		</>
	);
}
