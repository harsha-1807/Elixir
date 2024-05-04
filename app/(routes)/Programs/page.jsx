"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Creative from "./_components/Creative";
import Placement from "./_components/Placement";
import Core from "./_components/Core";

function Programs() {
  const [change, setchange] = useState(0);
  function handleclick(e) {
    setchange(e);
  }
  
  console.log(change)

  
  return (
    <div className="text-center w-screen h-screen mt-5 ">
      <h2 className="text-black  text-center font-semibold text-[2rem] my-5">
        Programs we Provide
      </h2>

      <div className="flex justify-center">
        
      <div className="md:flex md:gap-14 md:justify-between  bg my-8 text-[1.5rem] w-[20vw]">
        {" "} 
        <h2 onClick={()=>handleclick(1)}  role="button"> Core</h2>
        <h2 onClick={()=>handleclick(0)} role="button">Creative</h2>
        <h2 onClick={()=>handleclick(2)} role="button">Placement Services</h2>{" "}
      </div>
      </div>

      {change == 0 ? (
        <Creative />
      ) : change == 1 ? (
        <Core />
      ) : change == 2 ? (
        <Placement />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Programs;
