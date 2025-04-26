import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Trophy, Briefcase, Users, Award, 
  GraduationCap, TrendingUp, Target, Clock
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';

const ForStudents: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="Become a Future Executive"
        subtitle="Join an elite community of high-potential students prepared for executive leadership through hands-on experience, mentorship, and corporate networking."
        buttonText="Apply Now"
        buttonLink="#apply"
        backgroundImage="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Why Join TEG?" 
            subtitle="The Entrepreneurial Group offers a unique opportunity for ambitious students to develop executive skills through real responsibility and corporate mentorship."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              title="Merit-Based Advancement"
              description="Progress through a structured internal career path based on proven performance and leadership ability."
              icon={<TrendingUp size={40} />}
              delay={0.1}
            />
            <FeatureCard 
              title="Corporate Immersion"
              description="Work directly with executive mentors from our partner companies and gain insights into corporate leadership."
              icon={<Briefcase size={40} />}
              delay={0.2}
            />
            <FeatureCard 
              title="Leadership Development"
              description="Develop and refine essential executive skills through hands-on projects and leadership challenges."
              icon={<Trophy size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <section id="leadership" className="py-20 bg-secondary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="Our Leadership Program" 
                subtitle="TEG operates as a microcosm of the corporate world, with a structured hierarchy and clear advancement path based on performance and leadership potential."
              />
              
              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="font-semibold text-xl text-primary mb-2">Phase 1: Selection & Onboarding</h4>
                  <p className="text-gray-600">A rigorous selection process identifies high-potential candidates, followed by intensive training in corporate principles and leadership fundamentals.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="font-semibold text-xl text-primary mb-2">Phase 2: Project Leadership</h4>
                  <p className="text-gray-600">Members lead increasingly complex projects with real budgets, stakeholder management, and measurable outcomes.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="font-semibold text-xl text-primary mb-2">Phase 3: Executive Development</h4>
                  <p className="text-gray-600">Top performers advance to executive council positions, managing teams, strategy, and direct corporate partnerships.</p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="#apply" className="btn btn-primary">
                  Apply for the Program
                </a>
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
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Leadership development" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold">Growth Path</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="mentorship" className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Executive Mentorship" 
            subtitle="Our members receive personalized guidance from experienced executives from our corporate partners, providing invaluable insights into leadership and career development."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              title="One-on-One Coaching"
              description="Regular sessions with executive mentors to discuss leadership challenges, career strategy, and personal development."
              icon={<Users size={40} />}
              delay={0.1}
            />
            <FeatureCard 
              title="Corporate Shadowing"
              description="Opportunities to observe executives in action, attending meetings and strategic sessions at partner companies."
              icon={<Briefcase size={40} />}
              delay={0.2}
            />
            <FeatureCard 
              title="Leadership Workshops"
              description="Exclusive workshops on advanced leadership topics led by C-suite executives from global corporations."
              icon={<GraduationCap size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <SectionTitle 
            title="Success Stories" 
            subtitle="Our alumni consistently achieve executive positions at leading corporations, with over 85% reaching senior management roles within 10 years of graduation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="TEG provided me with the executive mindset and leadership skills that accelerated my career path. Within five years of graduation, I was heading a division at a Fortune 500 company."
              name="Sophia Müller"
              position="Chief Operating Officer"
              company="Global Tech AG"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              delay={0.1}
            />
            <TestimonialCard 
              quote="The corporate fundamentals I learned at TEG were invaluable. The rigorous leadership development program prepared me for executive challenges that most of my peers weren't ready for."
              name="Thomas Weber"
              position="CEO"
              company="European Finance Group"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              delay={0.2}
            />
            <TestimonialCard 
              quote="TEG's network of corporate partners and alumni opened doors that would have been impossible otherwise. The combination of practical leadership experience and executive mentorship was transformative."
              name="Anna Schmidt"
              position="VP of Strategy"
              company="International Consulting"
              image="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <section id="apply" className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Application Process" 
            subtitle="Joining TEG is a selective process designed to identify students with exceptional leadership potential and a commitment to executive excellence."
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Initial Application</h4>
                    <p className="text-gray-600">Submit your resume, academic transcript, and a leadership essay detailing your executive ambitions.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Case Study Assessment</h4>
                    <p className="text-gray-600">Selected candidates complete a corporate case study to demonstrate analytical and strategic thinking.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Panel Interview</h4>
                    <p className="text-gray-600">Final candidates interview with a panel of TEG executives and corporate partners.</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-semibold text-xl mb-4">Application Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Target className="text-accent mr-3 flex-shrink-0" size={18} />
                      <span>Minimum GPA of 3.5 or equivalent</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="text-accent mr-3 flex-shrink-0" size={18} />
                      <span>Demonstrated leadership experience</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="text-accent mr-3 flex-shrink-0" size={18} />
                      <span>Strong analytical and communication skills</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="text-accent mr-3 flex-shrink-0" size={18} />
                      <span>Professional proficiency in English</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="text-accent mr-3 flex-shrink-0" size={18} />
                      <span>Commitment to a minimum one-year engagement</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center mb-3">
                      <Clock className="text-primary mr-2" size={18} />
                      <span className="font-semibold">Application Deadlines</span>
                    </div>
                    <p className="text-gray-600">Fall Intake: August 15<br />Spring Intake: January 15</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center md:text-left"
                >
                  <a href="mailto:applications@teg-group.com" className="btn btn-primary">
                    Submit Application
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Launch Your Executive Career?"
        description="Join TEG and gain the skills, network, and experience needed to become tomorrow's corporate leader."
        buttonText="Apply Now"
        buttonLink="mailto:applications@teg-group.com"
        variant="light"
      />
    </div>
  );
};

export default ForStudents;