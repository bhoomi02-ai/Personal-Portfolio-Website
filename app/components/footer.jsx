// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#CEC1A8] border-[#B59E7D] text-[#58473B]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#B59E7D] to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/bhoomika-rajshekar/" className="text-[#58473B] font-semibold hover:text-[#B59E7D]"> Bhoomika Monthy Rajashekar </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/bhoomi02-ai"
              className="flex items-center gap-2 uppercase hover:text-[#B59E7D]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/bhoomi02-ai/Personal-Portfolio-Website/fork"
              className="flex items-center gap-2 uppercase hover:text-[#B59E7D]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
