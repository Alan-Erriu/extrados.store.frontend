import { Snackbar } from "@mui/material";
import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function SuccessNotification({
  message,
  handleClose = () => {
    return false;
  },
}) {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      const isOpen = handleClose();
      setOpen(isOpen);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (!open) {
    return null;
  }
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="body1" color="green">
          Exito:
          <br />
        </Typography>
        <Typography variant="body1" color="black">
          {message}
        </Typography>
      </Paper>
    </Snackbar>
  );
}
