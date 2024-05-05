"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Courses from "./_components/Courses";
import Core from "./_components/Core";
import Placement from "./_components/Placement"
import Creative from "./_components/Creative"

function Programs() {
  const [SelectedCourse,setSelectedCourse] = useState("course1")
  const courseDetailsRef = useRef(null);

  const handleCourseSelect=(Course)=>{
    setSelectedCourse(Course)
    
    if (courseDetailsRef.current) {
      courseDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }

  }

  return (
    <div className="text-center w-screen h-screen mt-5 ">
      <h2 className=" text-center mt-5 text-2xl font-semibold">
        Courses At {" "}
        <span className="text-[#286AEA]">Elixir</span>
      </h2>
        <Courses onCourseSelect={handleCourseSelect}/>
        {/* <Creative/> */}


        {SelectedCourse && (
        <div className="course-details pt-20" style={{paddingBottom:"5rem"}} id="details"  ref={courseDetailsRef}>
          
          {SelectedCourse === "course1" && <Core />}
          {SelectedCourse === "course2" && <Placement />}
          {SelectedCourse === "course3" && <Creative />}
        </div>
      )}
    </div>
  );
}

export default Programs;
