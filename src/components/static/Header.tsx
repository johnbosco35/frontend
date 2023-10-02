/** @format */

import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>To Do</Left>
          <Right></Right>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Right = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid silver;
`;

const Left = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: cursive;
`;

const Main = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5a70ed;
`;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5a70ed;
  border-bottom: 1px solid silver;
`;
