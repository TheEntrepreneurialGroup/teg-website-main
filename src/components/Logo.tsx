import React from 'react';
import { Briefcase } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-primary p-2 rounded-md">
        <Briefcase className="text-white" size={20} />
      </div>
    </div>
  );
};

export default Logo;