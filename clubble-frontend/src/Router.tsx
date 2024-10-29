import { createBrowserRouter } from "react-router-dom";
import NotFoundError from "./components/error/NotFoundError";
import App from "./App";
import ClubViewRoute from "./routes/club/ClubViewRoute";
import UserProfileViewRoute from "./routes/userProfile/UserProfileViewRoute";
import Landing from "./routes/landing/landing";
import OrganizationViewRoute from "./routes/organization/OrganizationViewRoute";

export const ROUTER = createBrowserRouter([
	// TODO: Put routes in a constants object and reference that object throughout the project instead
	// of hardcoding strings
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundError />,
		children: [
			{
				path: "/user-profile",
				element: <UserProfileViewRoute />
			},
			{
				path: "/club/:id",
				element: <ClubViewRoute />
			},
			{
				path: "/organization/:id",
				element: <OrganizationViewRoute />
			}
		]
	},
	{
		path: "/sign-in",
		element: <Landing />,
		errorElement: <NotFoundError />
	}
]);
