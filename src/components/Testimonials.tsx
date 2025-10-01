import SectionTitle from "./SectionTitle";

type Testimonial = {
	quote: string;
	author: string;
	image: string;
};

// images to be added for testimonials
export default function Testimonials() {
	const testimonials: Testimonial[] = [
		{
			quote:
				"Aus Druck entstehen Diamanten. Nirgendwo stimmt das mehr, als bei TEG",
			author: "Ahmed Kaddour",
			image: "components-images/ahmed.jpeg",
		},
		{
			quote:
				"Ich war erstaunt, wie viel Verantwortung man bei TEG direkt zu Beginn bekommt und bin hier schon mindestens 5 Mal über mich hinaus gewachsen",
			author: "Luis Waller",
			image: "components-images/luis.jpeg",
		},
		{
			quote:
				"Ich laufe regelmäßig Marathons, weil ich Herausforderungen und Höchstleistungen liebe. Genau deshalb bin ich auch bei TEG",
			author: "Yesiienia Liaskina",
			image: "./components-images/yesiienia.jpeg",
		},
	];

	return (
		<section className="w-full flex flex-col rounded-xl shadow-sm p-8 text-center gap-12">
			<h2
				className="text-xl font-bold"
			>
				Stimmen von aktuell aktiven Mitgliedern
			</h2>

			<div className="w-full text-left">
				{testimonials.map((t, idx) => {
					// 0-based: idx 0 and 2 reversed (image right), idx 1 normal (image left)
					const reversed = idx % 2 === 0; // true for 0, false for 1, true for 2

					return (
						<div
							key={idx}
							className={[
								"flex items-center mb-3 gap-x-4",
								reversed ? "flex-row-reverse" : "flex-row",
							].join(" ")}
						>
							{/* Image */}
							<img
								src={t.image}
								alt={t.author}
								className="h-24 w-24 shrink-0 md:h-28 md:w-28 rounded-full object-cover"
							/>

							{/* Text */}
							<div className="max-w-2xl ">
								<p className="h-fit italic text-gray-800 leading-relaxed">
									“{t.quote}”
								</p>
								<p className="not-italic text-gray-900">~ {t.author}</p>
							</div>
						</div>
					);
				})}
			</div>

			{/* Pfeile + Claim */}
			<div className="my-10 text-center">
				<p className="text-2xl leading-none">↓</p>
				<p className="italic my-4">
					Shape the economy. Shape your future. <br /> Shape your mind
				</p>
				<p className="text-2xl leading-none">↓</p>
			</div>

			{/* Button */}
			<div className="text-center">
				<button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-md border-b-2 border-white">
					Jetzt bewerben
				</button>

			</div>
		</section>
	);
}
