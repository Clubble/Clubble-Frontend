import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

const QrCodeInfolet = (props: any) => {
	const { name, qrCodeImg } = props;
	return (
		<Box sx={styles.container}>
			<Typography component="p" sx={styles.title}>
				{name}
			</Typography>
			<Box
				sx={{ ...styles.image, backgroundImage: `url(${qrCodeImg})` }}
			/>
		</Box>
	);
};

export default QrCodeInfolet;
