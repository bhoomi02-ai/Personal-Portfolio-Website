// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { achievementsData } from '@/utils/data/achievements';
import AchievementCard from './achievement-card';

function Achievements() {
  const preview = achievementsData.slice(0, 3);

  return (
    <div id='achievements' className="relative z-50 border-t my-12 lg:my-24 border-[#B59E7D]">
      <div className="w-[100px] h-[100px] bg-[#CEC1A8] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-40"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B59E7D] to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#B59E7D]"></span>
          <span className="bg-[#58473B] w-fit text-[#F1EADA] p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#B59E7D]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {preview.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#B59E7D] to-[#58473B] px-6 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#F1EADA] no-underline transition-all duration-200 ease-out hover:text-[#F1EADA] hover:no-underline md:font-semibold"
          role="button"
          href="/achievements"
        >
          <span>View All</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Achievements;
