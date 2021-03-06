import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container, Col } from 'react-awesome-styled-grid';
import logo from '../icons/logo.svg';
import Scrollspy from 'react-scrollspy';
import { StyledRow } from './Typograhpy';

const StyledNavbar = styled.nav`
  padding: 0;
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #07011e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0 0 0;

  @media (min-width: 48rem) {
    padding: 0;
  }
`;

const StyledCol = styled(Col)`
  max-height: ${({ open }) => (open ? '240px' : '0')};
  transition: max-height 0.3s linear;
  overflow: hidden;
  margin-top: 15px;

  @media (min-width: 48em) {
    margin-top: 0;
    max-height: 100%;
    justify-content: flex-end;
  }
`;

const NavbarList = styled(Scrollspy)`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: column;

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
  }
`;

const NavbarListItem = styled.li`
  padding: 10px 0;
  margin: 0;
  text-align: center;

  @media (min-width: 48rem) {
    padding: 20px 15px;
  }
`;

const NavbarListItemAnchor = styled(Link)`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  line-height: 0.71;
  letter-spacing: normal;
  color: #ffffff;
  opacity: 0.9;
  cursor: pointer;
  padding-bottom: 10px;

  :after {
    content: '';
    display: block;
    border-bottom: solid 2px #ff4952;
    transform: scaleX(0);
    height: 2px;
    transform-origin: 100% 0%;
    transition: transform 300ms ease-in-out;
  }

  @media (min-width: 48rem) {
    .is-current > & {
      :after {
        transform: scaleX(1);
        transform-origin: 0% 100%;
      }
    }
  }
  @media (min-width: 64rem) {
    :hover,
    .is-current > & {
      :after {
        transform: scaleX(1);
        transform-origin: 0% 100%;
      }
    }
  }
`;

const StyledBurger = styled.button`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 48rem) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledBurgerCol = styled(Col)`
  flex-direction: row;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <StyledNavbar>
      <Container>
        <StyledRow>
          <StyledBurgerCol xs={12} sm={2} align="center" justify="center">
            <a href="/">
              <img src={logo} alt="Logo" style={{ margin: 0 }} />
            </a>
            <StyledBurger
              onClick={toggleNavbar}
              open={open}
              aria-label="Burger Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </StyledBurger>
          </StyledBurgerCol>
          <StyledCol xs={12} sm={10} justify="center" open={open}>
            <NavbarList
              open={open}
              items={[
                'hero',
                'about-me',
                'timeline',
                'projects',
                'contact-form',
              ]}
              currentClassName="is-current"
              offset={-5}
            >
              <NavbarListItem>
                <NavbarListItemAnchor onClick={toggleNavbar} to="/#home">
                  Home
                </NavbarListItemAnchor>
              </NavbarListItem>
              <NavbarListItem>
                <NavbarListItemAnchor onClick={toggleNavbar} to="/#about-me">
                  About me
                </NavbarListItemAnchor>
              </NavbarListItem>
              <NavbarListItem>
                <NavbarListItemAnchor onClick={toggleNavbar} to="/#timeline">
                  Timeline
                </NavbarListItemAnchor>
              </NavbarListItem>
              <NavbarListItem>
                <NavbarListItemAnchor onClick={toggleNavbar} to="/#projects">
                  Projects
                </NavbarListItemAnchor>
              </NavbarListItem>
              <NavbarListItem>
                <NavbarListItemAnchor
                  onClick={toggleNavbar}
                  to="/#contact-form"
                >
                  Contact
                </NavbarListItemAnchor>
              </NavbarListItem>
            </NavbarList>
          </StyledCol>
        </StyledRow>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
