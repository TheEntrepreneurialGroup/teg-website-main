type LeftCardProps = {
	image: string;
	alt: string;
	title: string;
	subtitle?: string;
	text: string;
	variant?: "left" | "right";
};

export default function LeftCard({
	image,
	alt,
	title,
	subtitle,
	text,
	variant = "left",
}: LeftCardProps) {
	return (
		<div
			className={`flex flex-col md:flex-row ${variant === "right" ? "md:flex-row-reverse" : ""
				} border border-purple-500 rounded-lg overflow-hidden bg-white`}
		>
			{/* Image */}
			<div className="md:w-1/2">
				<img src={image} alt={alt} className="w-full max-h-48 md:max-h-full md:aspect-video object-cover" />
			</div>

			{/* Text */}
			<div className="md:w-1/2 md:p-6 p-3 flex flex-col justify-center">
				<h2 className="text-lg font-bold text-black mb-2">{title}</h2>
				{subtitle && <p className="text-gray-700 mt-0 mb-2">{subtitle}</p>}
				<p className="text-gray-700 m-0">{text}</p>
			</div>
		</div>
	);
}
