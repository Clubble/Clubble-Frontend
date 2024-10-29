import { Typography, useTheme } from "@mui/material";

const FormHelperText = (props: any) => {
	const theme = useTheme();
	return (
		<>
			<Typography color={theme.palette.error.main} component="p">
				{props.children}
			</Typography>
		</>
	);
};

export default FormHelperText;
