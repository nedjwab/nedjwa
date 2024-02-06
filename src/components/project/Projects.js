import Cards  from '../cards/Cards';
import './Projects.css';

const Projects = () => {
  const openLink = () => {
    window.open("https://github.com/nedjwab",'_blank')  }
  return (
    <div className="relative flex flex-col h-119 mt-0 mb-32 text-para content-center pt-14" id="Projects">
      <div className="st-section-heading st-style1 ">
        <h4 className="st-section-heading-title" data-aos="fade-down">WORK</h4>
        <h2 className="st-section-heading-subtitle">WORK</h2>
      </div>
      <blockquote className="text-center text-sm md:xl:lg:text-xl italic font-Bodoni mt-10 tracking-wide  md:lg:xl:w-2/4 mx-auto" data-aos="fade-right">
      <p className='text-center'>" In the forge of experience, I sculpted a path paved with expertise and fueled by passion,
        crafting a narrative of achievement in every endeavor ".</p>
      </blockquote>
      <div className='mt-2' >
        <Cards />
      </div>
      <button className='mx-auto btn' data-aos="flip-right" onClick={openLink}><span>Visit Github</span><i></i></button>
    </div>
  )
}

export default Projects

