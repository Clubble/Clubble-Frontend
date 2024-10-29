import { Box, Grid } from "@mui/material";
import { styles } from "./styles";
import OrganizationInfoLet from "../organization-infolet/ClubInfolet";

const clubs = [
	{
		title: "Computer Club",
		name: "Coding Is Awesome!"
	}
];

const Organizations = () => {
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
				{clubs.map((leader: object, index: number) => {
					return (
						<Grid item key={index} md={4} xs={6}>
							<OrganizationInfoLet data={leader} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default Organizations;
