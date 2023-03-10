import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  /* background-color: aliceblue; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

var MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  margin-right: 20px;
  padding: 10px 15px;
  font-weight: bold;
  background-color: crimson;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo> Agency </Logo>
            <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>Features</MenuItem>
              <MenuItem>Services</MenuItem>
              <MenuItem>Pricing</MenuItem>
              <MenuItem>Contact</MenuItem>
            </Menu>
          </Left>
          <Button>Join Today</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
