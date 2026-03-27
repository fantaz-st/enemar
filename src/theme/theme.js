import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import components from "./components";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,
  shape: {
    borderRadius: 16,
  },
});

theme.typography.display = typography.display;
theme.typography.nav = typography.nav;
theme.typography.brand = typography.brand;
theme.typography.muted = typography.muted;

export default theme;
