import React from "react";

const Home = () => {
  return (
    <>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className=" px-20 mt-12">
        <h1 className="text-5xl font-semibold">
          <span className="text-yellow-400">Face</span> Recognition Based <br />
          Attendance System
        </h1>
      </div>
      <div className="border ">
        <div>
          <button>REGISTER FACE</button>
        </div>
        <div>
          <button>TAKE ATTENDENCE</button>
        </div>
        <div>
          <button>CHECK-IN RECORDS</button>
        </div>
        <div>
          <button>DATA SETS</button>
        </div>
        <div>
          <button>TRAIN SYSTEM</button>
        </div>
      </div>
    </>
  );
};

export default Home;
