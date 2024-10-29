import { SxProps, Theme } from "@mui/material";
export const styles: { [key: string]: SxProps<Theme> } = {
	container: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontSize: "17px",
		textAlign: "center"
	},
	image: {
		width: "180px",
		height: "180px",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
	}
};
