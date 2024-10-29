import { Box } from "@mui/material";

const TabContent = (props: any) => {
	const { children, value, activeTabValue } = props;
	return (
		<Box
			role="tabpanel"
			hidden={value !== activeTabValue}
			sx={{ paddingTop: "15px", width: "100%", height: "max-content" }}
		>
			<Box sx={{ width: "100%", height: "max-content" }}>{children}</Box>
		</Box>
	);
};

export default TabContent;
