import { Avatar, Box, Button, Typography } from "@mui/material";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";

const OrganizationInfoLet = (props: any) => {
	const { data } = props;
	const navigate = useNavigate();
	return (
		<Box sx={styles.container}>
			<Typography component="p" sx={styles.title}>
				{data.title}
			</Typography>
			<Box sx={styles.leaderInfo}>
				<Button component="div" onClick={() => navigate("/club/0")}>
					<Avatar
						alt={data.name}
						sx={styles.avatar}
						variant="rounded"
					/>
				</Button>
				<Typography component="p" sx={styles.name}>
					{data.name}
				</Typography>
			</Box>
		</Box>
	);
};

export default OrganizationInfoLet;
