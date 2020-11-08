import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

import { Align, Font, Gap, Box, Line, Icon } from "themeor";

export default function TabsSelect(data) {
	const [tabIndex, setTabIndex] = useState(0);

	const processData = data.data.process;
	const phases = processData.phases;

	function handleTabSelect(index = 0) {
		document
			.getElementById(`phase-${tabIndex}-tab`)
			.classList.add("tab-wrapper-disabled");

		setTabIndex(index);
		document
			.getElementById(`phase-${index}-tab`)
			.classList.remove("tab-wrapper-disabled");
	}

	useEffect(() => {
		handleTabSelect();
	}, []);

	return (
		<Box>
			<Gap />
			<Align row>
				<Gap size="x2l" />
				<Font weight="600" fill="base" size="xl">
					{processData.title}
				</Font>
			</Align>
			<Gap />
			<Tabs
				defaultIndex={tabIndex}
				onSelect={(index) => handleTabSelect(index)}
			>
				<Align>
					<TabList>
						{/* Tabs */}
						{phases.map((phase, phaseIndex) => {
							return (
								<Tab>
									<Line fill="faint" />
									<Box
										fill={phase.theme}
										id={`phase-${phaseIndex}-tab`}
										className="tab-wrapper tab-wrapper-disabled"
										strong
										fancy
										borderFill={phaseIndex === 1 ? "faint" : "none"}
										weak="true"
									>
										<Align row vert="center" hor="center">
											<Font
												fill="base"
												size="lg"
												className="tab-index"
												weight="600"
											>
												{phase.index}.
											</Font>
											<Gap size="xs" />
											<Font fill="base" align="center" size="lg" weight="600">
												{phase.title}
											</Font>
										</Align>
									</Box>
									<Line fill="faint" />
								</Tab>
							);
						})}
					</TabList>
				</Align>

				{phases.map((phase) => {
					return (
						<TabPanel>
							<Align pattern="1fr 1fr 1fr" className="tab-content">
								{/* Subindexes */}
								{phase.works.map((work, workIndex) => {
									return (
										<Align
											className={
												workIndex === 0
													? "tab-content-row first-column"
													: "tab-content-row"
											}
										>
											<Gap size="x2l" />
											<Font fill={phase.theme} weight="700" size="lg">
												{work.subindex}
											</Font>
											<Gap size="lg" />
										</Align>
									);
								})}
								{/* Subtitles */}
								{phase.works.map((work, workIndex) => {
									return (
										<Align
											className={
												workIndex === 0
													? "tab-content-row first-column"
													: "tab-content-row"
											}
										>
											<Font fill="base" weight="700" size="lg">
												{work.subtitle}
											</Font>
											<Gap size="lg" />
										</Align>
									);
								})}
								{/* Texts */}
								{phase.works.map((work, workIndex) => {
									return (
										<Align
											className={
												workIndex === 0
													? "tab-content-row first-column"
													: "tab-content-row"
											}
										>
											<Font
												fill="faint"
												className="tab-content-text"
												weight="500"
											>
												{work.text}
											</Font>
										</Align>
									);
								})}
								<Gap size="x2l" />
								<Gap size="x2l" />
								<Gap size="x2l" />
							</Align>
							{/* Deliverables */}
							<Align pattern="1fr 2fr">
								<Font
									fill="base"
									size="lg"
									weight="600"
									className="first-column"
								>
									{phase.deliverables.title}
								</Font>
								<Box>
									<Font fill="base" className="deliverables-text">
										{phase.deliverables.text}
									</Font>
									<Gap size="lg" />
									<Align row>
										{/* Deliverables list */}
										{phase.deliverables.list.map((listItem, listItemIndex) => {
											return (
												<>
													<Align row className="list-item">
														<Icon
															name={`deliverables${listItemIndex + 1}`}
															fill={phase.theme}
															size="xs"
														/>
														<Gap size="xs" />
														<Font weight="600" fill="base">
															<p className="list-text">{listItem}</p>
														</Font>
													</Align>
												</>
											);
										})}
									</Align>
								</Box>
							</Align>
							<Gap size="x2l" />
						</TabPanel>
					);
				})}
			</Tabs>
		</Box>
	);
}
