import { Box, Grid } from "@mui/material";
import { styles } from "./styles";
import ClubInfoLet from "../club-infolet/ClubInfolet";

const YourClubs = (props: any) => {
	const { clubs } = props;

	return (
		<Box sx={styles.container}>
			<Grid
				container
				spacing={{ xs: 10, md: 10 }}
				columns={12}
				alignItems="center"
				justifyContent="left"
				sx={styles.grid}
			>
				{clubs.length > 0 &&
					clubs.map((club: object, index: number) => {
						return (
							<Grid item key={index} md={4} xs={6}>
								<ClubInfoLet club={club} />
							</Grid>
						);
					})}
			</Grid>
		</Box>
	);
};

export default YourClubs;
