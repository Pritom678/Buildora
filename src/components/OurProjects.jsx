import React from 'react'
import Projects from './Projects'

export default function OurProjects() {
  return (
    <div>
       <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent/60 uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-accent kiona">
            Featured Projects
          </h2>
          <p className="text-lg text-accent/70 mt-4 max-w-2xl mx-auto">
            Explore our portfolio of successful web development projects that
            showcase our expertise in building modern, high-performance
            websites.
          </p>
        </div>
        <div className="">
          <Projects/>
        </div>
    </div>
  )
}
