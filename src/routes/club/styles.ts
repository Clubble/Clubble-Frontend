import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
	container: {
		width: "100%",
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		gap: "20px"
	},
	headerContent: {
		marginTop: "30px",
		paddingLeft: "15px",
		display: "flex",
		flexDirection: "column",
		gap: "20px"
	},
	memberCount: {
		fontSize: "18px",
		fontWeight: 300
	},
	description: {
		fontSize: "15px",
		fontWeight: 300
	},
	divider: {
		borderWidth: "0.5px",
		borderColor: "secondary.main",
		borderRadius: "4px"
	}
};
