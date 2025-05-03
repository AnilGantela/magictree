import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9;
`;

export const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  color: #444;
`;

export const AddressBlock = styled.div`
  background: #f0f0f0;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 6px;
`;

export const LogoutButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background: #d62828;
  }
`;
