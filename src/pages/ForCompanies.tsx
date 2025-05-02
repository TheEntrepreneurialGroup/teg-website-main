import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Mail, Linkedin, 
  GraduationCap, UserPlus 
} from 'lucide-react'; 


import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CallToAction from '../components/CallToAction';

const ForCompanies: React.FC = () => {
  const contactPerson = {
    name: "Jonathan Babelotzky", 
    title: "Director of Partnerships",
    imageUrl: "/jonathan.jpg",
    email: "info@teg-ev.de", 
    linkedinUrl: "https://www.linkedin.com/in/jonathan-babelotzky/", 
  };

  return (
    <div>
      <HeroSection 
        title="We Develop Your Next Executive Talent. With Certainty."
        subtitle="Finding a leadership-ready hire who is also a long-term cultural fit, can be a challenge. With TEG it is certainty: Track records of ownership, responsibility, performance at the highest level and multiple talent-touchpoints ensure that you will find your right fit. Partner with TEG to access a 39 year running, proven pipeline of exceptional talent."
        buttonText="Become a Partner"
        buttonLink="#partnerships"
        backgroundImage="/get_forward.jpg"
      />
      
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Partner with TEG to gain access to the current generation of top talent" 
            subtitle="Partnering with TEG offers companies unique opportunities to engage with high-potential future executives and participate in an exclusive network of corporate excellence."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              title="Right Characteristics"
              description="We only looks for members who have the characteristics to become a top-level executive. We are looking for the best of the best."
              icon={<UserPlus size={40} />}
              delay={0.1}
            />
            <FeatureCard 
              title="Preparation"
              description="Task Forces, Founders Associate program, and the TEG Academy prepare our members for the challenges of top-level executive positions."
              icon={<Building size={40} />}
              delay={0.2}
            />
            <FeatureCard 
              title="Identification"
              description="Our team is inspired by major corporations and ready to take on leadership roles within them."
              icon={<GraduationCap size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <section id="partnerships" className="py-20 bg-secondary-light">
        <div className="container-custom flex flex-col items-center justify-center text-center">
          <CallToAction 
            title="Develop Tomorrow's Executive Talent"
            description="Partner with TEG to gain privileged access to an elite pipeline of future corporate leaders and join our exclusive network of industry-leading companies."
            buttonText="Become a Partner"
            buttonLink="mailto:partnerships@teg-group.com" 
            variant="light"
          />

          <SectionTitle 
            title="Partnership Opportunities" 
            subtitle="Why does partnering with us work?"
          />

          <div className="space-y-6 mb-8 w-full max-w-4xl text-left"> 
            <motion.div className="card p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h4 className="font-semibold text-xl text-primary mb-2">Student-Run, Business-Minded</h4>
              <p className="text-gray-600 mb-4">
                TEG operates like a real company, complete with its own office and monthly financial targets. Our members manage operations autonomously, gaining hands-on experience in entrepreneurship and business leadership.
              </p>
            </motion.div>
            {/* Other motion.div cards */}
            <motion.div className="card p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h4 className="font-semibold text-xl text-primary mb-2">Engage with Future Leaders</h4>
              <p className="text-gray-600 mb-4">
                Get to know our members through curated company visits, networking panels, and speaker sessions. Build real connections before hiring.
              </p>
            </motion.div>
            <motion.div className="card p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h4 className="font-semibold text-xl text-primary mb-2">6-Month Leadership Internships</h4>
              <p className="text-gray-600 mb-4">
                Host TEG interns for intensive placements directly under C-level or director mentorship. Our talents are trained to think like leaders.
              </p>
            </motion.div>
            <motion.div className="card p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h4 className="font-semibold text-xl text-primary mb-2">Hire & Retain Young Leaders</h4>
              <p className="text-gray-600 mb-4">
                Looking to integrate emerging leadership talent into your company? TEG supports you through onboarding and leadership development consulting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="contact" className="py-20 bg-primary text-white">    
        <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          For further Information contact us
        </h2>
        
        {/* Card Container - Centered */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
            {/* Top Section with Name */}
            <div className="flex items-center p-6 gap-4">
              {/* Circular Image */}
              <div className="w-80 h-80 overflow-hidden rounded-full border-2 border-gray-200 mb-4">
                <img 
                  src="/jonathan.jpg" 
                  alt="Jonathan Babelotzky" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name and Address */}
              <div className="flex-1">
                <h2 className="text-gray-700 text-xl md:text-2xl font-medium"> Director of Partnerships </h2>
                <h4 className="text-gray-700 text-xl md:text-2xl font-medium">
                  {contactPerson.name} 
                </h4>
              </div>
            </div>
            
            {/* Divider Line */}
            <div className="border-t border-gray-200"></div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="p-4 flex items-center gap-2 text-gray-700">
                <a href="https://www.linkedin.com/in/jonathan-babelotzky/" className="flex items-center gap-2 text-primary hover:text-primary-dark">
                <Linkedin size={20} />
                <span> LinkedIn </span>
                </a>
              </div>
              <div className="p-4 flex items-center gap-2 text-gray-700">
              <a href="mailto:info@teg-ev.de" className="flex items-center gap-2 text-primary hover:text-primary-dark">
                <Mail size={20} />
                <span>Email</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>   
      </section>


    </div>
  );
};

export default ForCompanies;
