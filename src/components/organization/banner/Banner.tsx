import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

const Banner = () => {
	return (
		<Box sx={styles.bannerImageContainer}>
			<Box sx={styles.titleContainer}>
				<Typography
					sx={{
						p: 2,
						boxSizing: "border-box",
						borderRadius: "8px",
						backgroundColor: "white",
						ml: 2,
						mt: 1,
						boxShadow:
							"rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
						fontSize: "24px",
						fontWeight: "600"
					}}
				>
					Southern Adventist University
				</Typography>
			</Box>
		</Box>
	);
};

export default Banner;
