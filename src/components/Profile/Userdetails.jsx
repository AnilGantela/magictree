import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Title, InfoRow, Label, Value } from "./styledComponents";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("magicTreeToken");
    if (!token) return navigate("/login");

    const fetchUser = async () => {
      const res = await fetch("https://magictreebackend.onrender.com/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, [navigate]);

  return (
    <>
      <Title>User Details</Title>
      <InfoRow>
        <Label>Name:</Label>
        <Value>{user?.name}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Email:</Label>
        <Value>{user?.email}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Phone:</Label>
        <Value>{user?.phone}</Value>
      </InfoRow>
    </>
  );
};

export default UserDetails;
