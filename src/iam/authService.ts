import { IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest, logoutRequest } from "./authConfig";

export const login = async (instance: IPublicClientApplication) => {
	instance
		.loginRedirect({
			...loginRequest,
			prompt: "select_account"
		})
		.catch((error) => console.log(error));
};

export const logout = async (instance: IPublicClientApplication) => {
	instance.logoutRedirect(logoutRequest);
	window.location.reload();
};
