"use client";
import { useEffect } from "react";
import $ from "jquery";
import "./custom-calendar.scss";
import "evo-calendar/evo-calendar/js/evo-calendar.js";
import { Helmet } from "react-helmet";

const Events = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      $("#calendar").evoCalendar({
        language: "en",
        sidebarToggler: true,
        sidebarDisplayDefault: false,
        titleFormat: "MM yyyy",
        eventHeaderFormat: "MM d, yyyy",
        eventListToggler: true,
        eventDisplayDefault: true,
        todayHighlight: true,
        calendarEvents: [
          {
            id: "1", // Event's ID (required)
            badge: "Event", // Event badge (optional)
            name: "ACM Inauguration", // Event name (required)
            description:
              "ACM Student Chapter Inauguration at BVDU-DET on 20th Oct 2023 celebrated formation, fostering community, academic excellence, and networking in computer science. ACM's global renown aligns with our academic ethos.", // Event description (optional)
            date: ["October/20/2023"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
          {
            id: "2", // Event's ID (required)
            badge: "Competition", // Event badge (optional)
            name: "UI/UX Design Competition", // Event name (required)
            description:
              "The ACM Student Chapter at BVDU-DET hosted a UI/UX Design Competition on 27th Jan 2024. Participants showcased their creativity and skills in user interface and experience design, fostering innovation and collaboration within the community.", // Event description (optional)
            date: ["January/20/2024", "January/27/2024"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
          {
            id: "3", // Event's ID (required)
            badge: "Event", // Event badge (optional)
            name: "Cyber Security & Ethical Hacking", // Event name (required)
            description:
              "The ACM Student Chapter at BVDU-DET will host a Cyber Security & Ethical Hacking workshop on 16th Feb 2024. Participants will learn about the latest trends in cyber security and ethical hacking, and how to protect themselves from cyber threats.", // Event description (optional)
            date: ["February/16/2024", "February/17/2024"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
          {
            id: "4", // Event's ID (required)
            badge: "Event", // Event badge (optional)
            name: "ACM Competitive Programming", // Event name (required)
            description:
              "The ACM Student Chapter at BVDU-DET will host a ACM Competitive Programming workshop on 15th Feb 2024.", // Event description (optional)
            date: ["February/15/2024"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
          {
            id: "5", // Event's ID (required)
            badge: "Competition", // Event badge (optional)
            name: "Poster Making", // Event name (required)
            description:
              "The ACM Student Chapter at BVDU-DET will host a Poster Making Competition on 22nd Feb 2024.", // Event description (optional)
            date: ["February/22/2024"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
          {
            id: "6", // Event's ID (required)
            badge: "Workshop", // Event badge (optional)
            name: "Resume Building", // Event name (required)
            description:
              "The ACM Student Chapter at BVDU-DET will host a Resume Building workshop on 2nd Mar 2024. Participants will learn about the latest trends in Resume Building.", // Event description (optional)
            date: ["March/02/2024"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
          {
            id: "7", // Event's ID (required)
            badge: "Event", // Event badge (optional)
            name: "Entrepreneurship: Road to Start-ups", // Event name (required)
            description:
              "The ACM Student Chapter at BVDU-DET will host a Entrepreneurship: Road to Start-ups workshop on 15th Mar 2024. Participants will learn about the latest trends in Entrepreneurship.", // Event description (optional)
            date: ["March/15/2024"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
          {
            id: "8", // Event's ID (required)
            badge: "Training", // Event badge (optional)
            name: "Aptitude Training", // Event name (required)
            description:
              "The ACM Student Chapter at BVDU-DET will host a Aptitude Training workshop on 23rd Mar 2024.", // Event description (optional)
            date: ["March/23/2024"], // Event date (required)
            type: "event", // Event type (required)
            everyYear: false, // Same event every year (optional)
            color: "#63d867", // Event custom color (optional)
          },
        ],
      });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>ACM Events | Bharati Vidyapeeth ACM Student Chapter</title>
      </Helmet>
      <div className="p-10 shadow-inner shadow-lg">
        <span
          className="text-blue-400 text-2xl md:text-4xl font-bold md:pl-8"
          style={{ fontFamily: "Fredoka" }}
        >
          Events
        </span>
      </div>
      <div className="my-5">
        <div
          id="calendar"
          style={{
            height: "100%",
            width: "90%",
          }}
        ></div>
      </div>
    </>
  );
};

export default Events;
