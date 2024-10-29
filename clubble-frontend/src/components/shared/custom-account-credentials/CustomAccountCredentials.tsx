import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	TextField,
	Typography
} from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import { styles } from "./styles";
import { AuthContext } from "../../../contexts/auth-context-provider";
import { useMsal } from "@azure/msal-react";
import { BASE_PATH, ENTRA_SCOPE } from "../../../constants/api.constants";
import HttpVerb from "../../../../../clubble-api/src/enums/http-verb.enum";
import {
	CurrentUser,
	CurrentUserContext
} from "../../../contexts/current-user-context";
import { jwtDecode } from "jwt-decode";

const CustomAccountCredentials = () => {
	const defaultForm = {
		username: {
			value: "",
			error: false,
			helperText: ""
		},
		phone: {
			value: "",
			error: false,
			helperText: ""
		}
	};
	const [form, setForm] = useState(defaultForm);

	const authCtx = useContext(AuthContext);
	const currentUserCtx = useContext(CurrentUserContext);
	const { instance, accounts } = useMsal();

	const sendUserFields = async (body: any) => {
		try {
			const response = await authCtx.verifyToken(
				ENTRA_SCOPE,
				`${BASE_PATH}/user/${currentUserCtx.user.id}`,
				HttpVerb.PATCH,
				body
			);

			currentUserCtx.setUser({
				...currentUserCtx.user,
				username: response.username,
				phone: response.phone
			});
		} catch (err) {
			console.log(err);
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
		console.log(data);
		const user: CurrentUser = {
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			username: data.username,
			email: data.email,
			phone: data.phone,
			clubs: data.clubs,
			organizationId: data.organiationId,
			clubMemberPosition: data.clubMmeberPosition
		};
		currentUserCtx.setUser(user);
	};

	const getAccessToken = async () => {
		if (accounts) {
			const accessTokenRequest = {
				scopes: [ENTRA_SCOPE],
				account: accounts[0]
			};

			const result = await instance.acquireTokenSilent(accessTokenRequest);
			const token = result.accessToken;
			const decodedToken: any = jwtDecode(token);
			return decodedToken.oid;
		}
	};

	useEffect(() => {
		getData();
	}, [instance, accounts]);

	const handleUsernameChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm((prevForm) => {
			return {
				...prevForm,
				username: {
					...prevForm.username,
					value: event.target.value,
					helperText: "",
					error: false
				}
			};
		});
	};

	const handlePhoneChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm((prevForm) => {
			return {
				...prevForm,
				phone: {
					...prevForm.phone,
					value: event.target.value,
					helperText: "",
					error: false
				}
			};
		});
	};

	const setUsernameError = (isError: boolean, text: string) => {
		setForm((prevForm) => {
			return {
				...prevForm,
				username: {
					...prevForm.username,
					error: isError,
					helperText: text
				}
			};
		});
	};

	const setPhoneError = (isError: boolean, text: string) => {
		setForm((prevForm) => {
			return {
				...prevForm,
				phone: { ...prevForm.phone, error: isError, helperText: text }
			};
		});
	};

	const handleFormSubmit = async () => {
		const isUsernameValid = evaluateUsername(form.username.value);
		if (!isUsernameValid) {
			setUsernameError(true, "Invalid username.");
		}

		const isPhoneValid = evaluatePhone(form.phone.value);
		if (!isPhoneValid) {
			setPhoneError(true, "Invalid phone number format.");
		}

		if (isUsernameValid && isPhoneValid) {
			const data = {
				username: form.username.value,
				phone: form.phone.value
			};
			await sendUserFields(data);
			setForm(defaultForm);
		}
	};

	const evaluateUsername = (username: string): boolean => {
		const allowedCharacters = /^[a-zA-Z0-9._-]+$/;
		let isValid = true;
		if (username.length <= 0) {
			isValid = false;
		} else if (!allowedCharacters.test(username)) {
			isValid = false;
		}
		return isValid;
	};

	const evaluatePhone = (rawPhone: string): boolean => {
		const phoneFormat =
			/^\+?(\d{1,4})?[-]?(\(?\d{1,4}\)?[-]?)?(\d{1,4}[-]?\d{1,4}[-]?\d{1,9})$/;
		const phone = rawPhone.replace(/\s+/g, "");
		let isValid = true;
		if (phone.length <= 0) {
			isValid = false;
		} else if (!phoneFormat.test(phone)) {
			isValid = false;
		}

		return isValid;
	};

	return (
		<Box sx={styles.container}>
			<Box sx={styles.modalContainer}>
				<Typography component="h1">
					Additional Data Requested By Computer Club
				</Typography>
				<FormControl sx={styles.formControl}>
					<Box sx={styles.formInputContainer}>
						<TextField
							id="input-username"
							type="text"
							label="Username"
							variant="outlined"
							error={form.username.error}
							value={form.username.value}
							onChange={handleUsernameChange}
							sx={styles.formInput}
						/>
						<FormHelperText>
							{form.username.helperText}
						</FormHelperText>
					</Box>
					<Box sx={styles.formInputContainer}>
						<TextField
							id="input-username"
							type="tel"
							label="Phone Number"
							variant="outlined"
							error={form.phone.error}
							value={form.phone.value}
							onChange={handlePhoneChange}
							sx={styles.formInput}
						/>
						<FormHelperText>{form.phone.helperText}</FormHelperText>
					</Box>
				</FormControl>

				<Button
					endIcon={<CheckIcon />}
					variant="contained"
					onClick={handleFormSubmit}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default CustomAccountCredentials;
