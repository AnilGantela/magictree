import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 91vh;
  background-color: #f9f9f9;
`;

export const Sidebar = styled.div`
  width: 250px;
  background: #06038d;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarOption = styled.button`
  background: ${({ active }) => (active ? "#457b9d" : "transparent")};
  color: white;
  border: none;
  text-align: left;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #457b9d;
  }
`;

export const MainContent = styled.div`
  flex-grow: 1;
  background-color: #fff;
  padding: 0 1.5rem;
  height: 90vh;
  overflow-y: scroll;

  /* Hide scrollbar for Webkit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE, Edge */
  -ms-overflow-style: none;
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

export const LogoutButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  margin-top: auto;
  cursor: pointer;
  &:hover {
    background: #d62828;
  }
`;
