interface BadgeProps {
  image: string;
  text: string;
}

const Badge = ({ image, text }: BadgeProps) => {
  return (
    <div className="flex flex-col items-start">
      <img src={image} alt={text} className="h-10 w-full object-contain" />
    </div>
  );
};

export default Badge;
