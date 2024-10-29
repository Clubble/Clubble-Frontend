import { createContext, ReactNode, useState } from "react";

type CurrentUserProviderProps = {
	children: ReactNode;
};

export type CurrentUser = {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	phone: string;
	clubs: Array<Object>;
	organizationId: string;
	clubMemberPosition: string;
};

const user: CurrentUser = {
	id: "",
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	phone: "",
	clubs: [],
	organizationId: "",
	clubMemberPosition: ""
};

export const CurrentUserContext = createContext({
	user,
	setUser: (_updatedUser: CurrentUser): void => {}
});

const CurrentUserContextProvider = ({ children }: CurrentUserProviderProps) => {
	const [currUser, setCurrUser] = useState(user);

	const setUser = (updatedUser: CurrentUser): void => {
		setCurrUser(updatedUser);
	};

	const value = {
		user: currUser,
		setUser
	};

	return (
		<CurrentUserContext.Provider value={value}>
			{children}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserContextProvider;
