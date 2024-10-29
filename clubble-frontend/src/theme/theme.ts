import { createTheme, Theme } from "@mui/material";
import { palette } from "./palette";

export const theme: Theme = createTheme({
	palette: palette,
	components: {
		MuiAvatar: {
			styleOverrides: {
				root: {
					zIndex: 0
				}
			}
		}
	}
});
