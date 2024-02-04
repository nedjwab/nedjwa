import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { ImPrevious ,ImNext } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
import pic1 from "../assets/images/E-ticket.png";
import pic2 from "../assets/images/film.png";
import pic3 from "../assets/images/l.png";
import pic4 from "../assets/images/math.PNG";
import pic5 from "../assets/images/portfolio.PNG";
import pic6 from "../assets/images/budget.PNG";

const Card = ({ src, alt, descriptions, githubLink }) => {
  const [flipped, setFlipped] = useState(false);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);

  const { opacity, transform } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
  });

  const descriptionSpring = useSpring({
    opacity: flipped ? 1 : 0,
  });

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: flipped ? "rgba(0, 0, 0, 0.5)" : "transparent",
      }}
    >
      <animated.div
        style={{
          opacity,
          transform,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform, opacity",
        }}
      >
        <img src={src} className="rounded-lg" alt={alt} />
      </animated.div>
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          margin: "6px",
          textAlign: "center",
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ...descriptionSpring,
        }}
      >
        <p style={{ color: "white" }}>
          {descriptions[currentDescriptionIndex]}
        </p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div id="btn"><span className="noselect flex flex-row justify-center items-center">
          <IoIosArrowRoundForward className="mr-2 text-2xl"/> Github</span><div id="circle"></div></div>
        </a>
      </animated.div>
    </div>
  );
};

const Cards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 
const slides = [
  {
    key: 1,
    content: (
      <Card
        src={pic1}
        alt="1"
        descriptions={[
          "a music festival website. This project consists of four sections and a link to an about page. I added some cool animation and transitions using CSS. Also, I made a hamburger button for the mobile version using javascript. the Dj's section is added dynamically using javaScript also well.",
        ]}
        githubLink="https://github.com/nedjwab/E-ticket-Capstone"
      />
    ),
  },
  {
    key: 2,
    content: (
      <Card
        src={pic2}
        alt="2"
        descriptions={[" it is a movie website which fetches movies from TVmaze API and displays them, where we used Microverse involvement API for adding likes, comments and reservations"]}
        githubLink="https://github.com/principles31/Javascript_Capstone_Project"
      />
    ),
  },
  {
    key: 3,
    content: (
      <Card
        src={pic3}
        alt="3"
        descriptions={["phi industries is a simple website for a medical company, Users can find more information about phi-industries and the medicines they produce."]}
        githubLink="https://github.com/nedjwab/phi-industries"
      />
    ),
  },
  {
    key: 4,
    content: (
      <Card
        src={pic4}
        alt="4"
        descriptions={["Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculation."]}
        githubLink="https://github.com/nedjwab/math-magicians"
      />
    ),
  },
  {
    key: 5,
    content: (
      <Card
        src={pic5}
        alt="5"
        descriptions={["a responsive portfolio. the projects section is added dynamically using a javaScript function. each project's card has a pop-up window containing the project details and a live link. the last section is the contact me form where I used Javascript to validate the form"]}
        githubLink="https://github.com/nedjwab/MyPortfolio"
      />
    ),
  },
  {
    key: 6,
    content: (
      <Card
        src={pic6}
        alt="6"
        descriptions={["a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what."]}
        githubLink="https://github.com/nedjwab/my-budget"
      />
    ),
  },
];


  const handlePrevious = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <>
      <div
        style={{
          width: "65%",
          height: "420px",
          margin: "30px 0 30px 25%",
        }}
        data-aos="fade-down"
      >
        <Carousel
          slides={slides}
          goToSlide={currentSlide}
          showNavigation={false} // Hide default navigation
        />
      </div>
      <div>
        {currentSlide > 0 && (
          <ImPrevious 
            style={{
              position: "absolute",
              left: "13%",
              top: "59%",
              padding: "12px",
              fontSize: "70px",
              transform: "translateY(-50%)",
              color: "#B9848C",
              cursor: "pointer",
            }}
            onClick={handlePrevious}
            onMouseOver={(e) => e.target.style.color = "white"} 
          />
        )}
        {currentSlide < slides.length - 1 && (
          <ImNext
            style={{
              position: "absolute",
              right: "12%",
              top: "59%",
              padding: "12px",
              fontSize: "70px",
              transform: "translateY(-50%)",
              color: "#B9848C",
              cursor: "pointer",
              transition: "background 0.3s ease"
            }}
            onClick={handleNext}
            onMouseOver={(e) => e.target.style.color = "white"} 
          />
        )}
      </div>
    </>
  );
};

export default Cards;
