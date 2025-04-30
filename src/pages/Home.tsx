import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, Building, Briefcase, Award, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import StatCard from '../components/StatCard';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="Forging Tomorrow's Executives Since 1984"
        subtitle="The Entrepreneurial Group (TEG) is forming the next leaders of Germany's economy. Founders and Executives. Developing ambitious students to established entrepreneurs since 1986."
        buttonText="Discover Our Mission"
        buttonLink="#about"
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      
      <section id="about" className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Founded by Corporate Leaders" 
            subtitle="The Entrepreneurial Group was established in 1984 by 11 prominent companies with a clear mission: to identify and nurture future corporate executives while they're still in university."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              title="Corporate DNA"
              description="Built with corporate principles at our core, we embody the professional standards and expectations of global industry leaders."
              icon={<Building size={40} />}
              delay={0.1}
            />
            <FeatureCard 
              title="Executive Preparation"
              description="Our members develop real leadership skills through hands-on experience, mentorship, and a rigorous internal promotion system."
              icon={<Briefcase size={40} />}
              delay={0.2}
            />
            <FeatureCard 
              title="Proven Track Record"
              description="With 40 years of success, our alumni consistently rise to executive positions in leading companies across Germany and beyond."
              icon={<TrendingUp size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <SectionTitle 
            title="Impact Through Excellence" 
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="40+" label="Years of Excellence" delay={0.1} />
            <StatCard value="2500+" label="Alumni Leaders" delay={0.2} />
            <StatCard value="150+" label="Corporate Partners" delay={0.3} />
            <StatCard value="85%" label="Executive Placement" delay={0.4} />
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="For Students" 
                subtitle="Join an elite community of future leaders and gain unparalleled access to corporate mentorship, leadership development, and executive career opportunities."
              />
              
              <ul className="space-y-4 mb-8">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Trophy className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Merit-Based Advancement</h4>
                    <p className="text-gray-600">Progress through a structured internal career path based on performance and leadership potential.</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Users className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Executive Mentorship</h4>
                    <p className="text-gray-600">Learn directly from C-level executives through our corporate mentorship program.</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Award className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Unmatched Credentials</h4>
                    <p className="text-gray-600">Graduate with a prestigious certification recognized by leading corporations worldwide.</p>
                  </div>
                </motion.li>
              </ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/for-students" className="btn btn-primary">
                  Explore Student Opportunities
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/7147462/pexels-photo-7147462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Students collaborating" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold">Future Leaders</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Corporate partnership" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold">Corporate Excellence</p>
              </div>
            </motion.div>
            
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="For Companies" 
                subtitle="Partner with TEG to access a pipeline of elite talent, participate in executive events, and contribute to shaping the next generation of corporate leaders."
              />
              
              <ul className="space-y-4 mb-8">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Trophy className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Elite Talent Pipeline</h4>
                    <p className="text-gray-600">Gain exclusive access to a carefully selected pool of high-potential future executives.</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Building className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Corporate Excellence Forum</h4>
                    <p className="text-gray-600">Participate in exclusive executive events and leadership summits with industry peers.</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Briefcase className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Legacy Development</h4>
                    <p className="text-gray-600">Shape the future of corporate leadership through mentorship and institutional partnerships.</p>
                  </div>
                </motion.li>
              </ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/for-companies" className="btn btn-primary">
                  Explore Corporate Partnerships
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Join The Executive Network"
        description="Whether you're a talented student with leadership ambitions or a company seeking future executives, TEG offers unparalleled opportunities for growth and connection."
        buttonText="Get Started Today"
        buttonLink="/for-students#apply"
      />
    </div>
  );
};

export default Home;