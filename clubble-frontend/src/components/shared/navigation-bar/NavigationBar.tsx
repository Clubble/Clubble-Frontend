import { Box, Button, Container, IconButton } from "@mui/material";
import { styles } from "./styles";
// import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { logout } from "../../../iam/authService";
import { useMsal } from "@azure/msal-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth-context-provider";
import { BASE_PATH, ENTRA_SCOPE } from "../../../constants/api.constants";
import { CurrentUserContext } from "../../../contexts/current-user-context";
import HttpVerb from "../../../enums/http-verb.enum";
import { sleep } from "../../../helpers/timeout.helpers";

const NavigationBar = () => {
	const navigate = useNavigate();
	const { instance, accounts } = useMsal();
	const activeAccount = instance.getAllAccounts();
	const authCtx = useContext(AuthContext);
	const currentUserContext = useContext(CurrentUserContext);

	const defaultNavData = {
		id: "",
		firstName: "",
		lastName: "",
		username: "",
		organizationId: ""
	};

	const [navData, setNavData] = useState(defaultNavData);

	const handleCall = async () => {
		try {
			getNavigationData();
		} catch (error) {
			await sleep(500);
			getNavigationData();
		}
	}

	const getNavigationData = async () => {
		const response = await authCtx.verifyToken(
			ENTRA_SCOPE,
			`${BASE_PATH}/user/context/${currentUserContext.user.id}`,
			HttpVerb.GET,
			null
		);
		console.log(response);
		setNavData(response);
	};
	useEffect(() => {
		handleCall();
	}, [instance, accounts]);

	return (
		<Container sx={styles.container} disableGutters>
			<Button
				component="div"
				sx={styles.image}
				onClick={() =>
					navigate(`/organization/${navData.organizationId}`)
				}
			></Button>

			<Box sx={styles.actions}>
				<IconButton
					sx={styles.profileBtn}
					onClick={() => navigate("/user-profile")}
				>
					{/* <PersonIcon sx={styles.profileIcon} className="icon" /> */}
				</IconButton>
				{activeAccount ? (
					<Button
						variant="contained"
						onClick={() => logout(instance)}
						sx={{ width: "90%" }}
					>
						Logout
					</Button>
				) : null}
			</Box>
		</Container>
	);
};

export default NavigationBar;
