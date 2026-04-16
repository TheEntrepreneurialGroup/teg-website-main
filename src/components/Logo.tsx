import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-transparent">
        <img
          src="/shared/brand/teg-logo-white.svg"
          alt="TEG Logo"
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default Logo;
