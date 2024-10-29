import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import { styles } from ".././userProfile/styles";
import TabsUnit from "../../components/shared/tab/TabsUnit";
import userProfileImg from "../../assets/images/user-profile-img.jpg";
import TransitionsModal from "../../components/modal/modal";
import YourClubs from "../../components/userProfile/yourClubs/yourClubs";
import { useContext, useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { AuthContext } from "../../contexts/auth-context-provider";
import { BASE_PATH, ENTRA_SCOPE } from "../../constants/api.constants";
import HttpVerb from "../../../../clubble-api/src/enums/http-verb.enum";
import { jwtDecode } from "jwt-decode";
import {
	CurrentUser,
	CurrentUserContext
} from "../../contexts/current-user-context";
import { stringAvatar } from "../../helpers/avatar.helpers";
import { sleep } from "../../helpers/timeout.helpers";

const UserProfileViewRoute = (): any => {
	const { instance, accounts } = useMsal();
	const [accessToken, setAccessToken] = useState();
	const authCtx = useContext(AuthContext);
	const currentUserCtx = useContext(CurrentUserContext);

	const defualtUser = {
		id: currentUserCtx.user.id,
		firstName: currentUserCtx.user.firstName,
		lastName: currentUserCtx.user.lastName,
		username: currentUserCtx.user.username,
		email: currentUserCtx.user.email,
		phone: currentUserCtx.user.phone,
		clubs: []
	};

	const [user, setUser] = useState(defualtUser);

	const handleCall = async () => {
		try {
			await getData();
		} catch (error) {
			await sleep(500);
			getData();
		}
	};

	const getData = async () => {
		const oid = await getAccessToken();
		const data = await authCtx.verifyToken(
			ENTRA_SCOPE,
			`${BASE_PATH}/user/${oid}`,
			HttpVerb.GET,
			null
		);
		console.log("res");
		console.log(data);
		const user: CurrentUser = {
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			username: data.username,
			email: data.email,
			phone: data.phone,
			clubs: data.clubs,
			organizationId: data.organizationId,
			clubMemberPosition: data.clubMemberPosition
		};
		currentUserCtx.setUser(user);
		setUser(data);
	}

	const getAccessToken = async () => {
		if (accounts) {
			const accessTokenRequest = {
				scopes: [ENTRA_SCOPE],
				account: accounts[0]
			};

			const result =
				await instance.acquireTokenSilent(accessTokenRequest);
			const token = result.accessToken;
			const decodedToken: any = jwtDecode(token);
			return decodedToken.oid;
		}
	};

	useEffect(() => {
		try {
			handleCall();
		} catch (error) {

		}

	}, [instance, accounts]);

	return (
		<>
			<Container sx={styles.container} maxWidth={false} disableGutters>
				<Box sx={styles.headerContent}>
					<Box sx={styles.headerContentBox}>
						<Avatar
							src={"/image.png"}
							alt={`${user.firstName} ${user.lastName}`}
							// {...stringAvatar()}
							sx={styles.avatar}
						/>
						<Box sx={styles.headerInfo}>
							<Typography component="h3" sx={styles.userName}>
								{`${user.firstName} ${user.lastName}`}
							</Typography>
							<Typography component="h3" sx={styles.userInfo}>
								{`@${user.username}`}
							</Typography>
							<Typography component="h3" sx={styles.userInfo}>
								{`${user.email}`}
							</Typography>
						</Box>
					</Box>
					{/* <TransitionsModal /> */}
				</Box>

				<Divider
					orientation="horizontal"
					sx={styles.divider}
					flexItem
				/>
				<TabsUnit
					tabNames={["Clubs"]}
					components={[<YourClubs clubs={user.clubs} />]}
				/>
			</Container>
		</>
	);
};

export default UserProfileViewRoute;
