import React from "react";
import { DivideIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  const combinedClassName = `card p-6 bg-primary-light/5 ${className || ""}`;
  return (
    <div className={combinedClassName}>
      <div className="text-primary-light mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
