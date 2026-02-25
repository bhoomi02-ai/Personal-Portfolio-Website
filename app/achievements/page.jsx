'use client';

import AchievementCard from '@/app/components/homepage/achievements/achievement-card';
import { achievementsData, achievementCategories } from '@/utils/data/achievements';
import { useState } from 'react';

export default function AchievementsPage() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? achievementsData
    : achievementsData.filter((a) => a.category === active);

  return (
    <div className="py-8">
      {/* Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#B59E7D]"></span>
          <span className="bg-[#58473B] w-fit text-[#F1EADA] p-2 px-5 text-2xl rounded-md">
            All Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#B59E7D]"></span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {achievementCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
              active === cat.key
                ? 'bg-[#58473B] text-[#F1EADA]'
                : 'bg-[#CEC1A8] text-[#58473B] hover:bg-[#B59E7D] hover:text-[#F1EADA]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {filtered.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#AAA396] mt-12 text-lg">No achievements in this category yet.</p>
      )}
    </div>
  );
}
