import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

const ClubTitle = ({ title }: { title: string }) => {
	return (
		<Box sx={styles.titleContainer}>
			<Box sx={styles.image}></Box>
			<Typography component="h2" sx={styles.titleText}>
				{title}
			</Typography>
		</Box>
	);
};

export default ClubTitle;
