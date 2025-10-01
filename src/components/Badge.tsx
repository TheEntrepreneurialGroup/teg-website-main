interface BadgeProps {
  image: string;
  text: string;
}

const Badge = ({ image, text }: BadgeProps) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={text} className="h-14 w-full object-contain" />
      {/* {text && <p className="mt-1 m-0">{text}</p>} */}
    </div>
  );
};

export default Badge;
