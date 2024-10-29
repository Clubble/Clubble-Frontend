import { Box } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
import { styles } from "./styles";
import ClubTitle from "../title/ClubTitle";

const Banner = ({ title }: { title: string }) => {
	return (
		<Box sx={styles.bannerImageContainer}>
			<Box sx={styles.titleContainer}>
				<ClubTitle title={title} />
			</Box>
			{/* <Button
				endIcon={<EditIcon />}
				sx={styles.editBtn}
				color="secondary"
				variant="contained"
			>
				Edit
			</Button> */}
		</Box>
	);
};

export default Banner;
