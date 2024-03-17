import { Container, Grid, Box } from "@mui/material";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useNavigate } from "@remix-run/react";
import { MenuIcon } from "~/components/MenuIcon";
import { SearchWindow } from "~/components/SearchWindow";
import { theme } from "~/theme";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <Box component="div" width="100vw" height="100vh">
      <Container
        maxWidth="sm"
        sx={{
          py: {
            xs: theme.spacing(24),
          },
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(4),
        }}
      >
        <Box component="div">
          <img src="/Kiichiro.svg" alt="" height={80} width={300} />
        </Box>
        <SearchWindow />
        <Grid container>
          <Grid item xs={2}>
            <MenuIcon
              type="ドキュメント"
              onClick={() => navigate("/article")}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
