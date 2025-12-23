
import { useIntl } from "react-intl";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { TextBoxVorteile } from "../blocks/TextBoxVorteile";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";

export function TalentQualitySection() {
    const intl = useIntl();

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="w-full py-10 md:py-14">
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

                    <TextBoxVorteile
                        title={intl.formatMessage({ id: "company.quality.operational.title" })}
                        desc={intl.formatMessage({ id: "company.quality.operational.desc" })}
                        benefit={intl.formatMessage({ id: "company.quality.operational.benefit" })}
                    />

                    {/* Feature 2: Project Management */}
                    <TextBoxVorteile
                        title={intl.formatMessage({ id: "company.quality.project.title" })}
                        desc={intl.formatMessage({ id: "company.quality.project.desc" })}
                        benefit={intl.formatMessage({ id: "company.quality.project.benefit" })}
                    />

                    {/* Feature 3: Leadership */}
                    <TextBoxVorteile
                        title={intl.formatMessage({ id: "company.quality.leadership.title" })}
                        desc={intl.formatMessage({ id: "company.quality.leadership.desc" })}
                        benefit={intl.formatMessage({ id: "company.quality.leadership.benefit" })}
                    />
                </div>

                {/* Resilience Banner */}
                <div className="w-full bg-primary text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-5xl mx-auto">
                        {intl.formatMessage({ id: "company.quality.resilience" })}
                    </p>
                </div>

                {/* CTA Button below the banner */}
                <div className="mt-10">
                    <PrimaryButton
                        label={intl.formatMessage({ id: "company.quality.cta" })}
                        align="center"
                        onClick={scrollToContact}
                    />
                </div>
            </div>
        </section>
    );
}
