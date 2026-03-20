import { createClient } from "@sanity/client";

/**
 * Migration script to populate Sanity CMS with existing locale content
 * Run with: npx tsx scripts/migrate-content.ts
 */

const client = createClient({
  projectId: "u51w3koe",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN, // Requires a write token
  useCdn: false,
});

// Content from locale files
const homePageContent = {
  _type: "page",
  _id: "home-page",
  title: "Home",
  slug: { _type: "slug", current: "home" },
  hero: {
    _type: "heroSection",
    title: {
      de: "Wir formen die nächsten Führungspersönlichkeiten der deutschen Wirtschaft",
      en: "We shape the next generation of German business leaders",
    },
    since: {
      de: "Seit 1986.",
      en: "Since 1986.",
    },
    subtitle: {
      de: "",
      en: "",
    },
    buttons: [
      {
        _key: "btn1",
        text: { de: "TEG für Unternehmen", en: "TEG for Companies" },
        link: "/for-companies",
      },
      {
        _key: "btn2",
        text: { de: "TEG für Studierende", en: "TEG for Students" },
        link: "/for-students",
      },
    ],
  },
  stats: {
    _type: "statsSection",
    title: {
      de: "Unsere Alumni: 39 Jahre Exzellenz mit Wirkung",
      en: "Our Alumni: 39 Years of Excellence with Impact",
    },
    stats: [
      {
        _key: "stat1",
        value: { de: "300+ Alumni", en: "300+ Alumni" },
        label: {
          de: "Unsere Alumni bilden das Rückgrat der deutschen Wirtschaft, ob in Top Management Positionen, im mittleren Management oder in führenden Fachrollen.",
          en: "Our alumni form the backbone of the German economy, whether in top management positions, middle management or leading specialist roles.",
        },
      },
      {
        _key: "stat2",
        value: { de: "41", en: "41" },
        label: {
          de: "Top-Level Führungskräfte in Konzernen",
          en: "Top-level executives in corporations",
        },
      },
      {
        _key: "stat3",
        value: { de: "40", en: "40" },
        label: {
          de: "Top-Level Führungskräfte im Mittelstand",
          en: "Top-level executives in mid-sized companies",
        },
      },
      {
        _key: "stat4",
        value: { de: "15", en: "15" },
        label: {
          de: "Unternehmensgründer",
          en: "Company founders",
        },
      },
    ],
  },
  features: {
    _type: "featureSection",
    title: {
      de: "Unser Vermächtnis",
      en: "Our Legacy",
    },
    subtitle: {
      de: "Gegründet von 11 führenden deutschen Unternehmen und vier herausragenden Studierenden. Bewährt über vier Jahrzehnte.",
      en: "Founded by 11 leading German companies and four outstanding students. Proven over four decades.",
    },
    features: [
      {
        _key: "feat1",
        title: {
          de: "Erfolgsbilanz mit Substanz",
          en: "Track Record with Substance",
        },
        description: {
          de: "Seit 39 Jahren steigen unsere Alumni konsequent in Führungspositionen führender Unternehmen auf oder gründen erfolgreiche Firmen.",
          en: "For 39 years, our alumni have consistently risen to leadership positions in leading companies or founded successful firms.",
        },
        icon: "TrendingUp",
      },
      {
        _key: "feat2",
        title: {
          de: "Unternehmerisches Denken mit Corporate-Verantwortung",
          en: "Entrepreneurial Thinking with Corporate Responsibility",
        },
        description: {
          de: "Jede Initiative hat ihre Geschichte. Wir bewundern traditionsreiche, exzellent organisierte Unternehmen genauso sehr wie unsere eigene Legacy. Die Visionen früherer TEG-Mitglieder sind heute Realität. Unsere Mitglieder übernehmen Verantwortung, führen Unternehmen mit Weitblick und lösen konkrete Herausforderungen für unsere Partner im Ökosystem. Sie gestalten nicht nur, sie bauen.",
          en: "Every initiative has its story. We admire traditional, excellently organized companies as much as our own legacy. The visions of former TEG members are now reality. Our members take responsibility, lead companies with foresight and solve concrete challenges for our partners in the ecosystem.",
        },
        icon: "Building",
      },
    ],
  },
  cta: {
    _type: "ctaSection",
    items: [
      {
        _key: "cta1",
        title: {
          de: "Partner werden: TEG & Ihr Unternehmen",
          en: "Become a Partner: TEG & Your Company",
        },
        description: {
          de: "Gestalten Sie mit uns die nächste Generation von Führungskräften. Erfahren Sie, wie Ihr Unternehmen vom Zugang zum TEG-Ökosystem profitieren kann – und erhalten Sie direkten Zugang zu einem seit 39 Jahren bewährten Talent-Pool.",
          en: "Shape the next generation of leaders with us. Learn how your company can benefit from access to the TEG ecosystem – and get direct access to a talent pool proven over 39 years.",
        },
        buttonText: { de: "TEG für Unternehmen", en: "TEG for Companies" },
        buttonLink: "/for-companies",
      },
      {
        _key: "cta2",
        title: {
          de: "Jetzt bewerben: TEG für Studierende",
          en: "Apply Now: TEG for Students",
        },
        description: {
          de: "Werde Teil einer selektiven Community von bis zu 50 High-Potentials, die auf Top-Führungsrollen vorbereitet werden – durch echte Verantwortung, Praxiserfahrung und Mentoring. Der Erfolg unserer Alumni über 39 Jahre zeigt, was möglich ist.",
          en: "Become part of a selective community of up to 50 high-potentials being prepared for top leadership roles – through real responsibility, practical experience and mentoring.",
        },
        buttonText: { de: "TEG für Studierende", en: "TEG for Students" },
        buttonLink: "/for-students",
      },
    ],
  },
};

const forCompaniesContent = {
  _type: "page",
  _id: "for-companies-page",
  title: "For Companies",
  slug: { _type: "slug", current: "for-companies" },
  hero: {
    _type: "heroSection",
    title: {
      de: "Euer Führungskräfte-Nachwuchs: Unsere Mission.",
      en: "Your Future Leaders: Our Mission.",
    },
    subtitle: {
      de: "Zugang zu einem seit 39 Jahren bewährten Talent-Pool.",
      en: "Access to a talent pool proven over 39 years.",
    },
    buttons: [
      {
        _key: "btn1",
        text: { de: "Zusammenarbeit beginnen", en: "Start Collaboration" },
        link: "#contact",
      },
    ],
  },
  features: {
    _type: "featureSection",
    title: {
      de: "Partner werden, um Zugang zur nächsten Generation an Führungskräften zu erhalten",
      en: "Become a partner to access the next generation of leaders",
    },
    subtitle: {
      de: "Seit 1986 entwickeln wir Talente, die heute Unternehmen in Deutschland und Europa prägen. Unsere Alumni stehen für Exzellenz: 300+ Absolvent:innen, darunter 41 Konzern-Führungskräfte, 40 Mittelstands-Executives und 15 Gründer erfolgreicher Unternehmen.",
      en: "Since 1986, we have been developing talents who now shape companies in Germany and Europe. Our alumni stand for excellence: 300+ graduates, including 41 corporate executives, 40 mid-market executives and 15 founders of successful companies.",
    },
    features: [
      {
        _key: "feat1",
        title: {
          de: "Selektion - Die richtigen Persönlichkeitsmerkmale",
          en: "Selection - The Right Personality Traits",
        },
        description: {
          de: "Wir wählen unsere Mitglieder gezielt nach den Eigenschaften aus, die für künftige Führungskräfte entscheidend sind: Verantwortungsbewusstsein, strategisches Denken, Umsetzungswille, Teamfähigkeit und Ambition.",
          en: "We carefully select our members based on the traits essential for future leaders: responsibility, strategic thinking, implementation drive, teamwork and ambition.",
        },
        icon: "Users",
      },
      {
        _key: "feat2",
        title: {
          de: "Vorbereitung - Reale Führungskompetenz ab Tag Eins",
          en: "Preparation - Real Leadership Skills from Day One",
        },
        description: {
          de: "Unsere Mitglieder sammeln durch Formate wie Task Forces, Panel Talks, Mentoring, Executive- oder Founders-Associate-Programme echte Erfahrung in unternehmerischer Verantwortung.",
          en: "Our members gain real experience in entrepreneurial responsibility through formats such as task forces, panel talks, mentoring, executive or founders associate programs.",
        },
        icon: "Target",
      },
      {
        _key: "feat3",
        title: {
          de: "Identifikation – Unsere Mitglieder wollen führen",
          en: "Identification – Our Members Want to Lead",
        },
        description: {
          de: "Unsere Mitglieder brennen dafür, Verantwortung in Konzernen zu übernehmen. Sie denken nicht in Semestern, sondern in Karrieren.",
          en: "Our members are passionate about taking on responsibility in corporations. They think not in semesters, but in careers.",
        },
        icon: "Flame",
      },
    ],
  },
  contact: {
    _type: "contactSection",
    title: {
      de: "Für weitere Informationen kontaktieren Sie uns",
      en: "For more information contact us",
    },
    greeting: {
      de: "Ich freue mich von Ihnen zu hören!",
      en: "I look forward to hearing from you!",
    },
    contacts: [
      {
        _key: "contact1",
        name: "Jonathan Babelotzky",
        role: {
          de: "Bereichsleiter Organisationsstrategie und Partnerschaften",
          en: "Director of Organizational Strategy and Partnerships",
        },
        email: "jonathan@teg.de",
      },
    ],
  },
};

const forStudentsContent = {
  _type: "page",
  _id: "for-students-page",
  title: "For Students",
  slug: { _type: "slug", current: "for-students" },
  hero: {
    _type: "heroSection",
    title: {
      de: "Werde Teil der nächsten Generation von Top-Managern, Führungskräften und B2B-Gründern.",
      en: "Become part of the next generation of top managers, executives and B2B founders.",
    },
    subtitle: {
      de: "Bei uns entwickelst Du schon während deines Studiums die Fähigkeiten, die Community und die Erfahrung, die Du brauchst, um die Unternehmensführung von morgen zu werden.",
      en: "With us, you develop the skills, community and experience you need to become tomorrow's business leaders – while still studying.",
    },
    buttons: [
      {
        _key: "btn1",
        text: { de: "Mitglied werden", en: "Become a Member" },
        link: "https://tally.so/r/7RZXpA",
      },
    ],
  },
  testimonials: {
    _type: "testimonialSection",
    title: {
      de: "Stimmen von aktuell aktiven Mitgliedern",
      en: "Voices from Currently Active Members",
    },
    testimonials: [
      {
        _key: "test1",
        quote: {
          de: "Aus Druck entstehen Diamanten. Nirgendwo stimmt das mehr, als bei TEG.",
          en: "Diamonds are formed under pressure. Nowhere is this more true than at TEG.",
        },
        author: "Ahmed Kaddour",
      },
      {
        _key: "test2",
        quote: {
          de: "Ich war erstaunt, wie viel Verantwortung man bei TEG direkt zu Beginn bekommt und bin hier schon mindestens 5 Mal über mich hinaus gewachsen.",
          en: "I was amazed at how much responsibility you get at TEG right from the start and I have already grown beyond myself at least 5 times here.",
        },
        author: "Luis Waller",
      },
      {
        _key: "test3",
        quote: {
          de: "Ich laufe regelmäßig Marathons, weil ich Herausforderungen und Höchstleistungen liebe. Genau deshalb bin ich auch bei TEG.",
          en: "I regularly run marathons because I love challenges and peak performance. That's exactly why I'm also at TEG.",
        },
        author: "Yesieniia Liaskina",
      },
    ],
  },
  cta: {
    _type: "ctaSection",
    items: [
      {
        _key: "cta1",
        title: {
          de: "Bist Du bereit, Deine Karriere als Führungskraft zu starten?",
          en: "Are you ready to start your career as a leader?",
        },
        description: {
          de: "Übernehme Verantwortung. Werde ein Mitglied bei TEG und erwerbe die Fähigkeiten, die Community und die Erfahrung, die Du brauchst, um die Unternehmensführung von morgen zu werden.",
          en: "Take responsibility. Become a member of TEG and acquire the skills, community and experience you need to become tomorrow's business leader.",
        },
        buttonText: { de: "Jetzt bewerben!", en: "Apply Now!" },
        buttonLink: "https://tally.so/r/7RZXpA",
      },
    ],
  },
  contact: {
    _type: "contactSection",
    title: {
      de: "Für weitere Informationen kontaktiere uns",
      en: "For more information contact us",
    },
    greeting: {
      de: "Wenn Du Fragen hast oder mehr Informationen brauchst, schreib mir gerne eine Nachricht",
      en: "If you have questions or need more information, feel free to send me a message",
    },
    contacts: [
      {
        _key: "contact1",
        name: "Felix Enke",
        role: {
          de: "Bereichsleiter People & Culture",
          en: "Director of People & Culture",
        },
      },
    ],
  },
};

async function migrate() {
  console.log("🚀 Starting content migration to Sanity...\n");

  try {
    // Create or replace documents
    console.log("📝 Creating Home page...");
    await client.createOrReplace(homePageContent);
    console.log("   ✅ Home page created");

    console.log("📝 Creating For Companies page...");
    await client.createOrReplace(forCompaniesContent);
    console.log("   ✅ For Companies page created");

    console.log("📝 Creating For Students page...");
    await client.createOrReplace(forStudentsContent);
    console.log("   ✅ For Students page created");

    console.log(
      "\n🎉 Migration complete! All pages have been created in Sanity.",
    );
    console.log("   Open http://localhost:3333 to view and edit your content.");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

migrate();
