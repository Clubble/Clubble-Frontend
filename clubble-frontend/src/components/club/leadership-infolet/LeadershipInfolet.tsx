import { Avatar, Box, Typography } from "@mui/material";
import { styles } from "./styles";
import { stringAvatar } from "../../../helpers/avatar.helpers";

const LeadershipInfolet = (props: any) => {
	const { leader } = props;
	return (
		<Box sx={styles.container}>
			<Typography component="p" sx={styles.title}>
				{leader.position.name}
			</Typography>
			<Box sx={styles.leaderInfo}>
				<Avatar
					{...stringAvatar(
						`${leader.user.firstName} ${leader.user.lastName}`
					)}
					sx={styles.avatar}
					variant="rounded"
				/>
				<Typography component="p" sx={styles.name}>
					{leader.user.firstName} {leader.user.lastName}
				</Typography>
			</Box>
		</Box>
	);
};

export default LeadershipInfolet;
