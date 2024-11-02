// src/components/GameSettings.js

import React, { useState } from 'react';

const GameSettings = () => {
  const [flipCount, setFlipCount] = useState(1);
  const [design, setDesign] = useState('classic');

  const handleFlipCountChange = (event) => {
    setFlipCount(parseInt(event.target.value));
  };

  const handleDesignChange = (event) => {
    setDesign(event.target.value);
  };

  return (
    <div>
      <select value={flipCount} onChange={handleFlipCountChange}>
        {[1, 5, 10].map((count) => (
          <option key={count} value={count}>
            Flip {count} coins
          </option>
        ))}
      </select>
      <select value={design} onChange={handleDesignChange}>
        <option value="classic">Classic</option>
        <option value="modern">Modern</option>
      </select>
    </div>
  );
};

export default GameSettings;