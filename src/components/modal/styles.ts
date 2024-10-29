import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
	container: {
		padding: "0",
		margin: "0",
		width: "fit-content"
	},
	modalStyle: {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "white",
		borderRadius: "8px",
		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
		p: 4
	},
	editBtn: {
		height: "38px",
		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
	},
	modalHeader: {
		fontSize: "24px",
		fontWeight: 300
	},
	modalActions: {
		width: "100%",
		display: "flex",
		justifyContent: "end",
		gap: "10px"
	},
	divider: {
		borderWidth: "0.5px",
		borderColor: "secondary.main",
		borderRadius: "4px"
	}
};
