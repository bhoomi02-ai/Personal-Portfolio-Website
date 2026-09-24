import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const { name, description, tags, code, demo, image, features } = project;

  return (
    <div
      className='group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-visible px-3 md:px-8 py-[1.4rem] bg-[linear-gradient(90deg,#CEC1A8_0%,#F1EADA_100%)] shadow-2xl rounded-lg border border-[#B59E7D]'
    >
      <div className="absolute left-0 top-0 flex justify-center opacity-40">
        {/* SVG background lines */}
        <svg width="1170" height="403" viewBox="0 0 1170 403" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* (SVG paths remain unchanged) */}
        </svg>
      </div>

      {/* Project title - Centered */}
      <div className='flex flex-col items-center justify-between w-full h-full'>
        <h2 className='text-[#58473B] not-italic font-semibold text-[1.525rem] leading-[110%] text-center capitalize max-w-full px-4 mb-2'>
          {name}
        </h2>

        {/* Project image */}
        <div className="p-6">
          <Image
            src={image ? image?.src : placeholder}
            alt={name}
            width={1080}
            height={720}
            className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg group-hover:opacity-0"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between w-full">
          <Link
            href={demo}
            target='_blank'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#58473B] text-[#58473B] transition-all duration-300 hover:bg-[#CEC1A8] hover:text-[#B59E7D] hover:border-[#B59E7D] hover:scale-110 decoration-clone cursor-pointer no-underline delay-[0.3s]">
            <FaPlay />
          </Link>

          <Link
            href={code}
            target='_blank'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#58473B] text-[#58473B] transition-all duration-300 hover:bg-[#CEC1A8] hover:text-[#B59E7D] hover:border-[#B59E7D] hover:scale-110 cursor-pointer no-underline delay-[0.3s] group-hover:translate-x-[-140px]">
            <FaCode />
          </Link>
        </div>
      </div>

      {/* Description slide-out on hover */}
      <p className="absolute z-10 w-[90%] md:w-[85%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-[0.9s] p-6 leading-[110%] rounded-[0_20px_20px_0] left-0 top-0 bg-[#CEC1A8] text-[#58473B] translate-y-[25%] md:translate-y-[50%] group-hover:translate-x-[-2%] text-xs md:text-sm">
        {description}
      </p>

      {/* Tags list */}
      <div className='group-hover:translate-x-0 absolute w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-[0.5s] delay-[0.3s] p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-4 bg-[#CEC1A8] text-[#58473B]'>
        {tags.map((tag, id) => (
          <span className='font-medium break-words text-xs' key={id}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;
