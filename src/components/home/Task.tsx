/** @format */

import styled from "styled-components";
import img from "../../assets/undraw_complete_task_re_44tb.svg";

const Task = () => {
  return (
    <div>
      {" "}
      <Title>
        <span>Task</span>....
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

export default Task;

const Title = styled.div`
  margin-left: 30px;
  margin-top: 15px;

  span {
    color: #5a70ed;
    font-size: 25px;
    font-weight: 600;
  }
`;
