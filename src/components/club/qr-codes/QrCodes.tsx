import { Box, Grid } from "@mui/material";
import { styles } from "./styles";
import qrCodeImg from "../../../assets/images/qr-code.png";
import QrCodeInfolet from "../qr-code-infolet/QrCodeInfolet";

const QR_CODES = [
	{
		name: "Join Computer Club!",
		image: qrCodeImg
	},
	{
		name: "Welcome Back Party Signups",
		image: qrCodeImg
	},
	{
		name: "Friday Vespers Signups",
		image: qrCodeImg
	},
	{
		name: "Sign up for the Christmas Party!",
		image: qrCodeImg
	}
];

const QrCodes = () => {
	return (
		<Box sx={styles.container}>
			<Grid
				container
				spacing={{ xs: 10, md: 10 }}
				columns={12}
				alignItems="start"
				justifyContent="start"
				sx={styles.grid}
			>
				{QR_CODES.map((code: any, index: number) => {
					return (
						<Grid item key={index} md={4} xs={6}>
							<QrCodeInfolet
								name={code.name}
								qrCodeImg={code.image}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default QrCodes;
