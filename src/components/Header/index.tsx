import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../Logo";
import { StyledHeader } from "./styles";

const Header: FC = () => {
  return (
    <StyledHeader>
      <AppBar position="static" component="div">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Logo variant="desktop" />
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Logo variant="mobile" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </StyledHeader>
  );
};

export default Header;
