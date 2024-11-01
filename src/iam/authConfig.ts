import { Configuration, LogLevel } from "@azure/msal-browser";

export const msalConfig: Configuration = {
	auth: {
		clientId: `${import.meta.env.VITE_FRONTEND_CLIENT_ID}`,
		authority: `https://login.microsoftonline.com/${import.meta.env.VITE_TENENT_ID}`,
		redirectUri: "/user-profile",
		postLogoutRedirectUri: "/",
		navigateToLoginRequestUrl: false
	},
	cache: {
		cacheLocation: "localStorage",
		storeAuthStateInCookie: false
	},
	system: {
		loggerOptions: {
			loggerCallback: (level, message, containsPii) => {
				if (containsPii) {
					return;
				}
				switch (level) {
					case LogLevel.Error:
						console.error(message);
						return;
					// case LogLevel.Info:
					// 	console.info(message);
					// 	return;
					// case LogLevel.Verbose:
					// 	console.debug(message);
					// 	return;
					// case LogLevel.Warning:
					// 	console.warn(message);
					// 	return;
					default:
						return;
				}
			}
		}
	}
};

export const loginRequest = {
	scopes: ["openid", "profile", "user.read"]
};

export const logoutRequest = {
	postLogoutRedirectUri: "/",
	accounts: null
};
