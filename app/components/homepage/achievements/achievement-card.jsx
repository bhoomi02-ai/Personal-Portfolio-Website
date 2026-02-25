// @flow strict
import Link from 'next/link';
import { BsTrophy } from 'react-icons/bs';
import { FaCertificate, FaCode, FaBookOpen, FaUsers, FaMicrophone } from 'react-icons/fa';
import { GiMedal } from 'react-icons/gi';
import { MdScience, MdWork } from 'react-icons/md';
import { PiChalkboardTeacherBold } from 'react-icons/pi';

const categoryConfig = {
  award:          { icon: BsTrophy,                  label: 'Award',          color: '#B59E7D' },
  hackathon:      { icon: FaCode,                    label: 'Hackathon',      color: '#B59E7D' },
  certification:  { icon: FaCertificate,             label: 'Certification',  color: '#8B7355' },
  publication:    { icon: FaBookOpen,                label: 'Publication',    color: '#8B7355' },
  honor:          { icon: GiMedal,                   label: 'Honor',          color: '#B59E7D' },
  leaderships:    { icon: FaUsers,                   label: 'Leadership',     color: '#58473B' },
  'research paper': { icon: MdScience,               label: 'Research Paper', color: '#8B7355' },
  workshops:      { icon: PiChalkboardTeacherBold,   label: 'Workshop',       color: '#B59E7D' },
  conferences:    { icon: FaMicrophone,              label: 'Conference',     color: '#8B7355' },
};

function AchievementCard({ achievement }) {
  const config = categoryConfig[achievement.category] || categoryConfig.award;
  const Icon = config.icon;

  return (
    <div className="border border-[#B59E7D] hover:border-[#58473B] transition-all duration-300 bg-[#F1EADA] rounded-lg p-5 flex flex-col gap-3 group">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-md bg-[#CEC1A8]">
            <Icon size={16} color={config.color} />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#AAA396]">
            {config.label}
          </span>
        </div>
        <span className="text-xs text-[#AAA396] whitespace-nowrap">{achievement.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-[#58473B] group-hover:text-[#B59E7D] transition-colors duration-300 leading-snug">
        {achievement.title}
      </h3>

      {/* Organization */}
      <p className="text-sm font-medium text-[#B59E7D]">{achievement.organization}</p>

      {/* Description */}
      <p className="text-sm text-[#58473B] line-clamp-3 group-hover:line-clamp-none leading-relaxed transition-all duration-300">
        {achievement.description}
      </p>

      {/* Link */}
      {achievement.link && (
        <Link
          href={achievement.link}
          target="_blank"
          className="text-xs font-medium text-[#B59E7D] hover:text-[#58473B] underline underline-offset-2 transition-colors duration-200 mt-auto"
        >
          View Certificate / Link →
        </Link>
      )}
    </div>
  );
}

export default AchievementCard;
