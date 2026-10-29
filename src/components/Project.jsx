import React from "react";
import Slider from "./Slider";
import { useState } from "react";

const Project = () => {
  const fintrackImages = [
    "/Fintrack_jpg/home.webp",
    "/Fintrack_jpg/login.jpg",
    "/Fintrack_jpg/dashboard.jpg",
    "/Fintrack_jpg/Ai_chat.jpg",
    "/Fintrack_jpg/forget.jpg",
  ];

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState({
  title: "Coming Soon!",
  text: "Live demo is not available yet.",
});

  // const liveDemoLink = "";
  const projectLinks = {
    fintrack: "",
    complaintPortal: "",
  };

  const Gitlinks = {
    fintrack: "",
    complaintPortal: "",
  };

  const handleLiveDemo = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      
    setToastMsg({
      title: "Coming Soon!",
      text: "Live demo is not available yet.",
    });
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };
  const handleGitDemo = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
    setToastMsg({
      title: "Coming Soon!",
      text: "Git Link is not available yet.",
    });
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };
  return (
    <section id="projects" className="px-5 py-8 sm:px-8">
      {/* Section heading */}
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[#6EE7B7] mb-2">
          My work
        </p>

        <h2 className="text-3xl font-bold text-white">
          Featured Projects<span className="text-[#6EE7B7]">.</span>
        </h2>

        <p className="text-[#94a3b8] mt-2">Some things I've built with code.</p>
      </div>
      <div className="flex  flex-col gap-2 ">
        {/* Project card */}
        <div className="group overflow-hidden rounded-2xl border border-[#1f3a30] bg-[#0b1210] transition-all duration-300 hover:border-[#6EE7B7]/50 hover:-translate-y-1">
      
         
          {/* Screenshot area */}
          {/* <div className="overflow-hidden bg-[#12231c]">
            <img
    src="/Fintrack_jpg/Home.png"
    alt="Fintrack home screen"
    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"

  />
              
          </div> */}
          <Slider images={fintrackImages} />

          

          {/* Project details */}
          <div className="p-5 sm:p-6">
            <h3 className="text-xl font-bold text-white">Fintrack</h3>

            <p className="mt-2 text-sm leading-6 text-[#94a3b8]">
              An AI-powered expense tracker with payment integration to help
              users manage and track their expenses.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "Gemini AI",
                "Razorpay",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#1f3a30] bg-[#1f3a30]/50 px-3 py-1.5 text-xs font-medium text-[#6EE7B7]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => handleLiveDemo(projectLinks.fintrack)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#059669] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:-translate-y-0.5"
              >
                Live Demo
              </button>
              {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#1f3a30] px-4 py-2.5 text-sm font-semibold text-[#6EE7B7] transition-all duration-300 hover:bg-[#1f3a30]"
            >
              GitHub 
            </a> */}

              <button
                onClick={() => handleGitDemo(Gitlinks.fintrack)}
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f3a30] px-4 py-2.5 text-sm font-semibold text-[#6EE7B7] transition-all duration-300 hover:bg-[#1f3a30]"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Project card */}
        <div className="group overflow-hidden rounded-2xl border border-[#1f3a30] bg-[#0b1210] transition-all duration-300 hover:border-[#6EE7B7]/50 hover:-translate-y-1">
          {/* Screenshot area */}
          <div className="relative flex h-48 sm:h-64 items-center justify-center overflow-hidden bg-[#12231c]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f3a30] via-[#12231c] to-[#0b1210]"></div>

            <div className="relative text-center px-4">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#6EE7B7]/30 bg-[#1f3a30] text-2xl text-[#6EE7B7]">
                 📋
              </div>

              <h3 className="text-xl font-semibold text-white">
                Complaint Management Portal
              </h3>

              <p className="mt-1 text-sm text-[#94a3b8]"></p>
            </div>

            <span className="absolute right-4 top-4 rounded-full border border-[#6EE7B7]/20 bg-[#0b1210]/70 px-3 py-1 text-xs text-[#6EE7B7]">
              Full Stack
            </span>
          </div>

          {/* Project details */}
          <div className="p-5 sm:p-6">
            <h3 className="text-xl font-bold text-white">Complaint Management Portal (Coming Soon)</h3>

            <p className="mt-2 text-sm leading-6 text-[#94a3b8]">
               A web portal where users can register complaints, upload images as proof,
    and track their status, while admins review and resolve them.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "React.js",
                "cloudinary",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#1f3a30] bg-[#1f3a30]/50 px-3 py-1.5 text-xs font-medium text-[#6EE7B7]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => handleLiveDemo(projectLinks.complaintPortal)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#059669] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:-translate-y-0.5"
              >
                Live Demo
              </button>

              {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#1f3a30] px-4 py-2.5 text-sm font-semibold text-[#6EE7B7] transition-all duration-300 hover:bg-[#1f3a30]"
            >
              GitHub 
            </a> */}

              <button
                onClick={() => handleGitDemo(Gitlinks.complaintPortal)}
                className="inline-flex items-center gap-2 rounded-xl border border-[#1f3a30] px-4 py-2.5 text-sm font-semibold text-[#6EE7B7] transition-all duration-300 hover:bg-[#1f3a30]"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-auto z-50 flex items-center gap-3 rounded-2xl border border-[#059669]/50 bg-[#0B1210]/95 px-4 py-4 text-white shadow-2xl shadow-black/30 backdrop-blur-md transition-all duration-500 ease-out ${
          showToast
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#059669]/15 text-xl">
          🚀
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#6EE7B7]">{toastMsg.title}</p>
          <p className="mt-1 text-xs leading-5 text-[#94a3b8]">
            {toastMsg.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
