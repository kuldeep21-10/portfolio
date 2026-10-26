
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-center gap-2 px-4 py-8">

      <h2 className="text-2xl sm:text-[25px] text-white font-semibold">
        Let's work together
      </h2>

      <h3 className="text-sm sm:text-base text-[#94a3b8] max-w-full">
        Open to developer roles and freelance work
      </h3>

      <a
        href="mailto:Kuldeep21025@gmail.com"
        className="bg-[#059669] text-white text-sm sm:text-base px-4 py-2 rounded-lg mt-2 transition-all duration-300 hover:bg-[#047857] hover:-translate-y-1 break-all"
      >
        Kuldeep21025@gmail.com
      </a>

    </footer>
  )
}

export default Footer

