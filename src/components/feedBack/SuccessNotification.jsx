import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function SuccessNotification(message) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success" sx={{ backgroundColor: "white" }}>
        <AlertTitle>Exito</AlertTitle>
        {message}
      </Alert>
    </Stack>
  );
}
