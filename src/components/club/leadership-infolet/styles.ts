import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
	container: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "10px"
	},
	title: {
		textAlign: "left",
		fontSize: "20px"
	},
	leaderInfo: {
		display: "flex",
		alignItems: "center",
		gap: "10px"
	},
	avatar: {
		width: "55px",
		height: "55px"
	},
	name: {
		fontSize: "17px"
	}
};
