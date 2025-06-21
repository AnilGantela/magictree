import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Container,
  Sidebar,
  SidebarOption,
  LogoutButton,
  MainContent,
} from "./styledComponents";

const ProfileLayout = () => {
  const navigate = useNavigate();
  const token = Cookies.get("magicTreeToken");
  const handleLogout = () => {
    Cookies.remove("magicTreeToken");
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Sidebar>
        <SidebarOption onClick={() => navigate("/profile/user")}>
          User Details
        </SidebarOption>
        <SidebarOption onClick={() => navigate("/profile/orders")}>
          Orders
        </SidebarOption>
        {token ? (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        ) : (
          <LogoutButton onClick={handleLogin}>Login</LogoutButton>
        )}
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default ProfileLayout;
