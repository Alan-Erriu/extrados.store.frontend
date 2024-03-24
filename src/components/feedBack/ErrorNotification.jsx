import { Snackbar, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

export default function ErrorNotification({ message }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Snackbar open={open} autoHideDuration={3000}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error" sx={{ backgroundColor: "white" }}>
          <AlertTitle color={"black"}>
            algo salió mal <br /> {message}
          </AlertTitle>
        </Alert>
      </Stack>
    </Snackbar>
  );
}
