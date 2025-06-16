'use client';

import React, { useEffect, useState } from 'react';

const categories = ['Developers', 'Designers', 'Artists', 'Managers'];

const OnClickTeamMenu = () => {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const allMembers = document.querySelectorAll('.team-member');
    allMembers.forEach((el) => {
      const group = el.getAttribute('data-group');
      if (!selected || group === selected) {
        (el as HTMLElement).style.display = 'block';
      } else {
        (el as HTMLElement).style.display = 'none';
      }
    });
  }, [selected]);

  return (
    <div className="p-6 text-white font-montserrat">
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              selected === cat ? 'bg-yellow-400 text-black' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OnClickTeamMenu;
