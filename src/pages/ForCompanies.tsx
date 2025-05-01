import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Building, Briefcase, 
  Calendar, Mail, Linkedin, // <-- Added Mail and Linkedin
  GraduationCap, UserPlus 
} from 'lucide-react'; 

// --- Component Imports ---
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CallToAction from '../components/CallToAction';
import ImageCard from '../components/ImageCard'; 

const ForCompanies: React.FC = () => {
  // --- Placeholder Data (Replace with actual info) ---
  const contactPerson = {
    name: "Jonathan Doe", // Replace with actual name
    title: "Director of Partnerships",
    imageUrl: "/jonathan.jpg",
    email: "jonathan.doe@teg-group.com", // Replace with actual email
    linkedinUrl: "https://www.linkedin.com/in/jonathandoe/", // Replace with actual LinkedIn URL
  };
  // --- End Placeholder Data ---

  return (
    <div>
      {/* ... (HeroSection, First Feature Section, Partnerships Section remain the same) ... */}
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
            {/* FeatureCards remain the same */}
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
          {/* CallToAction and Partnership Opportunities Section remain the same */}
          <CallToAction 
            title="Develop Tomorrow's Executive Talent"
            description="Partner with TEG to gain privileged access to an elite pipeline of future corporate leaders and join our exclusive network of industry-leading companies."
            buttonText="Become a Partner"
            buttonLink="mailto:partnerships@teg-group.com" // Or link to the contact section: "#contact"
            variant="light"
          />

          <SectionTitle 
            title="Partnership Opportunities" 
            subtitle="Why does partnering with us work?"
          />

          <div className="space-y-6 mb-8 w-full max-w-4xl text-left"> {/* Added text-left for cards */}
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

      {/* ====== Modified Contact Section ====== */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container-custom">
          
          {/* Section Title (as per wireframe) */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            For further Information contact us
          </h2>

          {/* Grid for Image Card + Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"> {/* Changed items-center to items-start */}
            
            {/* --- Left Column: Image Card + Info Block --- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Use ImageCard for the picture only, remove caption prop */}
              <ImageCard 
                imageUrl="/jonathan.jpg"
                altText={`Picture of ${contactPerson.name}`} 
                // No caption needed here, we'll add the info block below
                // Adjust ImageCard internal styling if needed (e.g., object-cover)
              />
              {/* Info Block below the Image Card */}
              <div className="bg-gray-700 text-white p-4 mt-0 rounded-b-lg shadow-md text-center"> {/* Match bg color, text color */}
                <h4 className="font-semibold text-lg mb-2">{contactPerson.title}</h4>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`mailto:${contactPerson.email}`} 
                    className="text-accent hover:text-white transition-colors duration-300 flex items-center space-x-1"
                    aria-label={`Email ${contactPerson.name}`}
                  >
                    <Mail size={18} /> 
                    <span>Email</span>
                  </a>
                  <a 
                    href={contactPerson.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:text-white transition-colors duration-300 flex items-center space-x-1"
                    aria-label={`${contactPerson.name}'s LinkedIn Profile`}
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* --- Right Column: Contact Form (remains mostly the same) --- */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }} // Changed x direction
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} // Slightly delayed
            >
              <h3 className="text-primary text-2xl font-semibold mb-6">Request Information</h3>
              <form>
                {/* Form fields remain the same */}
                 <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" // Added name attribute
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" // Added text color
                    placeholder="John Smith"
                    required // Added required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" // Added name attribute
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" // Added text color
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" // Added name attribute
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" // Added text color
                    placeholder="john@example.com"
                    required // Added required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" // Added name attribute
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800" // Added text color
                    placeholder="Tell us how we can help..."
                    required // Added required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary w-full" // Your existing button style
                >
                  Submit Request
                </button>
              </form>
            </motion.div>

          </div> {/* End Grid */}
        </div> {/* End Container */}
      </section>
      {/* ====== End Modified Contact Section ====== */}

    </div>
  );
};

export default ForCompanies;
