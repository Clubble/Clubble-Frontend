import { Box, Tab, Tabs } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import TabContent from "./TabContent";

const TabsUnit = (props: any) => {
	const { tabNames, components } = props;

	const [currentTabValue, setCurrentTabValue] = useState(0);

	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setCurrentTabValue(newValue);
	};
	return (
		<Box>
			<Tabs value={currentTabValue} onChange={handleTabChange}>
				{tabNames.map((tabName: string, index: number) => {
					return <Tab label={tabName} key={index}></Tab>;
				})}
			</Tabs>
			{components.map((component: FC, index: number) => {
				return (
					<TabContent
						value={index}
						key={index}
						activeTabValue={currentTabValue}
					>
						{component}
					</TabContent>
				);
			})}
		</Box>
	);
};

export default TabsUnit;
