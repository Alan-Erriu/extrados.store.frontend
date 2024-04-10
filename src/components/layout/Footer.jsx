import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function GuestFooter() {
  return (
    <Paper
      sx={{ marginTop: "280px" }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Typography variant="caption" color="initial" textAlign="center">
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>Portafolio</IconButton>
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="caption" color="initial" textAlign="center">
            Extrados Store
          </Typography>
          mi logo
        </Box>
      </Container>
    </Paper>
  );
}
