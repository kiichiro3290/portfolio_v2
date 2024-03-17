import {
  Box,
  Typography,
  IconButton,
  Popover,
  Avatar,
  Paper,
  Grid,
} from "@mui/material";
import { Apps } from "@mui/icons-material";
import { theme } from "~/theme";
import { usePopOver } from "~/hooks/usePopOver";
import { useNavigate } from "@remix-run/react";
import { MenuIcon } from "../MenuIcon";

export const ApplicationBar: React.FC = () => {
  const { account, app } = usePopOver();

  return (
    <Box
      sx={{
        px: theme.spacing(1),
        width: "100vw",
        height: theme.spacing(4),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: theme.spacing(2),
      }}
    >
      <Typography
        sx={{
          fontSize: theme.spacing(2),
        }}
      >
        mail
      </Typography>
      <Typography
        sx={{
          fontSize: theme.spacing(2),
        }}
      >
        画像
      </Typography>
      <IconButton onClick={app.handleClickAppPopOver} size="large">
        <Apps />
      </IconButton>
      <Popover
        anchorEl={app.anchorAppPopOver}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={app.handleCloseAppPopOver}
        open={app.openAppPopOver}
      >
        <ApplicationMenuPopOver />
      </Popover>

      <IconButton onClick={account.handleClickPopOver}>
        <Avatar>
          <Typography>K</Typography>
        </Avatar>
      </IconButton>
      <Popover
        anchorEl={account.anchorPopOver}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={account.handleClosePopOver}
        open={account.openPopOver}
      >
        <AccountMenuPopOver />
      </Popover>
    </Box>
  );
};

export const AccountMenuPopOver: React.FC = () => {
  return (
    <Paper sx={{ p: theme.spacing(2) }}>
      <Typography>準備中...</Typography>
    </Paper>
  );
};

export const ApplicationMenuPopOver: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Paper sx={{ p: theme.spacing(2), width: theme.spacing(38) }}>
      <Grid container gap={2}>
        <Grid item xs={4}>
          <MenuIcon type="アカウント" onClick={() => navigate("/")} />
        </Grid>
        <Grid item xs={4}>
          <MenuIcon type="ドキュメント" onClick={() => navigate("/article")} />
        </Grid>
      </Grid>
    </Paper>
  );
};
