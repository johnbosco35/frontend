/** @format */

import React, { useState } from "react";
import Header from "../static/Header";
import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Layout = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div
          style={{
            position: "absolute",
            left: show ? "150px" : "10px",
            top: "60px",
            fontSize: "26px",
            cursor: "pointer",
            transition: "all 350ms",
          }}
          onClick={() => setShow(!show)}
        >
          {show ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
        </div>
        <Sider condition={show ? true : false} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
