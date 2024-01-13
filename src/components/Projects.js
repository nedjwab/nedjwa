import Cards  from './Cards'
import './Projects.css';

const Projects = () => {
  return (
    <div className="bg-back flex flex-col h-119 mt-0 text-para justify-center pt-14">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title">MY WORK</h4>
        <h2 className="st-section-heading-subtitle">MY WORK</h2>
      </div>
      <div className="">
        <Cards />
      </div>
    </div>

  )
}

export default Projects