/** @format */

import React from "react";
import styled from "styled-components";
import img from "../../assets/undraw_collaboration_re_vyau.svg";

const Assigned = () => {
  return (
    <div>
      <Title>
        <span>Assigned to me</span>....
      </Title>
      <img
        src={img}
        alt="pending"
        style={{
          height: "420px",
          marginTop: "70px",
          marginLeft: "300px",
        }}
      />
    </div>
  );
};

export default Assigned;

const Title = styled.div`
  margin-left: 30px;
  margin-top: 15px;

  span {
    color: #5a70ed;
    font-size: 25px;
    font-weight: 600;
  }
`;
