// @flow strict
import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="from-[#CEC1A8] border-[#B59E7D] relative rounded-lg border bg-gradient-to-r to-[#F1EADA] w-full">

      {/* Top colored dots line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#B59E7D] to-[#58473B]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#58473B] to-transparent"></div>
      </div>

      {/* Top section: header and dots */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#AAA396]"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500"></div>
        </div>

        {/* Centered project name with GitHub link */}
        <div className="flex justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58473B] text-base lg:text-xl hover:underline hover:text-[#B59E7D]"
          >
            {project.name}
          </a>
        </div>
      </div>

      {/* Main content (code-style project info) */}
      <div className="overflow-hidden border-t-[2px] border-[#B59E7D] px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-[#B59E7D]">const</span>
            <span className="mr-2 text-[#58473B]">project</span>
            <span className="mr-2 text-[#B59E7D]">=</span>
            <span className="text-[#AAA396]">{'{'}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#58473B]">name:</span>
            <span className="text-[#AAA396]">{`'`}</span>
            <span className="text-[#B59E7D]">{project.name}</span>
            <span className="text-[#AAA396]">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#58473B]">tools:</span>
            <span className="text-[#AAA396]">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-[#B59E7D]">{tag}</span>
                {i < project.tools.length - 1 && <span className="text-[#AAA396]">{`', '`}</span>}
              </React.Fragment>
            ))}
            <span className="text-[#AAA396]">{"'],"}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#58473B]">myRole:</span>
            <span className="text-[#B59E7D]">{project.role}</span>
            <span className="text-[#AAA396]">,</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#58473B]">Description:</span>
            <span className="text-[#AAA396]">{' ' + project.description}</span>
            <span className="text-[#AAA396]">,</span>
          </div>

          <div>
            <span className="text-[#AAA396]">{'};'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
