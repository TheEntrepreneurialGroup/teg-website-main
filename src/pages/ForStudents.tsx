import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Briefcase, Users, 
  GraduationCap, TrendingUp, Mail, Linkedin,
  CheckCircle // Added for list items
} from 'lucide-react'; // Added CheckCircle
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
// TestimonialCard import removed as it wasn't used
import CallToAction from '../components/CallToAction';
import ImageCard from '../components/ImageCard';

const ForStudents: React.FC = () => {
  // Contact person data (ensure path is correct relative to public folder)
  const contactPerson = {
    name: "Jonathan Doe", // Replace with actual name
    title: "Director of Partnerships",
    imageUrl: "/felix.png", 
    email: "jonathan.doe@teg-group.com", // Replace with actual email
    linkedinUrl: "https://www.linkedin.com/in/jonathandoe/", // Replace with actual LinkedIn URL
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
      
      {/* --- Leadership Program Section --- */}
      <section id="leadership" className="py-20 bg-secondary-light">
        {/* Content remains the same */}
         <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="Our Leadership Program" 
                subtitle="TEG operates as a microcosm of the corporate world, with a structured hierarchy and clear advancement path based on performance and leadership potential."
              />
              <div className="space-y-6 mb-8">
                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                   <h4 className="font-semibold text-xl text-primary mb-2">Phase 1: Selection & Onboarding</h4>
                   <p className="text-gray-600">A rigorous selection process identifies high-potential candidates, followed by intensive training in corporate principles and leadership fundamentals.</p>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                   <h4 className="font-semibold text-xl text-primary mb-2">Phase 2: Project Leadership</h4>
                   <p className="text-gray-600">Members lead increasingly complex projects with real budgets, stakeholder management, and measurable outcomes.</p>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                   <h4 className="font-semibold text-xl text-primary mb-2">Phase 3: Executive Development</h4>
                   <p className="text-gray-600">Top performers advance to executive council positions, managing teams, strategy, and direct corporate partnerships.</p>
                 </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                 <a href="#apply" className="btn btn-primary"> {/* Link to the new apply section ID */}
                   Learn How to Apply
                 </a>
              </motion.div>
            </div>
            <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Leadership development" className="rounded-lg shadow-xl"/>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                 <p className="font-heading font-bold">Growth Path</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* ====== NEW Benefits & Requirements Section (Replaces Mentorship) ====== */}
      <section id="expectations" className="section bg-white"> {/* Changed background to white */}
        <div className="container-custom">
          {/* Optional Title for the whole section */}
          {/* <SectionTitle title="What to Expect" centered subtitle="A summary of benefits and commitments" /> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-0"> {/* Removed mt-12 if no SectionTitle */}
            
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
      
      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 bg-primary text-white">
         {/* Content remains the same */}
         <div className="container-custom">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
             For further Information contact us
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <ImageCard imageUrl={contactPerson.imageUrl} altText={`Picture of ${contactPerson.name}`} />
                <div className="bg-gray-700 text-white p-4 mt-0 rounded-b-lg shadow-md text-center">
                  <h4 className="font-semibold text-lg mb-2">{contactPerson.title}</h4>
                  <div className="flex justify-center space-x-4">
                    <a href={`mailto:${contactPerson.email}`} className="text-accent hover:text-white transition-colors duration-300 flex items-center space-x-1" aria-label={`Email ${contactPerson.name}`}>
                      <Mail size={18} /> <span>Email</span>
                    </a>
                    <a href={contactPerson.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors duration-300 flex items-center space-x-1" aria-label={`${contactPerson.name}'s LinkedIn Profile`}>
                      <Linkedin size={18} /> <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
             </motion.div>
             <motion.div className="bg-white p-8 rounded-lg shadow-lg" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h3 className="text-primary text-2xl font-semibold mb-6">Request Information</h3>
                <form>
                  {/* Form fields */}
                  <div className="mb-4">
                     <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                     <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" placeholder="John Smith" required />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                     <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" placeholder="Your Company"/>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                     <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" placeholder="john@example.com" required />
                  </div>
                  <div className="mb-6">
                     <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                     <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" placeholder="Tell us how we can help..." required ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full"> Submit Request </button>
                </form>
             </motion.div>
           </div>
         </div>
      </section>
      

    </div>
  );
};

export default ForStudents;
