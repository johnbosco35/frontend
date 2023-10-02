/** @format */

import styled from "styled-components";
import img from "../../assets/write.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Container>
        <Main>
          <img src={img} alt="pending" />
          <span>Welcome to JayBee To-do list</span>
          <p>
            Understanding the psychology behind to-do lists: Why do they work?
            The sense of accomplishment: How checking off tasks boosts
            motivation. Stress reduction and improved focus: The science behind
            the benefits.
          </p>
          <Link to="/register">
            <button>Get started</button>
          </Link>
        </Main>
      </Container>
    </div>
  );
};

export default Home;

const Main = styled.div`
  width: 95%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 25px;
  }

  p {
    width: 550px;
    margin: 0;
    text-align: center;
    margin-top: 10px;
    font-family: cursive;
  }

  button {
    width: 200px;
    height: 40px;
    font-size: 15px;
    font-weight: 800;
    margin-top: 20px;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    background-color: #5a70ed;
    border: none;
    border-radius: 5px;
  }

  span {
    font-size: 30px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 20px;
    color: transparent;
    -webkit-text-stroke: 1px #5a70ed;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
