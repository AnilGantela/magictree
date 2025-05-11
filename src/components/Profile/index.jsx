import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {
  ProfileContainer,
  ProfileCard,
  Title,
  InfoRow,
  Label,
  Value,
  AddressBlock,
  LogoutButton,
} from "./styledComponents";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const token = Cookies.get("magicTreeToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://magictreebackend.onrender.com/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch user");

        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        console.error(err.message);
        Cookies.remove("magicTreeToken");
        navigate("/login");
      }
    };

    fetchUser();
  }, [token, navigate]);

  const handleLogout = () => {
    Cookies.remove("magicTreeToken");
    navigate("/");
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <Title>My Profile</Title>
        <InfoRow>
          <Label>Name:</Label>
          <Value>{user ? user.name : "anil"}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Email:</Label>
          <Value>{user ? user.email : "email"}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Phone:</Label>
          <Value>{user ? user.phone : "number"}</Value>
        </InfoRow>

        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
