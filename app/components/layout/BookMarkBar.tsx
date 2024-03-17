import { Box, Typography, Link } from "@mui/material";
import { theme } from "~/theme";

export const BookMarkBar: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        px: theme.spacing(2),
        width: "100%",
        height: theme.spacing(4),

        borderBottom: "solid",
        borderWidth: theme.spacing(0.2),
        borderColor: theme.palette.divider,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Link
        href="https://github.com/kiichiro3290"
        target="_blank"
        rel="noreferrer"
        underline="none"
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing(1),
            alignItems: "center",
          }}
        >
          <img
            src="/GitHub-Mark-32px.png"
            alt="github-icon"
            width={16}
            height={16}
          />
          <Typography
            sx={{
              fontSize: theme.typography.caption,
              color: theme.palette.text.primary,
            }}
          >
            kiichiro3290
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};
