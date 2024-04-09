import { Paper, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ErrorNotification({
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
      sx={{ background: "white" }} // Fondo blanco para el Snackbar
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="body1" color="error">
          X Algo salió mal:
          <br />
        </Typography>
        <Typography variant="body1" color="black">
          {message}
        </Typography>
      </Paper>
    </Snackbar>
  );
}
