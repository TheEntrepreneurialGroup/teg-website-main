import React from "react";
import { Building, TrendingUp } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import CallToAction from "../components/CallToAction";
import HeroSectionTwoButtons from "../components/HeroSectionTwoButtons";
import ImageCard from "../components/ImageCard";

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSectionTwoButtons
        title="
        Founded by Germany’s Top Corporations and Visionary Students, to
        Forge Tomorrow’s Decision-Makers. Since 1986.
      "
        subtitle="The Entrepreneurial Group (TEG) forms the next leaders of Germany’s economy. We develop exceptional students into entrepreneurs: founders, executives, business leaders."
        buttonText1="TEG for Companies"
        buttonLink1="/for-companies"
        buttonText2="TEG for Students"
        buttonLink2="/for-students"
        backgroundImage="/meeting.png"
      />

      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <SectionTitle
            title="Our Alumni: 39 Years of Impact Through Excellence"
            centered
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            <StatCard
              value="300+ Alumni"
              label="Our Alumni build the backbone of Germany's economy. No matter if in executive positions, middle management, or team-level leadership."
              delay={0.1}
            />
            <StatCard value="41" label="Corporate Executives" delay={0.2} />
            <StatCard value="40" label="SMB Executives" delay={0.3} />
            <StatCard value="15" label="Business Founders" delay={0.4} />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-custom">
          <SectionTitle
            title="Our Legacy"
            subtitle="Founded by 11 of Germany's Top Corporations and Four Exceptional Students. Proven Across Four Decades."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ImageCard
              imageUrl="/corporates.png"
              altText="Corporate Partners"
              caption="11 Companies that co-founded TEG"
            />
            <ImageCard
              imageUrl="/founders.png"
              altText="Corporate Partners"
              caption="The 4 founders who started TEG in late 1986."
            />
            <ImageCard
              imageUrl="/kuratorium.jpg"
              altText="Corporate Partners"
              caption={'Newspaper article of Donaukurier "11 Companies founded new student initiative" shortly after the completion of the legal registration' + " of TEGs 'Board of Trustees' in January 1988."}
            />
            <FeatureCard
              title="Proven Track Record"
              description="With 39 years of success, our alumni consistently rise to executive positions in leading companies across Germany and beyond – or founded thriving companies of their own."
              icon={<TrendingUp size={40} />}
              delay={0.3}
            />
            <FeatureCard
              title="Corporate Leaning Entrepreneurs"
              description="Every initiative has their own narrative: we romanticize large, properly organized companies with impressive histories the same way we are proud of our own legacy and all the great things TEGs previous decision-makers achieved. Our executive-potentials prepare to take over huge responsibility and continue greatness others laid down before, our founders build businesses solving problems for corporations in our Ecosystem."
              icon={<Building size={40} />}
              delay={0.1}
            />
           
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <CallToAction
            title="Partner with TEG as Company"
            description="Collaborate with us to shape the next generation of leaders. Discover how your company can benefit from being integrated into the ecosystem of TEG and get access to a 39 years running, proven pipeline of exceptional talent."
            buttonText="TEG for Companies"
            buttonLink="/for-companies"
            isSection = {false}
          />
          <CallToAction
            title="Apply to join TEG as a Student"
            description="Join a community of capped to 50 high-potential students preparing for top-level executive leadership through real responsibility, hands-on experience and mentorship. 39 years of alumni success prove what you can achieve."
            buttonText="TEG for Students"
            buttonLink="/for-students"
            isSection = {false}
          />
        </div>
      </section>
    </div>
  );
};
