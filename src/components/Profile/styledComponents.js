import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 91vh;
  background-color: #f9f9f9;
`;

export const Sidebar = styled.div`
  width: 200px;
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

export const UserDetailsTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserDeleteButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #d62828;
  }
`;

export const UserDetailsBlock = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const PopupBox = styled.div`
  width: 350px;

  background: white;

  border-radius: 12px;

  padding: 24px;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const PopupTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 22px;

  color: #222;
`;

export const PopupTextarea = styled.textarea`
  width: 100%;

  min-height: 120px;

  padding: 12px;

  border: 1px solid #ccc;

  border-radius: 8px;

  resize: none;

  outline: none;

  font-size: 14px;
`;

export const PopupInput = styled.input`
  width: 100%;

  padding: 12px;

  border: 1px solid #ccc;

  border-radius: 8px;

  outline: none;

  font-size: 14px;
`;

export const PopupButtonRow = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 20px;
`;

export const CancelButton = styled.button`
  border: none;

  background: #ddd;

  padding: 10px 18px;

  border-radius: 8px;

  cursor: pointer;

  font-weight: 600;
`;

export const ConfirmButton = styled.button`
  border: none;

  background: black;

  color: white;

  padding: 10px 18px;

  border-radius: 8px;

  cursor: pointer;

  font-weight: 600;
`;
