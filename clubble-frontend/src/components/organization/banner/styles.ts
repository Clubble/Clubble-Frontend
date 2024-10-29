import { SxProps, Theme } from "@mui/material";
import organizationBanner from "../../../assets/images/illustration.jpg";

export const styles: { [key: string]: SxProps<Theme> } = {
	bannerImageContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "start",
		width: "100%",
		height: "175px",
		borderRadius: "8px",
		backgroundImage: `url(${organizationBanner})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",

		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
	},
	titleContainer: {
		position: "relative",
		top: "130px"
	},
	editBtn: {
		margin: "10px",
		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
	}
};
