import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ROUTER } from "./Router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { useAuthProfider } from "./iam/hooks/authProvider.tsx";
import AuthContextProvider from "./contexts/auth-context-provider";
import CurrentUserContextProvider from "./contexts/current-user-context.tsx";

const AuthProvider = useAuthProfider();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<CurrentUserContextProvider>
					<AuthContextProvider>
						<RouterProvider router={ROUTER} />
					</AuthContextProvider>
				</CurrentUserContextProvider>
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);
