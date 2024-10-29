import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { styles } from "./styles";
import {
	Container,
	Divider,
	FormControl,
	FormLabel,
	TextField
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export default function TransitionsModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Container sx={styles.container}>
			<Button
				endIcon={<EditIcon />}
				sx={styles.editBtn}
				color="secondary"
				variant="contained"
				onClick={handleOpen}
			>
				Edit
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500
					}
				}}
			>
				<Fade in={open}>
					<Box sx={styles.modalStyle}>
						<form action="/user-profile">
							<FormLabel
								sx={{ fontSize: "24px", color: "primary.main" }}
							>
								Edit Profile
							</FormLabel>
							<Divider
								orientation="horizontal"
								sx={styles.divider}
								flexItem
							/>
							<FormControl
								sx={{
									width: "100%",
									display: "flex",
									gap: "20px",
									p: 2,
									boxSizing: "border-box"
								}}
							>
								<TextField
									label="First Name"
									variant="standard"
									defaultValue="Brandon"
								/>
								<TextField
									label="Last Name"
									variant="standard"
									defaultValue="Brandon"
								/>
								<TextField
									label="Username"
									variant="standard"
									defaultValue="Brandon"
								/>
								<TextField
									label="Bio"
									variant="outlined"
									defaultValue="Brandon"
								/>
								<Box sx={styles.modalActions}>
									<Button
										variant="outlined"
										startIcon={<CancelIcon />}
										onClick={handleClose}
									>
										Cancel
									</Button>
									<Button
										variant="contained"
										startIcon={<SaveIcon />}
										type="submit"
									>
										Save
									</Button>
								</Box>
							</FormControl>
						</form>
					</Box>
				</Fade>
			</Modal>
		</Container>
	);
}
