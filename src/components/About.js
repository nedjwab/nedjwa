import React from 'react'

const About =() => {
  return (
    <>
    <CircleGrid
    position="relative"
    color="#455947"
    size="170px"
    left="21%"
    top="12%"
    />
    <img className="w-1/5 mr-32 mt-16 rounded-full" data-aos="fade-left" src={pic} alt="logo" />
    <CircleGrid
    position="absolute"
    color="#455947"
    size="170px"
    left="62%"
    top="53%"
    />
    </>
  )
}


export default About