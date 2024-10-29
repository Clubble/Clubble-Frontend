import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import appImage from "../../../assets/images/dark-placeholder-logo.png";

export const styles: { [key: string]: SxProps<Theme> } = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		width: "110px",
		height: "100vh",
		padding: "16px 8px",
		margin: 0,
		backgroundColor: "primary.main",
		borderRadius: "0 4px 4px 0",
		position: "sticky",
		top: 0,
		boxSizing: "border-box",

		"@media (max-width: 500px)": {
			flexDirection: "row",
			width: "100%",
			height: "80px",
			borderRadius: "0 0 4px 4px"
		}
	},
	image: {
		backgroundImage: `url(${appImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		width: "90%",
		height: "90px",
		borderRadius: "2px",
		boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",

		"@media (max-width: 500px)": {
			width: "60px",
			height: "60px"
		}
	},
	profileBtn: {
		width: "45px",
		height: "45px",
		borderRadius: "50%",
		backgroundColor: "white",
		"&:hover": {
			backgroundColor: "primary.light"
		},
		"&:hover .icon": {
			color: "white"
		}
	},
	profileIcon: {
		width: "90%",
		height: "90%",
		color: "primary.main"
	},
	actions: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px",

		"@media (max-width: 500px)": {
			flexDirection: "row-reverse"
		}
	}
};
