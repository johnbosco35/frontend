/** @format */
import { BsLayoutSidebarInset } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline, IoPersonSharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

type iSide = {
  condition: boolean;
};

const Sider: React.FC<iSide> = ({ condition }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div>
      <Container style={{ transition: "all 350ms" }}>
        <BsLayoutSidebarInsetReverse
          // size={30}
          style={{
            position: "absolute",
            left: "50px",
            top: "70px",
            cursor: "pointer",
          }}
        />
        <Main>
          <Logo>
            <NavLink
              to="/home/board"
              style={{
                textDecoration: "none",
                transition: "all 350ms",
                color: "black",
              }}
            >
              {" "}
              <HiOutlineSun size={20} style={{ marginLeft: "8px" }} />
            </NavLink>

            {condition && (
              <NavLink
                to="/home/board"
                style={{ textDecoration: "none", transition: "all 350ms" }}
              >
                <span>Board</span>
              </NavLink>
            )}
          </Logo>
          <Logo>
            <NavLink
              to="/home/assigned"
              style={{
                textDecoration: "none",
                transition: "all 350ms",
                color: "black",
              }}
            >
              <AiOutlineHome size={20} style={{ marginLeft: "8px" }} />
            </NavLink>

            {condition && (
              <NavLink
                to="/home/assigned"
                style={{ textDecoration: "none", transition: "all 350ms" }}
              >
                <span>Assigned to me</span>
              </NavLink>
            )}
          </Logo>
          <Logo>
            <NavLink
              to="/home/task"
              style={{
                textDecoration: "none",
                transition: "all 350ms",
                color: "black",
              }}
            >
              {" "}
              <IoPersonSharp size={20} style={{ marginLeft: "8px" }} />
            </NavLink>

            {condition && (
              <NavLink
                to="/home/task"
                style={{ textDecoration: "none", transition: "all 350ms" }}
              >
                <span>Tasks</span>
              </NavLink>
            )}
          </Logo>
          <Logo>
            <NavLink
              to="/home/settings"
              style={{
                textDecoration: "none",
                transition: "all 350ms",
                color: "black",
              }}
            >
              <IoSettingsOutline size={20} style={{ marginLeft: "8px" }} />
            </NavLink>
            {condition && (
              <NavLink
                to="/home/settings"
                style={{ textDecoration: "none", transition: "all 350ms" }}
              >
                <span>Setting</span>
              </NavLink>
            )}
          </Logo>
          <Down>
            <BiLogOut size={25} style={{ marginLeft: "10px" }} />
            {condition && <span>Log Out</span>}
          </Down>
        </Main>
      </Container>
    </div>
  );
};

export default Sider;

const Down = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-top: 150px;

  span {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  span {
    margin-left: 9px;
    font-size: 20px;
    font-weight: 630;
    color: black;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const BsLayoutSidebarInsetReverse = styled.div`
  @media screen {
  }
`;

const Container = styled.div`
  height: 93vh;
  background-color: #fafbfc;
  border-right: 2px solid silver;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;
