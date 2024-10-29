import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "./components/shared/navigation-bar/NavigationBar";
import { Box, Container } from "@mui/material";
import {
	AuthenticatedTemplate,
	UnauthenticatedTemplate
} from "@azure/msal-react";
// import { useContext } from "react";
// import { CurrentUserContext } from "./contexts/current-user-context";
// import CustomAccountCredentials from "./components/shared/custom-account-credentials/CustomAccountCredentials";
import { styles } from "./app-styles.ts";

function App() {
	return (
		<Container
			disableGutters
			maxWidth={false}
			sx={{ display: "flex", justifyContent: "left", margin: 0 }}
		>
			<AuthenticatedTemplate>
				{/* !currentUserCtx.user.username || !currentUserCtx.user.phone ?
						<CustomAccountCredentials />
						: */}
				<Box sx={styles.pageContentContainer}>
					<NavigationBar />
					<Outlet />
				</Box>
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<Navigate to={"/sign-in"} />
			</UnauthenticatedTemplate>
		</Container>
	);
}

export default App;
