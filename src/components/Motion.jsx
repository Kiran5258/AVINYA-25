import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgvideo from "../assets/Bgvideo.mp4";
import { useNavigate } from "react-router-dom";
// import krcelogo from "../assets/11.png";
import ipl from "../assets/456.webp";
import front from "../assets/Frontman.webp";
import paperpresent from "../assets/paperpresentation.webp";
import uiux from "../assets/uiux.webp";
import Escape from "../assets/Escape.webp";
import debug from "../assets/debugging.webp";
import mobliegame from "../assets/mobliegame.webp";
import bg from "../assets/Bg2.jpg";
export default function Motion() {
  const navigate = useNavigate();

  const events = [
    {
      id: "1",
      title: "DALGONA PAPERS",
      description: "PAPER PRESENTATION",
      image: `${paperpresent}`,
    },
    {
      id: "2",
      title: "GLASS BRIDGE DESIGN",
      description: "UI/UX",
      image: `${uiux}`,
    },
    {
      id: "3",
      title: "THE MASKED BUG",
      description: "DEBUGGING",
      image: `${debug}`,
    },
    {
      id: "4",
      title: "THE ELIMINATION ROOM",
      description: "THE GLITCH ESCAPE",
      image: `${Escape}`,
    },
    {
      id: "5",
      title: "DIGITAL DEATH MATCH",
      description: "Mobile Games",
      image: `${mobliegame}`,
    },
    {
      id: "6",
      title: "THE FRONT MAN'S STRATEGY",
      description: "Board Room Boss",
      image: `${front}`,
    },
    {
      id: "7",
      title: "456 BIDDING WAR",
      description: "IPL AUCTION",
      image: `${ipl}`,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "18%",
    responsive: [
      {
        breakpoint: 640,
        setting: {
          centerpadding: "20%",
          arrow: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="relative w-full h-screen flex flex-col items-center justify-center">
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <h1 className="text-6xl md:text-8xl font-bold font-squid text-white text-center z-10">
          AVINYA'25
        </h1>
        <div
          className="absolute bottom-10 animate-bounce cursor-pointer"
          onClick={() =>
            document
              .getElementById("descriptionSection")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </section>

      <section
        className="w-full min-h-[120vh] bg-gray-900 flex flex-col items-center justify-center py-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "120vh",
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-10 font-squid">
          Events
        </h2>
        <div className="relative md:w-full w-80 max-w-lg h-[250px] font-squid">
          <Slider {...settings}>
            {events.map((event) => (
              <div key={event.id} className="flex justify-center">
                <div className="relative flex flex-col items-center bg-gray-800 bg-opacity-50 rounded-lg p-6 w-50 shadow-lg sm:w-80 h-[350px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-40 h-40 mb-4 object-cover rounded-lg"
                  />
                  <h2 className="text-xs md:text-lg font-bold text-white text-center">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-300 text-center flex-1">
                    {event.description}
                  </p>
                  <button
                    className="mt-4 mb-4 px-6 py-2 text-xs md:text-lg bg-gray-700 text-white font-semibold border border-gray-500 rounded-md hover:bg-gray-600 transition cursor-pointer"
                    onClick={() => navigate(`/event/${event.id}`)}
                  >
                    KNOW MORE
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="h-auto w-80 flex flex-col justify-center items-center mt-48 ">
          <div className="w-92 max-w-3xl mt-10 px-6 py-4 bg-gray-700 text-white font-bold rounded-md border-3 mr-6 ml-6">
            <h1 className="text-xl mb-2 text-center font-squid">
              General Rules
            </h1>
            <ul className="text-sm text-left list-none pl-2">
              <li>● Certificates will be provided for all the participants.</li>
              <li>● The winners will be rewarded with the Exiciting
              Prizes.</li>
              <li>
                ● A participant should participate in a maximum of two events
                (One technical and One non-technical).
              </li>
              <li>● Only online registration is available.</li>
              <li>● Lunch and refreshments will be provided.</li>
              <li>
                ● A proper dress code will be followed, and a college ID card is
                mandatory.
              </li>
              <li>
                ● All participants should report at the reception at 9:00 am.
              </li>
              <li>
                ● In all events, the decision of the judges will be final and
                obligatory.
              </li>
            </ul>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1oYPu4a-Milbso1u_RqI4Yrr3t9F32B31/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 mt-4 bg-gray-700 text-white font-bold rounded-md border-3 border-red-500 hover:bg-gray-600 transition"
        >
          Rule Book
        </a>
      </section>
    </>
  );
}
