/** @format */

import { useState } from "react";
import styled from "styled-components";
import { RiImageEditFill } from "react-icons/ri";

const Setting = () => {
  const [change, setchange] = useState<boolean>(false);

  const Toggle = () => {
    setchange(!change);
  };

  return (
    <div>
      <Container>
        <Left>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <Box>
            <span>Update</span>
          </Box>
        </Left>
        <Right>
          <Circle></Circle>
          <Button onClick={Toggle}>
            <RiImageEditFill size={25} />
            <span>Edit</span>
          </Button>
          {change ? (
            <Card>
              <span>Update profile</span>
              <p>Remove image</p>
            </Card>
          ) : null}
        </Right>
      </Container>
    </div>
  );
};

export default Setting;

const Box = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5a70ed;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  font-family: cursive;
`;

const Card = styled.div`
  width: 200px;
  height: 80px;
  background-color: #5a70ed;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500px;
  font-family: cursive;
  cursor: pointer;

  span {
    width: 100%;
    text-align: center;
    :hover {
      background-color: #8294fd;
    }
  }

  p {
    margin: 0;
    width: 100%;
    text-align: center;
    :hover {
      background-color: #8294fd;
    }
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  background-color: #5a70ed;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  font-family: cursive;
  border: 1px solid silver;
  position: absolute;
  left: 880px;
  top: 390px;

  span {
    color: white;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: red;
  border: 1px solid silver;
`;

const Right = styled.div`
  width: 572px;
  height: 600px;
  border-left: 1px solid silver;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Left = styled.div`
  width: 572px;
  height: 600px;
  border-right: 1px solid silver;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 400px;
    height: 25px;
    outline: none;
    margin: 10px;
    padding-left: 10px;
    border-radius: 5px;
    font-family: cursive;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
