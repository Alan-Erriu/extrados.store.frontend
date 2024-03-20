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
          <AlertTitle color={"black"}>algo salió mal {message}</AlertTitle>
        </Alert>
      </Stack>
    </Snackbar>
  );
}
// import React, { useState, useEffect } from "react";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";
// import Stack from "@mui/material/Stack";
// import { Typography } from "@mui/material";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// export default function ErrorNotification({ message }) {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     // Mostrar el Snackbar solo si hay un mensaje
//     if (message) {
//       setOpen(true);

//       const timer = setTimeout(() => {
//         setOpen(false);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [message]); // Ejecutar efecto cuando el mensaje cambia

//   // Mostrar el Snackbar solo si hay un mensaje
//   if (!message) {
//     return null;
//   }

//   return (
//     <Snackbar open={open} autoHideDuration={3000}>
//       <Stack sx={{ width: "100%" }} spacing={2}>
//         <Alert severity="error" sx={{ backgroundColor: "white" }}>
//           <Typography color={"black"}>algo salió mal {message}</Typography>
//         </Alert>
//       </Stack>
//     </Snackbar>
//   );
// }
