
import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-5 py-4 sm:px-8 border-b border-[#1f3a30]/70">

      {/* Logo + Name */}
      <div className="flex items-center gap-3">

        <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-[#1f3a30] border border-[#6EE7B7]/20 shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105">
          <span className="text-[#6EE7B7] text-xl sm:text-2xl font-bold tracking-tight">
            KS
          </span>
        </div>

        <div className="flex flex-col">
          <h1 className="text-white text-base sm:text-xl font-semibold tracking-tight">
            Kuldeep Soni
          </h1>

          <p className="text-[#94a3b8] text-xs sm:text-sm">
            Full Stack Developer
          </p>
        </div>

      </div>

      {/* Availability Badge */}
      <div className="flex items-center gap-2 rounded-full border border-[#1f3a30] bg-[#1f3a30]/40 px-3 py-2 sm:px-4">
        <span className="h-2 w-2 rounded-full bg-[#6EE7B7]"></span>

        <span className="text-[#6EE7B7] text-xs sm:text-sm font-medium">
          Open to work
        </span>
      </div>

    </header>
  )
}

export default Header
