// src/pages/Imprint.tsx
import React from 'react';
import SectionTitle from '../components/SectionTitle'; // Adjust path as needed

const Imprint: React.FC = () => {
  return (
    <div className="bg-white text-gray-800"> {/* Or use bg-secondary-light */}
      <section className="py-20">
        <div className="container-custom">
          
          <SectionTitle 
            title="Imprint / Legal Notice" 
            // Subtitle removed as the scope is mentioned in the text below
            centered 
          />

          <div className="max-w-3xl mx-auto mt-12 text-gray-600"> 
            
            {/* Contact Information Block */}
            <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-primary">Contact Info:</h3>
              <p className="mb-1 font-semibold">The Entrepreneurial Group e. V.</p>
              <p className="mb-1">Kaulbachstrasse 64</p>
              <p className="mb-1">80539 München</p>
              <br />
              <p className="mb-1"><strong>Email:</strong> info@teg-ev.de</p>
              <p className="mb-1"><strong>Internet:</strong> <a href="https://www.teg-ev.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.teg-ev.de</a></p>
            </div>

            {/* Representation Block */}
            <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-primary">Board of Directors authorized to represent:</h3>
              <p className="mb-1">Felix Hoestermann, Furkan Imamoglu, Felix Enke, Leonard Hoffmann, Lucas Zierenberg</p>
            </div>

            {/* Register Entry Block */}
            <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-primary">Register Entry:</h3>
              <p className="mb-1">Register court: Munich</p>
              <p className="mb-1">Register number: VR 11822</p>
            </div>

            {/* Scope of Imprint */}
            <div className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
               <p className="text-sm">
                 The imprint applies according to § 5 TMG for our telemedia including our Instagram, LinkedIn and Facebook presence.
               </p>
            </div>


            {/* Disclaimer & Copyright Section */}
            <div className="mt-10 pt-6 border-t border-gray-300">
              <h3 className="text-lg font-semibold mb-3 text-primary">Disclaimer:</h3>
              <p className="text-sm mb-4">
                The authors assume no liability for the topicality, the correctness of the content or the completeness of the information provided on their website, unless the errors were made intentionally or through gross negligence.
              </p>
              <p className="text-sm mb-4">
                The authors expressly reserve the right to change, add to, or delete parts of the pages or the entire offer, or to cease publication temporarily or permanently, without prior notice.
              </p>
              <p className="text-sm mb-6">
                We expressly distance ourselves from the content of linked external sites.
              </p>
              
              <h4 className="text-md font-semibold mt-4 mb-2 text-gray-700">Copyright:</h4>
              <p className="text-sm mb-3">
                The copyright for published objects created by the authors themselves remains solely with the authors of the pages. Any duplication or use of such graphics, audio files, video sequences and texts in other electronic or printed publications is not permitted without the express consent of the respective author.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Imprint;