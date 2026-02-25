// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";


function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-[#58473B] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I'm {' '}
            <span className=" text-[#B59E7D]">{personalData.name}</span>
            {` . I'm an  `}
            <span className=" text-[#58473B]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-[#B59E7D] hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[#B59E7D] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>

          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-[#58473B] from-[#B59E7D] p-[1px] rounded-full transition-all duration-300 hover:from-[#58473B] hover:to-[#B59E7D]">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#F1EADA] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#58473B] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#B59E7D] to-[#58473B] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#F1EADA] no-underline transition-all duration-200 ease-out hover:text-[#F1EADA] hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#CEC1A8] border-[#B59E7D] relative rounded-lg border bg-gradient-to-r to-[#F1EADA]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#B59E7D] to-[#58473B]"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#58473B] to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-500"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#AAA396]"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500"></div>

            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-[#B59E7D] px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-[#B59E7D]">const</span>
                <span className="mr-2 text-[#58473B]">coder</span>
                <span className="mr-2 text-[#B59E7D]">=</span>
                <span className="text-[#AAA396]">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#58473B]">name:</span>
                <span className="text-[#AAA396]">{`'`}</span>
                <span className="text-[#B59E7D]">Bhoomika Monthy Rajashekar</span>
                <span className="text-[#AAA396]">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-[#58473B]">skills:</span>
                <span className="text-[#AAA396]">{`['`}</span>
                <span className="text-[#B59E7D]">Python</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">AI-ML- Data sciencer</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">LLM</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">ML</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">NLP</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">AI agents</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">SQL</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">GraphQL</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">Docker</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">Cloud</span>
                <span className="text-[#AAA396]">{"', '"}</span>
                <span className="text-[#B59E7D]">AWS</span>
                <span className="text-[#AAA396]">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#58473B]">Key player:</span>
                <span className="text-[#B59E7D]">true</span>
                <span className="text-[#AAA396]">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#58473B]">quickLearner:</span>
                <span className="text-[#B59E7D]">true</span>
                <span className="text-[#AAA396]">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#58473B]">problemSolver:</span>
                <span className="text-[#B59E7D]">true</span>
                <span className="text-[#AAA396]">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[#58473B]">hireable:</span>
                <span className="text-[#B59E7D]">function</span>
                <span className="text-[#AAA396]">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-[#B59E7D]">return</span>
                <span className="text-[#AAA396]">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-[#AAA396]">this.</span>
                <span className="mr-2 text-[#58473B]">keyPlayer</span>
                <span className="text-[#B59E7D]">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-[#AAA396]">this.</span>
                <span className="mr-2 text-[#58473B]">problemSolver</span>
                <span className="text-[#B59E7D]">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-[#AAA396]">this.</span>
                <span className="mr-2 text-[#58473B]">skills.length</span>
                <span className="mr-2 text-[#B59E7D]">&gt;=</span>
                <span className="text-[#B59E7D]">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-[#AAA396]">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-[#AAA396]">{`};`}</span></div>
              <div><span className="text-[#AAA396]">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
