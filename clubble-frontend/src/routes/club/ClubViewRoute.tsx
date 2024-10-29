import { Box, Container, Divider, Typography } from "@mui/material";
import { styles } from "./styles";
import Banner from "../../components/club/banner/Banner";
import { useContext, useEffect, useState } from "react";
import TabsUnit from "../../components/shared/tab/TabsUnit";
import ClubMembers from "../../components/club/members/ClubMembers";
// import QrCodes from "../../components/club/qr-codes/QrCodes";
import Leadership from "../../components/club/leadership/Leadership";
import { AuthContext } from "../../contexts/auth-context-provider";
import { BASE_PATH, ENTRA_SCOPE } from "../../constants/api.constants";
// import { CurrentUserContext } from "../../contexts/current-user-context";
// import HttpVerb from "../../../../clubble-api/src/enums/http-verb.enum";
import { useParams } from "react-router-dom";
import HttpVerb from "../../enums/http-verb.enum";

type ClubData = {
	club: {
		id: string;
		name: string;
		description: string;
	};
	members: Array<any>;
};

const defaultClub: ClubData = {
	club: {
		id: "",
		name: "",
		description: ""
	},
	members: []
};

const ClubViewRoute = () => {
	const authCtx = useContext(AuthContext);
	// const currentUserContext = useContext(CurrentUserContext);
	const [data, setData] = useState<ClubData>(defaultClub);

	const { id } = useParams();

	const getClubData = async () => {
		const response = await authCtx.verifyToken(
			ENTRA_SCOPE,
			`${BASE_PATH}/club/${id}`,
			HttpVerb.GET,
			null
		);
		console.log(response);
		setData(response);
	};

	useEffect(() => {
		getClubData();
	}, []);

	const handleSetClubMembers = (id: number, hasPaid: boolean) => {
		setData((prevData: ClubData) => {
			return {
				...prevData,
				members: prevData.members.map((member: any) => {
					if (member.id === id) {
						return { ...member, hasPaid };
					}
					return member;
				})
			};
		});
	};

	return (
		<Container sx={styles.container} maxWidth={false} disableGutters>
			<Banner title={data.club.name} />
			<Box sx={styles.headerContent}>
				<Typography component="h3" sx={styles.memberCount}>
					{data.members.length} Members
				</Typography>
				<Typography component="h4" sx={styles.description}>
					{data.club.description}
				</Typography>
			</Box>
			<Divider orientation="horizontal" sx={styles.divider} flexItem />
			<TabsUnit
				tabNames={["Leadership", "Members"]}
				components={[
					<Leadership
						leaders={data.members.filter(
							(member: any) => member.position.name !== "Member"
						)}
					/>,
					<ClubMembers
						members={data.members}
						setClubMembers={handleSetClubMembers}
					/>
				]}
			/>
		</Container>
	);
};

export default ClubViewRoute;
