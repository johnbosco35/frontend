/** @format */

import styled from "styled-components";
import Typewriter from "typewriter-effect";
import img from "../../assets/undraw_to_do_list_re_9nt7.svg";
import bg from "../../assets/To-do-removebg-preview.png";
import go from "../../assets/Google.png";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInUser } from "../Apis/AuthApis";
// import { useState } from "react";

const SignIn = () => {
  const nagviate = useNavigate();
  const schema = yup
    .object({
      email: yup.string().required().email(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(async (data: any) => {
    signInUser({
      email: data?.email,
      password: data?.password,
    }).then(() => {
      toast("SignIn Successfully");
      nagviate("/home");
    });
  });
  return (
    <div>
      <Container>
        <ToastContainer position="bottom-center" />
        <Left>
          <img
            src={bg}
            alt="pending"
            style={{
              height: "90px",
              marginLeft: "400px",
              marginBottom: "20px",
            }}
          />
          <span>
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter: any) => {
                typewriter

                  .typeString("Welcome Back!")
                  .pauseFor(1500)
                  .deleteAll()

                  .typeString("Log In to Your Account")
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
          <img src={img} alt="pending" />
        </Left>
        <Right onSubmit={onSubmit}>
          <h1>Sign in</h1>
          <Text>
            <span>Don't have an account?</span>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p>Sign up here</p>
            </Link>
          </Text>
          <a
            href="http://localhost:2020/veri/google"
            style={{ textDecoration: "none" }}
          >
            <Google>
              <img src={go} alt="pending" />
              <span>Sign in with Google</span>
            </Google>
          </a>
          <a
            href="http://localhost:2020/veri/github"
            style={{ textDecoration: "none" }}
          >
            <Github>
              <AiFillGithub size={20} />
              <span>Sign in with Github</span>
            </Github>
          </a>
          <Line>
            <div></div>
            <p>OR</p>
            <div></div>
          </Line>
          <Box>
            <input
              type="text"
              placeholder="Enter Email"
              {...register("email")}
            />
            <span>{errors?.email?.message}</span>
          </Box>
          <Box>
            <input
              type="text"
              placeholder="Enter password"
              {...register("password")}
            />
            <span>{errors?.password?.message}</span>
          </Box>
          <Down>
            <input type="checkbox" />
            <span>Remember me</span>
          </Down>
          <Button type="submit">Sign in</Button>
        </Right>
      </Container>
    </div>
  );
};

export default SignIn;

const Button = styled.button`
  width: 480px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  background-color: #5a70ed;
  color: white;
  border: none;
  border-radius: 20px;
  margin-top: 15px;
  cursor: pointer;
`;

const Down = styled.div`
  width: 70%;
  display: flex;
  margin-top: 8px;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  input {
    width: 15px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;

  input {
    width: 450px;
    height: 30px;
    outline: none;
    border-radius: 5px;
    padding-left: 5px;
    border-bottom: 1px solid black;
  }

  span {
    margin: 0;
    font-size: 13px;
    margin-left: 300px;
    color: red;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  div {
    margin: 0;
    width: 140px;
    height: 2px;
    background-color: gray;
    border-radius: 15px;
  }
`;

const Google = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  background-color: #e4e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;

  span {
    font-family: cursive;
    font-size: 17px;
    font-weight: 400;
    margin-left: 5px;
  }
`;
const Github = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  background-color: #e4e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;

  span {
    font-family: cursive;
    font-size: 17px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  span {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    margin: 0;
    color: #5a70ed;
    font-size: 15px;
    font-weight: bold;
  }
`;

const Right = styled.form`
  width: 700px;
  height: 650px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
  }
`;

const Left = styled.div`
  width: 700px;
  height: 650px;
  background-color: #5a70ed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 30px;
    font-weight: 700;
    color: white;
  }

  img {
    height: 300px;
    margin-top: 40px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
