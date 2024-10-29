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
		width: "100%",
		marginTop: "30px",
		// paddingLeft: "15px",
		// paddingRight: "15px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		gap: "20px",

		"@media (max-width: 500px)": {
			marginTop: "60px",
			padding: 0
		},

		"@media (max-width: 292px)": {
			marginTop: "90px"
		}
	},
	headerInfo: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "20px"
	},
	userName: {
		fontSize: "24px",
		fontWeight: 700
	},
	userInfo: {
		fontSize: "18px",
		fontWeight: 300
	},
	description: {
		fontSize: "15px",
		fontWeight: 300,
		paddingRight: "10px"
	},
	divider: {
		borderWidth: "0.5px",
		borderColor: "secondary.main",
		borderRadius: "4px"
	}
};
