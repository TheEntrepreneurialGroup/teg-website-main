import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-transparent p-2 rounded-md">
        <img src="/teg-logo.png" alt="TEG Logo" className="h-16 w-auto" />
      </div>
    </div>
  );
};

export default Logo;