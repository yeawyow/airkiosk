import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
  cookieAlert: {
    "& .MuiAlert-icon": {
      fontSize: 300,
    },
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Notification(props) {
  const { notify } = props;

  // const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  //const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={notify.isOpen}
      // onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={notify.isOpen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            warnig
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {notify.msg}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
