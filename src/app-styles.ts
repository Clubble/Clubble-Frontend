import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
	pageContentContainer: {
		width: "100vw",
		height: "max-content",
		display: "flex",
		overflow: "visible",
		// overflowX: "hidden",

		"@media (max-width: 500px)": {
			flexDirection: "column"
		}
	}
};
