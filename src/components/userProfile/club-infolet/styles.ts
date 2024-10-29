import { SxProps, Theme } from "@mui/material";

import profileImage from "../../../assets/images/computer-club-logo-zoomed.png";

export const styles: { [key: string]: SxProps<Theme> } = {
	container: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "10px",
		"&:hover": {
			cursor: "pointer",
			backgroundColor: "rgb(245, 245, 245)"
		},
		"&:active": {
			cursor: "pointer",
			backgroundColor: "rgb(242, 242, 242)"
		}
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
		height: "55px",
		backgroundImage: `url(${profileImage})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		borderRadius: "4px"
	},
	name: {
		fontSize: "17px"
	}
};
