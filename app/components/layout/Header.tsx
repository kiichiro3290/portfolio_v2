import { Box } from "@mui/material";
import { theme } from "~/theme";
import { ApplicationBar } from "./ApplicationBar";
import { BookMarkBar } from "./BookMarkBar";

export const Header: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        top: 0,
        zIndex: theme.zIndex.appBar,
      }}
    >
      <BookMarkBar />
      <ApplicationBar />
    </Box>
  );
};
