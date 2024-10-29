import { SxProps, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";

import profileImage from "../../../assets/images/computer-club-logo-zoomed.png";

export const styles: { [key: string]: SxProps<Theme> } = {
	titleContainer: {
		display: "flex",
		justifyContent: "center",
		gap: "10px",
		alignItems: "center",
		borderRadius: "6px",
		boxShadow:
			"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
		padding: "10px",
		width: "max-content",
		background: grey[50],
		marginLeft: "10px",
		border: `2px solid ${grey[300]}`
	},
	image: {
		backgroundImage: `url(${profileImage})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "50px",
		height: "50px",
		borderRadius: "3px",
		boxShadow:
			"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
		// transform: "scale(1.5)",
		// transformOrigin: "center center",
		// objectFit: "cover"
	},
	titleText: {
		fontSize: "18px"
	}
};
