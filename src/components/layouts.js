import React from "react";
import Sidebar from "./sidebar";


function Layouts(props) {
  return (
    <>
      <div className="main-wrap">
        <Sidebar />
        <div className="content-wrap">{props.children}</div>
      </div>
    </>
  );
}

export default Layouts;
