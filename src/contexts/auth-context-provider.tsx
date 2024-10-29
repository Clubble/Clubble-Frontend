import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { createContext, ReactNode } from "react";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import HttpVerb from "../enums/http-verb.enum";


export const AuthContext = createContext({
	verifyToken: (
		_scope: string,
		_endpoint: string,
		_requestType: HttpVerb,
		_body: any
	): any => {}
});

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
	const { instance, accounts } = useMsal();

	const callApi = async (
		accessToken: string,
		endpoint: string,
		requestType: HttpVerb,
		body: any
	) => {
		const headers = {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json"
		};

		let response;
		switch (requestType) {
			case HttpVerb.GET:
				response = await axios.get(endpoint, {
					headers
				});
				break;
			case HttpVerb.PATCH:
				response = await axios.patch(endpoint, JSON.stringify(body), {
					headers
					// body: JSON.stringify(body)
				});
				break;
			default:
				response = await axios.get(endpoint, {
					headers
				});
				break;
		}

		return response.data;
	};

	const verifyToken = async (
		scope: string,
		endpoint: string,
		requestType: HttpVerb,
		body: any
	): Promise<any> => {
		if (accounts) {
			const accessTokenRequest = {
				scopes: [scope],
				account: accounts[0]
			};

			try {
				const response =
					await instance.acquireTokenSilent(accessTokenRequest);
				let accessToken = response.accessToken;
				const data = callApi(accessToken, endpoint, requestType, body);
				return data;
			} catch (error) {
				if (error instanceof InteractionRequiredAuthError) {
					instance.acquireTokenRedirect(accessTokenRequest);
				}
				console.log(error);
			}
		}
	};

	const value = {
		verifyToken
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
