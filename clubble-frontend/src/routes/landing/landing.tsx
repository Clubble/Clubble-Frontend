import {
	AuthenticatedTemplate,
	UnauthenticatedTemplate,
	useMsal
} from "@azure/msal-react";
import { login, logout } from "../../iam/authService";
import { Box, Button, Container, Typography } from "@mui/material";
import bg from "../../assets/images/cody-scott-milewski-HwpOAJfN8mM-unsplash.jpg";
import { Navigate } from "react-router-dom";

const Landing = () => {
	const { instance } = useMsal();
	// const activeAccount = instance.getAllAccounts();

	return (
		<>
			<AuthenticatedTemplate>
				<Navigate to={"/user-profile"} />
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<Container
					sx={{
						backgroundImage: `url(${bg})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						height: "100vh",
						width: "100vw",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					maxWidth={false}
				>
					<Box
						sx={{
							width: "400px",
							height: "500px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "20px",
							borderRadius: "8px",
							backgroundColor: "white"
						}}
					>
						<Typography
							sx={{ fontSize: "24px", fontWeight: "600" }}
						>
							Clubble
						</Typography>
						<Button
							variant="contained"
							onClick={() => login(instance)}
							sx={{ width: "90%" }}
						>
							Login
						</Button>
					</Box>
				</Container>
			</UnauthenticatedTemplate>
		</>
	);
};

export default Landing;
