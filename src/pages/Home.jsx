import React, { useState } from 'react'
import { images } from "../assets";
import { FaChevronRight } from "react-icons/fa";
import Register from "./Register";



const Home = () => {
  const [shoeModel, setShowModel] = useState(false)
  return (
    <>
      
      {/* <div className=" px-20 mt-12">
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
      </div> */}

<div className="home-container">
      <div className="home-image">
        <img src={images} alt="Login Image" className="relative" />
        <div className="logo-cont absolute ml-10 ">
       
        <h1 className="font-semibold text-white mb-10" style={{ fontSize: "calc(1rem + 2.5vw) " }}>
          <span className="text-yellow-400 ">Face</span> Recognition Based   <br/>         
          Attendance System
        </h1>
        
<div className="" >
        <div className="grid xl:grid-cols-3 xl:gap-12 ">
        {/* <div className="py-3"> */}
          <div className="">
            <button onClick={() => setShowModel(true)} className="border border-white rounded-lg py-4 px-2 gap-24 flex text-white">REGISTER FACE 
            <FaChevronRight  className="text-xl "/>
            </button>
          {/* </div> */}
     
      
        <div className="py-3 mt-2">
          <div className="">
            <button className="border border-white rounded-lg py-4 px-1 gap-20 flex text-white">TAKE ATTENDENCE 
            <FaChevronRight  className="text-xl "/>
            </button>
          </div>
        </div>
         
        <div className="py-3">
          <div className="">
            <button className="border border-white rounded-lg py-4 px-2 gap-16 flex text-white">CHECK-IN RECORDS 
            <FaChevronRight  className="text-xl "/>
            </button>
          </div>
        </div>
        <div className="py-3">
          <div className="">
            <button className="border border-white rounded-lg py-4 px-2 gap-32 flex text-white">DATA SETS 
            <FaChevronRight  className="text-xl "/>
            </button>
          </div>
        </div>
      </div>
      <div >
        {/* <div className="py-3"> */}
          <div className="">
            <button className="border border-white rounded-lg py-4 px-2 gap-28 flex text-white">TRAIN SYSTEM 
            <FaChevronRight  className="text-xl "/>
            </button>
          </div>
        {/* </div> */}
        <div className="py-5">
          <div className="">
            <button className="border border-white rounded-lg py-4 px-2 gap-24 flex text-white">USER INTERFACE 
            <FaChevronRight  className="text-xl "/>
            </button>
          </div>
        </div>
        {/* <div className="py-3"> */}
          <div className="mt-2">
            <button className="border border-white rounded-lg py-4 px-1 gap-16 flex text-white">CHECK-OUT RECORDS 
            <FaChevronRight  className="text-xl "/>
            </button>
          </div>
        {/* </div>  */}
       </div>
      </div>
      </div>
      </div>
      {shoeModel && <Register onClose={() => setShowModel(false)}/>}
</div>
</div>
    </>
  );
};

export default Home;
