import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
// import { AuthContext } from "../../../contexts/auth-context-provider";
// import { BASE_PATH, ENTRA_SCOPE } from "../../../constants/api.constants";
// import HttpVerb from "../../../../../clubble-api/src/enums/http-verb.enum";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: grey[50]
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: "14px"
	}
}));

const StyledTableRow = styled(TableRow)(() => ({
	"&:nth-of-type(odd)": {
		backgroundColor: grey[300]
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0
	}
}));

const ClubMembers = ({
	members,
	setClubMembers
}: {
	members: any;
	setClubMembers: Function;
}) => {
	// const authCtx = useContext(AuthContext);

	const MemberPaidStatus = ({
		id,
		hasPaid
	}: {
		id: number;
		hasPaid: boolean;
	}) => {
		const [isList, setIsList] = useState(false);
		const [paid, setPaid] = useState(hasPaid ? "Yes" : "No");

		const handleClick = () => {
			setIsList(true);
		};

		const handleSelectChange = (event: SelectChangeEvent) => {
			const newStatus = event.target.value;
			setPaid(newStatus);
			patchMember(newStatus);
			setClubMembers(id, newStatus === "Yes" ? true : false);
			setIsList(false);
		};

		const patchMember = async (_status: string) => {
			// const response = await authCtx.verifyToken(
			// 	ENTRA_SCOPE,
			// 	`${BASE_PATH}/club-member/${id}`,
			// 	HttpVerb.PATCH,
			// 	{ hasPaid: status === "Yes" ? true : false }
			// );
		};

		return isList ? (
			<FormControl>
				<InputLabel id={`is-paid-${id}`}>Has Paid</InputLabel>
				<Select
					labelId={`is-paid-${id}`}
					id={`select-${id}`}
					value={paid}
					label="Paid"
					onChange={handleSelectChange}
				>
					<MenuItem value={"No"}>No</MenuItem>
					<MenuItem value={"Yes"}>Yes</MenuItem>
				</Select>
			</FormControl>
		) : (
			<Typography
				component="p"
				onClick={handleClick}
				sx={{ "&:hover": { cursor: "pointer" } }}
			>
				{hasPaid ? "Yes" : "No"}
			</Typography>
		);
	};

	return (
		<Box>
			<TableContainer component={Paper}>
				<Table aria-label="club members table" stickyHeader>
					<TableHead>
						<TableRow>
							<StyledTableCell align="left">Name</StyledTableCell>
							<StyledTableCell align="center">
								Email
							</StyledTableCell>
							<StyledTableCell align="center">
								Position
							</StyledTableCell>
							<StyledTableCell align="right">
								Paid
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{members.map((member: any, index: number) => {
							return (
								<StyledTableRow key={index}>
									<StyledTableCell
										component="th"
										scope="row"
										align="left"
									>
										{member.user.firstName}{" "}
										{member.user.lastName}
									</StyledTableCell>
									<StyledTableCell align="center">
										{member.user.email}
									</StyledTableCell>
									<StyledTableCell align="center">
										{member.position.name}
									</StyledTableCell>
									<StyledTableCell align="right">
										<MemberPaidStatus
											id={member.id}
											hasPaid={member.hasPaid}
										/>
									</StyledTableCell>
								</StyledTableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default ClubMembers;
