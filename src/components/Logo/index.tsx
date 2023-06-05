import { FC } from "react";
import { Typography } from "@mui/material";
import { ILogoProps } from "./index.props";

const Logo: FC<ILogoProps> = ({ variant }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display:
          variant === "desktop"
            ? { xs: "none", md: "flex" }
            : { xs: "flex", md: "none" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
        flexGrow: variant === "mobile" ? 1 : 0,
      }}
    >
      LOGO
    </Typography>
  );
};

export default Logo;
