import React from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const HeaderNavigation = styled.div`
  background-color: #44ff66;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Button = styled.button`
  color: ${props => props.theme.colors.secondary};
`;

function Header() {
  const location = useLocation();
  return (
    <HeaderNavigation>
      <Link to="/issues" active={location.pathname === "/issues"}>
        <Button>Show all issues</Button>
      </Link>

      <Link to="/settings" active={location.pathname === "/settings"}>
        <Button>Settings</Button>
      </Link>
    </HeaderNavigation>
  );
}

export default Header;
