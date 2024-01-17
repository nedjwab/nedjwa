import Example  from './Cards';
import './Projects.css';

const Projects = () => {
  return (
    <div className="bg-back flex flex-col h-119 mt-0 text-para content-center pt-14">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title">MY WORK</h4>
        <h2 className="st-section-heading-subtitle">MY WORK</h2>
      </div>
      <blockquote className="text-lg italic font-Bodoni mt-10 tracking-wide  w-2/4 mx-auto">
      <p className='text-center'>" In the forge of experience, I sculpted a path paved with expertise and fueled by passion,
        crafting a narrative of achievement in every endeavor ".</p>
      </blockquote>
      <div className="">
        <Example  />
      </div>
      <button className='mx-auto btn'><span>Visit Github</span><i></i></button>
    </div>

  )
}

export default Projects


