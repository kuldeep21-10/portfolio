
import React from 'react'

const Skills = () => {
  const skills = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'SQL'
  ]

  return (
    <section className="px-5 py-8 sm:px-8">

      {/* Heading */}
      <div className="mb-5">
        <p className="text-[#6EE7B7] text-sm font-medium uppercase tracking-widest mb-2">
          What I work with
        </p>

        <h2 className="text-white text-2xl sm:text-3xl font-bold">
          Technical Skills<span className="text-[#6EE7B7]">.</span>
        </h2>

        <p className="text-[#94a3b8] text-sm sm:text-base mt-2">
          Technologies I use to build modern web applications.
        </p>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-2 rounded-xl border border-[#1f3a30] bg-[#1f3a30]/60 px-4 py-2.5 text-sm sm:text-base font-medium text-[#94a3b8] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#1f3a30] hover:text-[#6EE7B7] hover:-translate-y-1 cursor-default"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]"></span>
            {skill}
          </span>
        ))}

      </div>

    </section>
  )
}

export default Skills
