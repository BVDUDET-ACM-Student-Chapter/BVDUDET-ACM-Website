import React from "react";
import { Helmet } from "react-helmet";

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>ACM Join Us | Bharati Vidyapeeth ACM Student Chapter</title>
      </Helmet>
      <div className="p-10 shadow-inner shadow-lg">
        <span
          className="text-blue-400 text-2xl md:text-4xl font-bold md:pl-8"
          style={{ fontFamily: "Fredoka" }}
        >
          Join Us - BVDUDET ACM Student Chapter
        </span>
      </div>
      <div className="container-fluid lg:px-28 mt-12">
        <div className=" w-4/5 h-screen mx-auto text-center ">
          <h1 className="text-3xl font-extrabold">ACM Internship Program</h1>
          <h2 className="text-2xl my-8 font-extrabold">
            Applications for the ACM Internship Program are now closed. Check
            back later for updates!
          </h2>
          <p className="text-lg mt-4">
            The ACM Internship program is a program that facilitates the
            transition of BVDUDET students to ACM lead. Interns learn about the
            ACM department they are interning for and ACM in general before
            becoming an official ACM lead.
          </p>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
