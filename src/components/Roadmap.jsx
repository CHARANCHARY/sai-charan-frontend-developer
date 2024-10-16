import React from 'react'
import video from "../BgAnimation/phase-1.mp4"
import video2 from "../BgAnimation/bg-phase-2 - Made with Clipchamp.mp4"
import video3 from "../BgAnimation/phase-3.mp4"
import imageIcon from "../images/Image.png";



const Roadmaps = () => {
  return (
    <>
    

    {/* Phase 1 */}

    <div className="road-container relative w-full h-screen text-white">

    {/* Video Background */}
    <div className="absolute inset-0 z-0">
      <video className="w-full h-full object-cover video-part" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
      {/* Darker Gradient Overlay */}
      <div className="extreme-dark-gradient"></div>
    </div>

    {/* Text Content */}
    
    <div className="relative z-10 p-2 text-content">
      {/* Phase Label */}
      <div className="inline-block bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded-md mb-4">
        PHASE 1
      </div>

      {/* Title */}
      
      <h1 className="text-4xl font-bold mb-10 mt-6">Kicking Off</h1>

      {/* Task List */}
      <ul className="space-y-4">
        <li className="flex items-center">
       
          <img src={imageIcon} className='icon-sty'  alt="icon"/>
          Launch of EthAi: Officially
        </li>
        <li className="flex items-center">
        <img src={imageIcon} className='icon-sty'  alt="icon"/>
          Development of Core AI Agents
        </li>
        <li className="flex items-center">
        <img src={imageIcon} className='icon-sty'  alt="icon"/>
          User Onboarding Campaign
        </li>
        <li className="flex items-center">
        <img src={imageIcon} className='icon-sty'  alt="icon"/>
          Community Engagement Initiatives
        </li>
      </ul>
    </div>
  </div>


{/* Phase 2 */}


   
  <div className="road-container relative w-full h-screen text-white">

{/* Video Background */}
<div className="absolute inset-0 z-0">
  <video className="w-full h-full object-cover video-part" autoPlay loop muted playsInline>
    <source src={video2} type="video/mp4" />
  </video>
  {/* Darker Gradient Overlay */}
  <div className="extreme-dark-gradient"></div>
</div>

{/* Text Content */}

<div className="relative z-10 p-2 text-content-2">
  {/* Phase Label */}
  <div className="inline-block bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded-md mb-4">
    PHASE 2
  </div>

  {/* Title */}
  
  <h1 className="text-4xl font-bold mb-10 mt-6">Bigger Insights</h1>

  {/* Task List */}
  <ul className="space-y-4">
    <li className="flex items-center">
   
      <img src={imageIcon} className='icon-sty'  alt="icon"/>
      Introduction of Advanced AI Agents
    </li>
    <li className="flex items-center">
    <img src={imageIcon} className='icon-sty'  alt="icon"/>
    Strategic Partnerships
    </li>
    <li className="flex items-center">
    <img src={imageIcon} className='icon-sty'  alt="icon"/>
    User Interface Optimization
    </li>
    <li className="flex items-center">
    <img src={imageIcon} className='icon-sty'  alt="icon"/>
    Comprehensive Marketing Campaign
    </li>
  </ul>
</div>
</div>






{/* Phase 3 */}



<div className="road-container relative w-full h-screen text-white">

{/* Video Background */}
<div className="absolute inset-0 z-0 hidden md:block">
  <video className="w-full h-full object-cover video-part" autoPlay loop muted playsInline>
    <source src={video3} type="video/mp4" />
  </video>
  {/* Darker Gradient Overlay */}
  <div className="extreme-dark-gradient"></div>
</div>

{/* Text Content */}

<div className="relative z-10 p-2 text-content">
  {/* Phase Label */}
  <div className="inline-block bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded-md mb-4">
    PHASE 3
  </div>

  {/* Title */}
  
  <h1 className="text-4xl font-bold mb-10 mt-6">Full Power</h1>

  {/* Task List */}
  <ul className="space-y-4">
    <li className="flex items-center">
   
      <img src={imageIcon} className='icon-sty'  alt="icon"/>
      Introduction of Enhanced Features
    </li>
    <li className="flex items-center">
    <img src={imageIcon} className='icon-sty'  alt="icon"/>
    API Integration for Data Access
    </li>
    <li className="flex items-center">
    <img src={imageIcon} className='icon-sty'  alt="icon"/>
    Launch of Community-Driven Initiatives
    </li>
    <li className="flex items-center">
    <img src={imageIcon} className='icon-sty'  alt="icon"/>
    Continuous Improvement and Updates
    </li>
  </ul>
</div>
</div>
  </>
  )
}

export default Roadmaps