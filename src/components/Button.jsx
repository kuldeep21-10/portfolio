
import React from 'react'

const Button = () => {
  return (
    <div className="flex flex-col items-start gap-6 px-5 py-8 sm:px-8">

      {/* Heading */}
      <div className="flex flex-col items-start gap-3 w-full">

        <p className="text-[#6EE7B7] text-sm font-medium tracking-widest uppercase">
          MERN Stack Developer
        </p>

        <h1 className="text-white text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
          Hi, I'm Kuldeep.
          <br />
          I build fast,
          <br />
          <span className="text-[#6EE7B7]">
            scalable web apps.
          </span>
        </h1>

        <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-xl">
          I build modern, responsive web applications
          with React, Node.js, Express and MongoDB.
        </p>

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-4">

        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] rounded-xl px-5 py-3 text-white font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#059669]/20"
        >
          View my work
          <span>↗</span>
        </a>

        <a
          href="/kuldeep.resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#1f3a30] bg-[#1f3a30]/50 hover:bg-[#1f3a30] rounded-xl px-5 py-3 text-[#6EE7B7] font-medium transition-all duration-300 hover:-translate-y-1"
        >
          Resume
          <span>↓</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kuldeep-soni-b0b415428/"
          
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#1f3a30] bg-[#1f3a30]/50 hover:bg-[#1f3a30] rounded-xl px-5 py-3 text-[#6EE7B7] font-medium transition-all duration-300 hover:-translate-y-1"
        >
          LinkedIn
          <span>↓</span>
        </a>
        <a
          href="https://github.com/kuldeep21-10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#1f3a30] bg-[#1f3a30]/50 hover:bg-[#1f3a30] rounded-xl px-5 py-3 text-[#6EE7B7] font-medium transition-all duration-300 hover:-translate-y-1"
        >
          GitHub
          <span>↓</span>
        </a>

      </div>

    </div>
  )
}

export default Button


// export default Button