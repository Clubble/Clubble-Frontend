import { Box, Container, Divider, Typography } from "@mui/material";
import { styles } from "../organization/styles";
import TabsUnit from "../../components/shared/tab/TabsUnit";
import YourClubs from "../../components/userProfile/yourClubs/yourClubs";
import Banner from "../../components/organization/banner/Banner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth-context-provider";
import { BASE_PATH, ENTRA_SCOPE } from "../../constants/api.constants";
import { useParams } from "react-router-dom";
import HttpVerb from "../../../../clubble-api/src/enums/http-verb.enum";

const OrganizationViewRoute = () => {
	const authCtx = useContext(AuthContext);
	const { id } = useParams();

	const defaultOrganization = {
		id: "",
		name: "",
		description: "",
		memberCount: 0,
		clubs: []
	};

	const [organization, setOrganization] = useState(defaultOrganization);

	const getOrganizationData = async () => {
		const response = await authCtx.verifyToken(
			ENTRA_SCOPE,
			`${BASE_PATH}/organization/${id}`,
			HttpVerb.GET,
			null
		);

		setOrganization(response);
	};

	useEffect(() => {
		getOrganizationData();
	}, []);

	return (
		<>
			<Container sx={styles.container} maxWidth={false} disableGutters>
				<Banner />
				<Box sx={styles.headerContent}>
					<Typography component="h3" sx={styles.memberCount}>
						{organization.memberCount} Members
					</Typography>
					<Typography component="h4" sx={styles.description}>
						{organization.description}
					</Typography>
				</Box>
				<Divider
					orientation="horizontal"
					sx={styles.divider}
					flexItem
				/>
				<TabsUnit
					tabNames={["Clubs"]}
					components={[<YourClubs clubs={organization.clubs} />]}
				/>
			</Container>
		</>
	);
};

export default OrganizationViewRoute;
