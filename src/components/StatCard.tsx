import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="xl:pr-6 w-full sm:w-auto">
      <h3 className="text-4xl font-bold text-accent mb-2">{value}</h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

export default StatCard;
