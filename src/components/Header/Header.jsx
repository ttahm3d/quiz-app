import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/utils";
// import { NavLink } from "react-router-dom";
// import { FiSun, FiMenu, FiX, FiGithub } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Container>
        <Navbar>
          <Logo>Quiz App</Logo>
          <NavbarItems>
            <NavList>
              {/* <NavbarItem>Quizzes</NavbarItem>
              <NavbarItem>Home</NavbarItem>
              <NavbarItem>Leader Board</NavbarItem> */}
            </NavList>
            <ThemeToggler onClick={toggleTheme}>
              {theme === "lightTheme" ? <IoMdMoon /> : <FiSun />}
            </ThemeToggler>
          </NavbarItems>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.colors.sage1};
  box-shadow: 0 0 4px ${(props) => props.theme.colors.sage6};
`;

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const NavbarItem = styled.li`
//   border-bottom: 2px solid transparent;

//   &:hover {
//     border-bottom: 2px solid ${(props) => props.theme.colors.blue9};
//     transition: 0.3s all ease;
//   }
// `;

const ThemeToggler = styled.button`
  color: inherit;
  background-color: inherit;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.sage7};
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.sage3};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.sage4};
  }
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 1rem;
  list-style: none;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.blue9};
  font-family: var(--font-family-lato-sans);
  font-weight: 700;
`;

export default Header;
