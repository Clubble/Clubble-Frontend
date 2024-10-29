import { Avatar, Box, Grid } from "@mui/material";
import LeadershipInfolet from "../leadership-infolet/LeadershipInfolet";
import { styles } from "./styles";

const Leadership = ({ leaders }: any) => {
	return (
		<Box sx={styles.container}>
			<Grid
				container
				spacing={{ xs: 5, md: 5 }}
				columns={12}
				alignItems="center"
				justifyContent="center"
				sx={styles.grid}
			>
				{leaders.map((leader: object, index: number) => {
					return (
						<Grid item key={index} md={6} xs={12}>
							<LeadershipInfolet leader={leader} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default Leadership;
