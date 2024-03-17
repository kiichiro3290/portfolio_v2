import { Description } from "@mui/icons-material";
import { Typography, IconButton, Avatar } from "@mui/material";
import { FunctionComponent } from "react";
import { theme } from "~/theme";

export type MenuIconProps = {
  onClick?: () => void;
  type: MenuType;
};

export type MenuType = "アカウント" | "ドキュメント";

export const MenuIcon: FunctionComponent<MenuIconProps> = ({
  onClick,
  type,
}) => {
  const generateAvatar = (type: MenuType) => {
    switch (type) {
      case "アカウント":
        return (
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
            <Typography>K</Typography>
          </Avatar>
        );
      case "ドキュメント":
        // Googleの青のカラーコード
        return (
          <Avatar sx={{ bgcolor: "#4285f4" }}>
            <Description />
          </Avatar>
        );
      default:
        return <Typography>K</Typography>;
    }
  };

  return (
    <IconButton
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1),
        borderRadius: theme.spacing(1),
        width: theme.spacing(10),
      }}
      size="large"
      onClick={onClick}
    >
      {generateAvatar(type)}
      <Typography variant="subtitle2">{type}</Typography>
    </IconButton>
  );
};
