import React from 'react';
import { useIntl } from 'react-intl';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';

const AlumniPage: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <SectionTitle
            title={intl.formatMessage({ id: "alumni.title" })}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
            <Badge image="/components-images/airbus-logo.png" text="AIRBUS" />
            <Badge image="/components-images/maiborn-logo.png" text="maibornwolff" />
            <Badge image="/components-images/tuv-logo.png" text="TÜV" />
            <Badge image="/components-images/deloitte-logo.png" text="Deloitte" />
            <Badge image="/components-images/ey-logo.png" text="EY" />
            <Badge image="/components-images/vattenfall-logo.png" text="Vattenfall" />
          </div>
          <p className="mt-6 text-center text-gray-600">
            {intl.formatMessage({ id: "alumni.description" })}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;