import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <h1>Which language will you prefer in 2023 for Devlopment?</h1>
      <button onMouseEnter={props.handleMouseEnter}>
        <span>Select</span>{" "}
        <i
          className={
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
      </button>
    </div>
  );
};

export default Home;
