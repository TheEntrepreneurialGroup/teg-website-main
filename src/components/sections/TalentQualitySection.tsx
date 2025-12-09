
import { useIntl } from "react-intl";
import { SectionTitle } from "@/components/blocks/SectionTitle";

export function TalentQualitySection() {
    const intl = useIntl();

    return (
        <section className="w-full py-16 md:py-24 bg-secondary-light/30">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <SectionTitle
                        text={intl.formatMessage({ id: "company.quality.title" })}
                        className="mb-8"
                    />
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {intl.formatMessage({ id: "company.quality.intro" })}
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Feature 1: Operational Excellence */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-primary mb-4 font-serif">
                            {intl.formatMessage({ id: "company.quality.operational.title" })}
                        </h3>
                        <p className="text-gray-600 mb-6 min-h-[80px]">
                            {intl.formatMessage({ id: "company.quality.operational.desc" })}
                        </p>
                        <div className="pt-4 border-t border-gray-100">
                            <span className="font-bold text-accent">
                                {intl.formatMessage({ id: "company.quality.operational.benefit" })}
                            </span>
                        </div>
                    </div>

                    {/* Feature 2: Project Management */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-primary mb-4 font-serif">
                            {intl.formatMessage({ id: "company.quality.project.title" })}
                        </h3>
                        <p className="text-gray-600 mb-6 min-h-[80px]">
                            {intl.formatMessage({ id: "company.quality.project.desc" })}
                        </p>
                        <div className="pt-4 border-t border-gray-100">
                            <span className="font-bold text-accent">
                                {intl.formatMessage({ id: "company.quality.project.benefit" })}
                            </span>
                        </div>
                    </div>

                    {/* Feature 3: Leadership */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-primary mb-4 font-serif">
                            {intl.formatMessage({ id: "company.quality.leadership.title" })}
                        </h3>
                        <p className="text-gray-600 mb-6 min-h-[80px]">
                            {intl.formatMessage({ id: "company.quality.leadership.desc" })}
                        </p>
                        <div className="pt-4 border-t border-gray-100">
                            <span className="font-bold text-accent">
                                {intl.formatMessage({ id: "company.quality.leadership.benefit" })}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Resilience Banner */}
                <div className="w-full bg-primary text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-5xl mx-auto">
                        {intl.formatMessage({ id: "company.quality.resilience" })}
                    </p>
                </div>
            </div>
        </section>
    );
}
