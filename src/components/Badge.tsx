import React from 'react';

interface BadgeProps {
  image: string;
  text: string;
}

const Badge = ({ image, text }: BadgeProps) => {
  return (
    <div className='flex items-center gap-4' >
      <img src={image} alt={text} className='h-16 w-full object-contain' />
			{text && (
				<p style={{ margin: 0 }}>{text}</p>
			)}
    </div>
  );
};

export default Badge;
