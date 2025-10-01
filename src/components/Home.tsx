import React from "react";
import { useIntl } from "react-intl";
import { Building, TrendingUp } from "lucide-react";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import CallToAction from "./CallToAction";
import HeroSectionTwoButtons from "./HeroSectionTwoButtons";
import ImageCard from "./ImageCard";
import Badge from './Badge';
import TextComponent from "./TextComponent";
import Testimonials from "./Testimonials";
import LeftCard from "./LeftCard";



export const Home: React.FC = () => {
	const intl = useIntl();

	return (
		<div>
			<HeroSectionTwoButtons
				title={intl.formatMessage({ id: "home.hero.title" })}
				subtitle={intl.formatMessage({ id: "home.hero.subtitle" })}
				buttonText1={intl.formatMessage({ id: "home.hero.buttonText1" })}
				buttonLink1={intl.formatMessage({ id: "home.hero.buttonLink1" })}
				buttonText2={intl.formatMessage({ id: "home.hero.buttonText2" })}
				buttonLink2={intl.formatMessage({ id: "home.hero.buttonLink2" })}
				backgroundImage="/TEG_Hero_Home.jpg"
			/>

			<section className="py-20 bg-secondary-light">
				<div className="container-custom">
					<SectionTitle
						title={intl.formatMessage({ id: "home.alumni.title" })}
						centered
					/>

					<div className="grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
						<StatCard
							value={intl.formatMessage({ id: "home.alumni.stat1.value" })}
							label={intl.formatMessage({ id: "home.alumni.stat1.label" })}
							delay={0.1}
						/>
						<StatCard
							value={intl.formatMessage({ id: "home.alumni.stat2.value" })}
							label={intl.formatMessage({ id: "home.alumni.stat2.label" })}
							delay={0.2}
						/>
						<StatCard
							value={intl.formatMessage({ id: "home.alumni.stat3.value" })}
							label={intl.formatMessage({ id: "home.alumni.stat3.label" })}
							delay={0.3}
						/>
						<StatCard
							value={intl.formatMessage({ id: "home.alumni.stat4.value" })}
							label={intl.formatMessage({ id: "home.alumni.stat4.label" })}
							delay={0.4}
						/>
					</div>
				</div>
			</section>

			<section id="about" className="section">
				<div className="container-custom">
					<SectionTitle
						title={intl.formatMessage({ id: "home.legacy.title" })}
						subtitle={intl.formatMessage({ id: "home.legacy.subtitle" })}
					/>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						<ImageCard
							imageUrl="/corporates.png"
							altText="Corporate Partners"
							caption={intl.formatMessage({ id: "home.legacy.image1.caption" })}
						/>
						<ImageCard
							imageUrl="/founders.png"
							altText="Corporate Partners"
							caption={intl.formatMessage({ id: "home.legacy.image2.caption" })}
						/>
						<ImageCard
							imageUrl="/kuratorium.jpg"
							altText="Corporate Partners"
							caption={intl.formatMessage({ id: "home.legacy.image3.caption" })}
						/>
						<FeatureCard
							title={intl.formatMessage({ id: "home.legacy.feature1.title" })}
							description={intl.formatMessage({
								id: "home.legacy.feature1.description",
							})}
							icon={<TrendingUp size={40} />}
							delay={0.3}
						/>
						<FeatureCard
							title={intl.formatMessage({ id: "home.legacy.feature2.title" })}
							description={intl.formatMessage({
								id: "home.legacy.feature2.description",
							})}
							icon={<Building size={40} />}
							delay={0.1}
						/>
					</div>
				</div>
			</section>




			<section className="py-20 bg-gray-100">
				<div className="container-custom">
					{/* Centered Title */}
					<div className="text-center">
						<SectionTitle
							title={intl.formatMessage({ id: "home.partners.title" })}
						/>
					</div>

					{/* Logos */}
					<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
						<Badge image="/components-images/bmw-image.webp" text="" />
						<Badge image="/components-images/bcg.png" text="" />
						<Badge image="/components-images/siemens.svg" text="" />
						<Badge image="/components-images/HypoVereinsbank.svg" text="" />
						<Badge image="/components-images/Roland_Berger_logo.svg" text="" />
						<Badge image="/components-images/ruhrgas-logo.png" text="" />
					</div>

					{/* Text under the logos */}
					<p className="mt-6 text-center text-black">
						{intl.formatMessage({
							id: "home.partners.description"
						})}
					</p>
				</div>
			</section>



			<section className="py-20 bg-gray-100">
				<div className="container-custom">
					{/* Centered Title */}
					<div className="text-center">
						<SectionTitle
							title={intl.formatMessage({ id: "home.alumnis.title" })}
						/>
					</div>

					{/* Logos 2 */}
					<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
						<Badge image="/components-images/airbus.svg" text="" />
						<Badge image="/components-images/maiborn-logo.png" text="" />
						<Badge image="/components-images/tuv-logo.png" text="" />
						<Badge image="/components-images/Deloitte.svg" text="" />
						<Badge image="/components-images/ey-logo.png" text="" />
						<Badge image="/components-images/Vattenfall.svg" text="" />
					</div>

					{/* Text under the logos 2 */}
					<p className="mt-6 text-black text-center">
						{intl.formatMessage({ id: "home.alumnis.description" })}
					</p>
				</div>
			</section>

			<section className="md:container-custom gap-y-8 flex flex-col section">
				<TextComponent
					title="Coach-Zertifikat:"
					intro={
						<p>
							Die Königsdisziplin: andere zu Höchstleistungen befähigen. <br />
							Du lernst, Wissen strukturiert weiterzugeben, neue Mitglieder
							einzuarbeiten und sie zu eigenen Ergebnissen zu führen. Dabei
							entwickelst du die Fähigkeit, Feedback klar zu geben, zu motivieren
							und Verantwortung für die Entwicklung anderer zu übernehmen.
						</p>
					}
					highlight="Im Zertifikat enthalten sind:"
					items={[
						"Dokumentation des durchgeführten Coachings,",
						"konkrete Ergebnisse deines Coachees,",
						"Nachweis deiner Fähigkeit, andere erfolgreich anzuleiten.",
					]}
				/>

				<TextComponent
					title="Professional-Zertifikat:"
					intro={
						<p>
							Du lernst innerhalb kürzester Zeit (2 Semester) eine typische Rolle
							eines Unternehmens richtig gut zu beherrschen. Ganz gleich ob: Sales,
							Grafik Design, Accounting, Legal oder Software Engineering , wir haben
							für jeden Studienhintergrund und jedes Interesse etwas im Angebot.
						</p>
					}
					highlight="Im Zertifikat enthalten sind:"
					items={[
						"Erworbene Fähigkeiten , Tätigkeitsbericht , messbare Ergebnisse deiner Arbeit.",
					]}
				/>
			</section>

			<section className="section">
				<div className="md:container-custom">
					<Testimonials />
				</div>
			</section>



			{/* TODO: ADD IMAGES */}

			<section className="space-y-10 container-custom section">
				{/* Card 1 */}
				<LeftCard
					image="/components-images/team-4.jpeg"
					alt="First image"
					title="Im TEG-Office triffst du auf Gleichgesinnte, die mehr wollen und bereit sind, dafür zu liefern."
					subtitle="Wir freuen uns dich kennenzulernen."
					text="In einer auf 50 Mitglieder begrenzten Community unterstützen wir uns gegenseitig 
              mit Skills, Verantwortung und echtem Zusammenhalt."
				/>

				{/* Card 2 */}
				<LeftCard
					image="/components-images/team-2.jpeg"
					alt="Second image"
					title="TEG ist nicht für jeden: 10+ Stunden Arbeitszeit pro Woche, konstant über 3 Semester"
					text="Wenn Du diese Zeit investierst, wird es Dein Leben verändern."
				/>

				{/* Card 3 */}
				<LeftCard
					image="/components-images/team-3.jpeg"
					alt="Third image"
					title="Unsere Philosophie: Learning by Doing"
					text="Übernim die Leitung eines Projekts innerhalb von TEG und entwickle Leadership-Skills: Menschen überzeugen, Entscheidungen treffen und Ergebnisse erzielen."
				/>

				{/* Card 4 */}
				<LeftCard
					image="/components-images/team-4.jpeg"
					alt="Photo of the team networking"
					title="Unternehmerisch und wirtschaftlich Denken lernen in der Praxis"
					text='Unser Motto: "Learn to run a business, by running TEG like a business".' />
			</section>

			<section className="py-20">
				<div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
					<CallToAction
						title={intl.formatMessage({ id: "home.callToAction1.title" })}
						description={intl.formatMessage({
							id: "home.callToAction1.description",
						})}
						buttonText={intl.formatMessage({
							id: "home.callToAction1.buttonText",
						})}
						buttonLink={intl.formatMessage({
							id: "home.callToAction1.buttonLink",
						})}
						isSection={false}
					/>
					<CallToAction
						title={intl.formatMessage({ id: "home.callToAction2.title" })}
						description={intl.formatMessage({
							id: "home.callToAction2.description",
						})}
						buttonText={intl.formatMessage({
							id: "home.callToAction2.buttonText",
						})}
						buttonLink={intl.formatMessage({
							id: "home.callToAction2.buttonLink",
						})}
						isSection={false}
					/>
				</div>
			</section>
		</div>
	);
};

















// import React from "react";
// import { useIntl } from "react-intl";
// import { Building, TrendingUp } from "lucide-react";
// import SectionTitle from "../components/SectionTitle";
// import FeatureCard from "../components/FeatureCard";
// import StatCard from "../components/StatCard";
// import CallToAction from "../components/CallToAction";
// import HeroSectionTwoButtons from "../components/HeroSectionTwoButtons";
// import ImageCard from "../components/ImageCard";
// import Badge from '../components/Badge.tsx';


// export const Home: React.FC = () => {
//   const intl = useIntl();

//   return (
//     <div>
//       <HeroSectionTwoButtons
//         title={intl.formatMessage({ id: "home.hero.title" })}
//         subtitle={intl.formatMessage({ id: "home.hero.subtitle" })}
//         buttonText1={intl.formatMessage({ id: "home.hero.buttonText1" })}
//         buttonLink1={intl.formatMessage({ id: "home.hero.buttonLink1" })}
//         buttonText2={intl.formatMessage({ id: "home.hero.buttonText2" })}
//         buttonLink2={intl.formatMessage({ id: "home.hero.buttonLink2" })}
//         backgroundImage="/TEG_Hero_Home.jpg"
//       />

//       <section className="py-20 bg-secondary-light">
//         <div className="container-custom">
//           <SectionTitle
//             title={intl.formatMessage({ id: "home.alumni.title" })}
//             centered
//           />

//           <div className="grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
//             <StatCard
//               value={intl.formatMessage({ id: "home.alumni.stat1.value" })}
//               label={intl.formatMessage({ id: "home.alumni.stat1.label" })}
//               delay={0.1}
//             />
//             <StatCard
//               value={intl.formatMessage({ id: "home.alumni.stat2.value" })}
//               label={intl.formatMessage({ id: "home.alumni.stat2.label" })}
//               delay={0.2}
//             />
//             <StatCard
//               value={intl.formatMessage({ id: "home.alumni.stat3.value" })}
//               label={intl.formatMessage({ id: "home.alumni.stat3.label" })}
//               delay={0.3}
//             />
//             <StatCard
//               value={intl.formatMessage({ id: "home.alumni.stat4.value" })}
//               label={intl.formatMessage({ id: "home.alumni.stat4.label" })}
//               delay={0.4}
//             />
//           </div>
//         </div>
//       </section>

//       <section id="about" className="section">
//         <div className="container-custom">
//           <SectionTitle
//             title={intl.formatMessage({ id: "home.legacy.title" })}
//             subtitle={intl.formatMessage({ id: "home.legacy.subtitle" })}
//           />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             <ImageCard
//               imageUrl="/corporates.png"
//               altText="Corporate Partners"
//               caption={intl.formatMessage({ id: "home.legacy.image1.caption" })}
//             />
//             <ImageCard
//               imageUrl="/founders.png"
//               altText="Corporate Partners"
//               caption={intl.formatMessage({ id: "home.legacy.image2.caption" })}
//             />
//             <ImageCard
//               imageUrl="/kuratorium.jpg"
//               altText="Corporate Partners"
//               caption={intl.formatMessage({ id: "home.legacy.image3.caption" })}
//             />
//             <FeatureCard
//               title={intl.formatMessage({ id: "home.legacy.feature1.title" })}
//               description={intl.formatMessage({
//                 id: "home.legacy.feature1.description",
//               })}
//               icon={<TrendingUp size={40} />}
//               delay={0.3}
//             />
//             <FeatureCard
//               title={intl.formatMessage({ id: "home.legacy.feature2.title" })}
//               description={intl.formatMessage({
//                 id: "home.legacy.feature2.description",
//               })}
//               icon={<Building size={40} />}
//               delay={0.1}
//             />
//           </div>
//         </div>
//       </section>



// 			<section className="py-20 bg-gray-100">
//   <div className="container-custom">
//     <SectionTitle
//       title={intl.formatMessage({ id: "home.partners.title" })}
//       centered
//     />
//     <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
//       <Badge image="/components-images/bmw-image.svg" text="BMW" />
//       <Badge image="/components-images/bcg-logo.png" text="BCG" />
//       <Badge image="/components-images/siemens-logo.jpg" text="SIEMENS" />
//       <Badge image="/components-images/bank-logo.png" text="HypoVereinsbank" />
//       <Badge image="/components-images/rohland-logo.jpg" text="Roland Berger" />
//       <Badge image="/components-images/ruhrgas-logo" text="RuhrGas" />
//     </div>
//     <p className="mt-6 text-center text-gray-600">
//       {intl.formatMessage({ id: "home.partners.description" })}
//     </p>
//   </div>
// </section>

//       <section className="py-20">
//         <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
//           <CallToAction
//             title={intl.formatMessage({ id: "home.callToAction1.title" })}
//             description={intl.formatMessage({
//               id: "home.callToAction1.description",
//             })}
//             buttonText={intl.formatMessage({
//               id: "home.callToAction1.buttonText",
//             })}
//             buttonLink={intl.formatMessage({
//               id: "home.callToAction1.buttonLink",
//             })}
//             isSection={false}
//           />
//           <CallToAction
//             title={intl.formatMessage({ id: "home.callToAction2.title" })}
//             description={intl.formatMessage({
//               id: "home.callToAction2.description",
//             })}
//             buttonText={intl.formatMessage({
//               id: "home.callToAction2.buttonText",
//             })}
//             buttonLink={intl.formatMessage({
//               id: "home.callToAction2.buttonLink",
//             })}
//             isSection={false}
//           />
//         </div>
//       </section>
//     </div>
//   );
// };
