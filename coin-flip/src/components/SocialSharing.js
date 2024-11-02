// src/components/SocialSharing.js

import React from 'react';

const SocialSharing = () => {
  const shareTwitter = () => {
    window.open('https://twitter.com/share', '_blank');
  };

  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php', '_blank');
  };

  return (
    <div>
      <button onClick={shareTwitter}>Share on Twitter</button>
      <button onClick={shareFacebook}>Share on Facebook</button>
    </div>
  );
};

export default SocialSharing;