import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import pic1 from "./E-ticket.png";
import pic2 from "./film.png";
import pic3 from "./l.png";
import pic4 from "./math.PNG";
import pic5 from "./portfolio.PNG";
import pic6 from "./budget.PNG";

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

  const nextDescription = () => {
    setCurrentDescriptionIndex(
      (currentDescriptionIndex + 1) % descriptions.length
    );
  };

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
          <button className="w-28 h-28 px-3 bg-blu rounded-full text-para">
            GitHub
          </button>
        </a>
      </animated.div>
    </div>
  );
};

const Example = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
const slides = [
  {
    key: 1,
    content: (
      <Card
        src={pic1}
        alt="1"
        descriptions={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          "Project 1 Description 2",
        ]}
        githubLink="https://github.com/yourusername/project1"
      />
    ),
  },
  {
    key: 2,
    content: (
      <Card
        src={pic2}
        alt="2"
        descriptions={["Project 2 Description 1", "Project 2 Description 2"]}
        githubLink="https://github.com/yourusername/project2"
      />
    ),
  },
  {
    key: 3,
    content: (
      <Card
        src={pic3}
        alt="3"
        descriptions={["Project 3 Description 1", "Project 3 Description 2"]}
        githubLink="https://github.com/yourusername/project3"
      />
    ),
  },
  {
    key: 4,
    content: (
      <Card
        src={pic4}
        alt="4"
        descriptions={["Project 4 Description 1", "Project 4 Description 2"]}
        githubLink="https://github.com/yourusername/project4"
      />
    ),
  },
  {
    key: 5,
    content: (
      <Card
        src={pic5}
        alt="5"
        descriptions={["Project 5 Description 1", "Project 5 Description 2"]}
        githubLink="https://github.com/yourusername/project5"
      />
    ),
  },
  {
    key: 6,
    content: (
      <Card
        src={pic6}
        alt="6"
        descriptions={["Project 6 Description 1", "Project 6 Description 2"]}
        githubLink="https://github.com/yourusername/project6"
      />
    ),
  },
];

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div style={{ width: "65%", height: "420px", margin: "0 0 0 25%" }}>
      <Carousel
        slides={slides}
        goToSlide={currentSlide}
        showNavigation={false} // Hide default navigation
      />
      {currentSlide > 0 && (
        <button
        style={{
          position: "absolute",
          left: "13%",
          top: "280%",
          padding: "14px",
          fontSize: "16px",
          transform: "translateY(-50%)",
          color: "white",
          border: "solid 2px #B9848C",
          borderRadius: "50%",
          cursor: "pointer",
          background: "transparent",  // Set the background to transparent for the hover effect
          transition: "background 0.3s ease",  // Add a smooth transition for the effect
        }}
        onMouseOver={(e) => e.target.style.background = "#B9848C"}  // Change background on hover
        onMouseOut={(e) => e.target.style.background = "transparent"}  // Reset background on mouse out
          onClick={handlePrevious}
        >
           {"<"}
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
        style={{
          position: "absolute",
          right: "13%",
          top: "280%",
          padding: "12px",
          fontSize: "16px",
          transform: "translateY(-50%)",
          color: "white",
          border: "solid 2px #B9848C",
          borderRadius: "50%",
          cursor: "pointer",
          background: "transparent",  // Set the background to transparent for the hover effect
          transition: "background 0.3s ease",  // Add a smooth transition for the effect
        }}
        onMouseOver={(e) => e.target.style.background = "#B9848C"}  // Change background on hover
        onMouseOut={(e) => e.target.style.background = "transparent"}  // Reset background on mouse out
          onClick={handlePrevious}
        >
         {">"}
        </button>
      )}
    </div>
  );
};

export default Example;
