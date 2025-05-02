import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Briefcase, 
  TrendingUp, Mail, Linkedin,
  CheckCircle // Added for list items
} from 'lucide-react'; // Added CheckCircle
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CallToAction from '../components/CallToAction';

const ForStudents: React.FC = () => {
  const contactPerson = {
    name: "Felix Enke", 
    title: "Director of Partnerships",
    imageUrl: "/felix.png", 
    email: "info@teg-ev.de", 
    linkedinUrl: "https://www.linkedin.com/in/felix-enke/", 
  };

  // Data for the new Benefits/Requirements lists
  const studentBenefits = [
    "Exclusive community of high-potential peers (capped at 50).",
    "Access to dedicated office space for collaboration.",
    "Accelerated career path through real-world experience.",
    "Direct interaction and mentorship from corporate executives.",
    "Opportunities to lead projects and gain entrepreneurial skills.",
    "Proven track record (39 years) of alumni success.",
  ];

  const studentRequirements = [
    "Commitment of 10+ hours per week.",
    "Active participation in task forces and TEG operations.",
    "Drive to take on real responsibility and accountability.",
    "Ambition for top-level executive leadership.",
    "Proactive contribution to the group's success.",
    "High academic standing and strong work ethic.",
  ];


  return (
    <div>
      {/* --- Hero Section --- */}
      <HeroSection 
        title="Become a Leader. Shape the Future of Business."
        subtitle="Join a community of capped to 50 high-potential students preparing for top-level executive leadership through real responsibility, hands-on experience and mentorship. 39 years of alumni success prove what you can achieve."
        buttonText="Apply Now"
        buttonLink="#apply" // Link to the new apply section ID
        backgroundImage="/invite.png"
      />
      
      {/* --- Intro Section (Warning/Disclaimer) --- */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="TEG is not for everyone. 10+ hours workload per week. Real responsibility. Executive accountability." 
            subtitle="If you think that’s too much, we are not your path."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature cards remain the same */}
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
      
      

      <section id="expectations" className="section bg-white"> 
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-0"> 
            {/* --- Benefits Column --- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 bg-secondary-light rounded-lg" // Added card styling
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Benefits for Students</h3>
              <ul className="space-y-3 text-gray-700">
                {studentBenefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }} // Staggered delay
                  >
                    <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* --- Requirements Column --- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} // Slightly later delay
              className="card p-6 bg-secondary-light rounded-lg" // Added card styling
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Requirements for Students</h3>
              <ul className="space-y-3 text-gray-700">
                {studentRequirements.map((req, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }} // Animate from right
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }} // Staggered delay
                  >
                     <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} /> {/* Different icon color? */}
                    <span>{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>
      {/* ====== End NEW Section ====== */}

      <section id="apply" className="py-16 md:py-20 bg-secondary-light"> {/* Added ID for linking */}
        <div className="ontainer-custom flex flex-col items-center justify-center text-center"> {/* Centering container */}
          <CallToAction 
            title="Ready to Launch Your Executive Career?"
            description="Take responsibility. Join TEG and gain the skills, network, and experience needed to become tomorrow's corporate leader." // Added imperative based on wireframe hint
            buttonText="Apply Now"
            buttonLink="https://tally.so/r/wMM9zp" 
            variant="light" 
          />
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
                  src="/felix.png" 
                  alt="Felix Enke" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name and Address */}
              <div className="flex-1">
                <h2 className="text-gray-700 text-xl md:text-2xl font-medium"> Director of People & Culture </h2>
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
                <a href="https://www.linkedin.com/in/felix-enke/" className="flex items-center gap-2 text-primary hover:text-primary-dark">
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

export default ForStudents;


