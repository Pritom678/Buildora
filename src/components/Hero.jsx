import React from 'react'
import Globe from './Globe'

export default function Hero() {
  return (
    <div className=''>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      <div className="">
        <div className="absolute mt-40 ml-15">
          <h1 className='text-6xl font-bold leading-tight max-w-4xl kiona'>
            TEKPROlogoVA
            Crafting MOlogodern
            Web Experiences
          </h1>
          <p className='mt-6 max-w-xl text-lg text-accent'>
            We build fast, scalable and interactive websites for startups,
          agencies and digital brands.
          </p>
          <div className="my-5 space-x-5">
            <button className="px-8 border-2 border-secondary py-3 rounded-full bg-primary text-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View Projects
          </button>

          <button className="group border-2 border-secondary relative px-8 py-3 rounded-full border border-primary overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-primary">
              Start Project →
            </span>
          </button>
          </div>
        </div>
        <div>
          <Globe />
        </div>
      </div>
    </div>
  )
}
