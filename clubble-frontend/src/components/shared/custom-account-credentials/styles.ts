import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
	container: {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(238, 240, 238)"
	},
	modalContainer: {
		boxSizing: "border-box",
		width: "90%",
		maxWidth: "500px",
		height: "max-content",
		borderRadius: "8px",
		boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
		display: "flex",
		flexDirection: "column",
		gap: "25px",
		padding: "20px",
		backgroundColor: "white"
	},
	formControl: {
		display: "flex",
		flexDirection: "column",
		gap: "15px",
		padding: 0,
		margin: 0
	},
	formInputContainer: {
		display: "flex",
		flexDirection: "column",
		gap: "10px"
	},
	formInput: {
		"&.MuiOutlinedInput-root": {
			"&.Mui-focused": {
				"&.MuiOutlinedInput-notchedOutline": {
					borderColor: "pink"
				}
			}
		}
	}
};
