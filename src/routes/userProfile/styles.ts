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
		flexDirection: "row",
		justifyContent: "space-between",
		gap: "20px",

		"@media (max-width: 500px)": {
			paddingLeft: 0
		}
	},
	avatar: {
		width: "195px",
		height: "195px",

		"@media (max-width: 600px)": {
			width: "100px",
			height: "100px"
		}
	},
	headerContentBox: {
		display: "flex",
		gap: "20px",

		"@media (max-width: 600px)": {
			gap: "10px"
		}
	},
	headerInfo: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "20px",

		"@media (max-width: 600px)": {
			gap: "10px"
		}
	},
	userName: {
		fontSize: "24px",
		fontWeight: 700,

		"@media (max-width: 600px)": {
			fontSize: "19px"
		}
	},
	userInfo: {
		fontSize: "18px",
		fontWeight: 300,

		"@media (max-width: 600px)": {
			fontSize: "14px"
		}
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
