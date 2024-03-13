import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function ErrorNotification({ message }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error" sx={{ backgroundColor: "white" }}>
        <AlertTitle>Algo salio mal</AlertTitle>
        {message}
      </Alert>
    </Stack>
  );
}
