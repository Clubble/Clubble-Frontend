import { Box, Button, Typography } from "@mui/material";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";

const ClubInfoLet = (props: any) => {
	const { club } = props;
	const navigate = useNavigate();

	const handleClubNavigate = () => {
		navigate(`/club/${club.id}`);
	};
	return (
		<Box sx={styles.container} onClick={handleClubNavigate}>
			<Typography component="p" sx={styles.title}>
				{club.title}
			</Typography>
			<Box sx={styles.leaderInfo}>
				<Button component="div">
					<Box sx={styles.avatar} />
				</Button>
				<Typography component="p" sx={styles.name}>
					{club.name}
				</Typography>
			</Box>
		</Box>
	);
};

export default ClubInfoLet;
