/** @format */

import styled from "styled-components";
import { IoIosNotifications } from "react-icons/io";
import {
  BsRepeat,
  BsFillCloudSunFill,
  BsSunset,
  BsSun,
  BsMoonStars,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import moment from "moment";

const Board = () => {
  const [greeting, setGreeting] = useState<string>(getGreeting());
  const [side, setSide] = useState<Boolean>(false);

  const Toggle = () => {
    setSide(!side);
  };

  function getGreeting(): string {
    const currentTime = moment();
    const currentHour = currentTime.hours();

    if (currentHour >= 0 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good evening";
    } else {
      return "Good night";
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Date>
        {greeting === "Good morning" ? <BsFillCloudSunFill size={20} /> : null}
        {greeting === "Good afternoon" ? <BsSun size={20} /> : null}
        {greeting === "Good evening" ? <BsSunset size={20} /> : null}
        {greeting === "Good night" ? <BsMoonStars size={20} /> : null}
        <span>{greeting},JayBee</span>
      </Date>
      <Title>
        <span>My task</span>
      </Title>
      <Holder>
        <Text>
          <Circle></Circle>
          <input
            type="text"
            placeholder="Add Task"
            style={{
              marginLeft: "10px",
              width: "820px",
              height: "38px",
              outline: "none",
              border: "none",
              paddingLeft: "10px",
              fontSize: "16px",
              fontFamily: "cursive",
              cursor: "pointer",
            }}
          />
        </Text>
        <Card>
          <Left>
            <input type="date" />
            <IoIosNotifications size={20} />
            <BsRepeat size={20} />
          </Left>
          <Right>
            <span>Add</span>
          </Right>
        </Card>
      </Holder>
      <Text1 onClick={Toggle}>
        <Circle></Circle>
        <Task>
          <span>Cooking</span>
          <p>Tasks</p>
        </Task>
      </Text1>
      {side ? (
        <Side>
          <span>Assigned Task</span>
          <input
            type="email"
            placeholder="eg.jaybee,jaybee@gmail.com"
            style={{
              outline: "none",
              width: "300px",
              height: "25px",
              paddingLeft: "9px",
              border: "1px solid black",
              borderRadius: "4px",
            }}
          />
          <button>Assign</button>
        </Side>
      ) : null}
    </div>
  );
};

export default Board;

const Side = styled.div`
  width: 400px;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 8px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  left: 250px;
  top: 350px;

  span {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    font-size: 17px;
    font-weight: 600;
    font-family: cursive;
  }

  button {
    width: 100px;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background-color: #5a70ed;
    color: white;
    border: none;
  }
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;

  span {
    font-size: 13px;
  }
  p {
    margin: 0;
    font-size: 13px;
  }
`;

const Text1 = styled.div`
  width: 95%;
  height: 45px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-top: 35px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
`;

const Title = styled.div`
  margin-left: 20px;
  font-family: cursive;
`;

const Date = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-family: cursive;
  font-size: 29px;
  font-weight: 600;

  span {
    margin-left: 10px;
  }
`;

const Right = styled.div`
  width: 70px;
  height: 30px;
  border: 2px solid #ebecf0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const Left = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #5a70ed;
  margin-left: 10px;
`;

const Text = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px 5px 0px 0px;
`;

const Card = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  border-top: 1px solid silver;
  border-radius: 0px 0px 5px 5px;
`;

const Holder = styled.div`
  width: 1000px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 50px;
`;
