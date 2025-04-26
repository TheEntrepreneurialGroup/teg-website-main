import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, Building, Briefcase, Trophy, 
  Calendar, MapPin, GraduationCap, UserPlus
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CallToAction from '../components/CallToAction';

const ForCompanies: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="Corporate Partnership Excellence"
        subtitle="Partner with TEG to access a pipeline of elite talent, participate in executive forums, and help shape the next generation of corporate leaders."
        buttonText="Become a Partner"
        buttonLink="#partnerships"
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Partnership Benefits" 
            subtitle="Partnering with TEG offers companies unique opportunities to engage with high-potential future executives and participate in an exclusive network of corporate excellence."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              title="Elite Talent Access"
              description="Gain privileged access to a carefully selected pool of exceptional students who are being prepared specifically for executive roles."
              icon={<UserPlus size={40} />}
              delay={0.1}
            />
            <FeatureCard 
              title="Executive Network"
              description="Join an exclusive network of corporate partners for leadership summits, strategic forums, and collaborative opportunities."
              icon={<Building size={40} />}
              delay={0.2}
            />
            <FeatureCard 
              title="Legacy Development"
              description="Shape future corporate leaders through mentorship, project sponsorship, and strategic guidance."
              icon={<GraduationCap size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <section id="partnerships" className="py-20 bg-secondary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="Partnership Opportunities" 
                subtitle="TEG offers multiple levels of corporate partnership, each providing different degrees of engagement and access to our network of future executives."
              />
              
              <div className="space-y-6 mb-8">
                <motion.div
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="font-semibold text-xl text-primary mb-2">Founding Partner</h4>
                  <p className="text-gray-600 mb-4">Join our exclusive circle of founding partners with maximum visibility and engagement opportunities.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Executive mentorship program placement</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Strategic advisory board position</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Priority access to all TEG events and talent</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="font-semibold text-xl text-primary mb-2">Executive Partner</h4>
                  <p className="text-gray-600 mb-4">Extensive access to TEG talent and programs with significant brand visibility.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Sponsored executive projects</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>On-campus recruitment events</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Featured partner at TEG leadership forums</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="font-semibold text-xl text-primary mb-2">Associate Partner</h4>
                  <p className="text-gray-600 mb-4">Introductory partnership level with focused engagement opportunities.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Access to TEG talent database</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Participation in annual corporate event</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                      <span>Promotional opportunities through TEG channels</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="mailto:partnerships@teg-group.com" className="btn btn-primary">
                  Inquire About Partnership
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
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Corporate partnership" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold">Executive Access</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="events" className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Executive Events" 
            subtitle="TEG hosts exclusive events throughout the year, bringing together corporate partners, future leaders, and industry experts for networking and knowledge sharing."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Leadership Summit" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">October 15-16, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">Berlin, Germany</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Annual Leadership Summit</h3>
                <p className="text-gray-600 mb-4">Our flagship event bringing together C-suite executives, thought leaders, and selected TEG members for two days of intensive leadership discourse and networking.</p>
                <a href="#contact" className="text-primary font-semibold hover:text-primary-light transition-colors duration-300 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Executive Forum" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">Quarterly</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">Frankfurt, Germany</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Executive Roundtable Series</h3>
                <p className="text-gray-600 mb-4">Quarterly invitation-only forums where corporate partners and TEG executives discuss emerging leadership challenges and strategic business trends.</p>
                <a href="#contact" className="text-primary font-semibold hover:text-primary-light transition-colors duration-300 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/7642029/pexels-photo-7642029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Talent Showcase" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">May 20, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">Munich, Germany</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Executive Talent Showcase</h3>
                <p className="text-gray-600 mb-4">An exclusive event where top TEG members present strategic projects and solutions to corporate partners, demonstrating their executive readiness.</p>
                <a href="#contact" className="text-primary font-semibold hover:text-primary-light transition-colors duration-300 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="Contact Our Corporate Team" 
                subtitle="Interested in learning more about partnership opportunities with TEG? Our dedicated corporate relations team is ready to assist you."
              />
              
              <ul className="space-y-4 mb-8">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Users className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Partnership Inquiries</h4>
                    <p className="text-secondary-light">partnerships@teg-group.com</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Calendar className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Event Coordination</h4>
                    <p className="text-secondary-light">events@teg-group.com</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Briefcase className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Talent Recruitment</h4>
                    <p className="text-secondary-light">talent@teg-group.com</p>
                  </div>
                </motion.li>
              </ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="mailto:partnerships@teg-group.com" className="btn btn-accent">
                  Contact Us Today
                </a>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-primary text-2xl font-semibold mb-6">Request Information</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Develop Tomorrow's Executive Talent"
        description="Partner with TEG to gain privileged access to an elite pipeline of future corporate leaders and join our exclusive network of industry-leading companies."
        buttonText="Become a Partner"
        buttonLink="mailto:partnerships@teg-group.com"
        variant="light"
      />
    </div>
  );
};

export default ForCompanies;