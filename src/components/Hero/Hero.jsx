import React from "react";

import { Align, Font, Gap, Box } from "themeor";

export default function Hero(data) {
    const dataToShow = data.data;
	
	/**
	 * 
	 * @param {the string to search and highlight the word in} toSearchIn 
	 * @param {the word to find and highlight in the string} toSearchFor 
	 */

	function getHighlitedWord(toSearchIn, toSearchFor) {
		let toHightlightStartPos = toSearchIn.search(toSearchFor);
		let endPos = toHightlightStartPos + toSearchFor.length;
		let textPart1 = toSearchIn.substring(0, toHightlightStartPos);
		let textPart2 = toSearchIn.substring(endPos, toSearchIn.length);

		return {
			text1: textPart1,
			text2: textPart2,
			highlight: toSearchFor,
		};
	}

	const {
		text1: heroTextPart1,
		text2: heroTextPart2,
		highlight: heroHighlight,
	} = getHighlitedWord(dataToShow.title, dataToShow.titleMark);

	let {
		text1: subtitleTextPart1,
		text2: subtitleTextPart2,
		highlight: subtitleHighlight,
	} = getHighlitedWord(dataToShow.subtitle, dataToShow.subtitleMark);

	subtitleTextPart1 += " ";

	return (
		<>
			<Gap size="x3l" />
			<Gap size="x1l" />
			<Align row>
				<Gap size="x2l" />
				{heroTextPart2 ? (
					<Font weight="600" uppercase={true} fill="base" className="hero-text">
						{heroTextPart1}
						<span className="hero-blue">{heroHighlight}</span> {heroTextPart2}
					</Font>
				) : (
					<Font weight="600" uppercase={true} fill="base" className="hero-text">
						{heroTextPart1} <span className="hero-blue">{heroHighlight}</span>
					</Font>
				)}
			</Align>
			<Gap size="xs" />
			<Align row>
				<Gap size="x2l" />
				<Font weight="500" size="lg" fill="--subtitle-color">
					{subtitleTextPart1} ‎
				</Font>
				<Font size="lg" fill="base" weight="700">
					{subtitleHighlight}
				</Font>
			</Align>
			<Gap size="xl" />
			<Align row>
				<Gap size="x2l" />
				<Box.TryTagless
					className="cta-button cta-button-mobile"
                    fill="accent"
                    strong
				>
					<Font fill="base" inverse weight="700">
						{dataToShow.callToAction.label}
					</Font>
				</Box.TryTagless>
			</Align>
		</>
	);
}
