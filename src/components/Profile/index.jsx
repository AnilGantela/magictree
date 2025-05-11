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
  const handleLogout = () => {
    Cookies.remove("magicTreeToken");
    navigate("/");
  };

  return (
    <Container>
      <Sidebar>
        <SidebarOption onClick={() => navigate("/profile/user")}>
          User Details
        </SidebarOption>
        <SidebarOption onClick={() => navigate("/profile/products")}>
          Purchased Products
        </SidebarOption>
        <SidebarOption onClick={() => navigate("/profile/orders")}>
          Orders
        </SidebarOption>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default ProfileLayout;
