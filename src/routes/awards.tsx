import { Link, createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";import crest from "@/assets/hk2.jpg";
export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards | CES at SKH Lam Woo" },
      { name: "description", content: "Celebrating student achievement in Citizenship, Economics and Society." },
      { property: "og:title", content: "Awards | CES at SKH Lam Woo" },
      { property: "og:description", content: "Recognition for research, communication and project work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AwardsPage,
});

const awardSections = [
  {
    year: "2024–2025",
    title: "Hong Kong Financial Literacy Championship 2025 – Online Quiz",
    subtitle: "(HKEJ Education, co-organised by the Education Bureau and the Hong Kong Monetary Authority)",
    details: "Individual Award – Excellence Award",
    extra: "1B Ng Chung Hei Kason; 2D CHAN Yin To; 3D Chan King Ho",
  },
  {
    year: "2024–2025",
    title: "Hong Kong Financial Literacy Championship 2025 – Online Quiz",
    subtitle: "(HKEJ Education, co-organised by the Education Bureau and the Hong Kong Monetary Authority)",
    details: "School Award – 1st Runner-up",
    extra: "Award for Enthusiastic Participation",
  },
  {
    year: "2024–2025",
    title: "Financial Education School Award Scheme (Education Bureau)",
    subtitle: "Tier 1: Financial Education School",
    details: "Participation Award",
    extra: "",
  },
  {
    year: "2022–2023",
    title: "Dragon Dance: Youth Co-create Action",
    subtitle: "Participation Award",
    details: "",
    extra: "",
  },
  {
    year: "2022–2023",
    title: "1st and 2nd Hong Kong Youth National Culture and Tourism Knowledge Contest",
    subtitle: "Participation Award",
    details: "",
    extra: "",
  },
  {
    year: "2022–2023",
    title: "第二十二屆《基本法》及國民常識網上問答比賽",
    subtitle: "Merit Award",
    details: "",
    extra: "",
  },
  {
    year: "2022–2023",
    title: "「尊重‧包容‧負責‧關愛」標語創作大賽 2022",
    subtitle: "Merit Award",
    details: "",
    extra: "",
  },
  {
    year: "2022–2023",
    title: "2nd Hong Kong Youth National Culture and Tourism Knowledge Contest",
    subtitle: "Merit Award",
    details: "Our victory in the 2ⁿᵈ Hong Kong Youth National Culture and Tourism Knowledge Contest has resulted in an exciting opportunity for seven students. They went on a 5-day, 4-night trip in August 2023, with all expenses paid!",
    extra: "",
    linkTo: "/excursions",
    linkLabel: "See excursion page for more",
  },
];

function AwardsPage() {
  return (
    <div className="page-space">
      <div className="site-container">
        <section className="overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="section-kicker">Student achievement · 學生成就</p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-none md:text-6xl">Ideas recognised.</h1>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                With the learning experience gained in this subject, students can enhance their social awareness, develop thinking skills and foster positive values and attitudes.
              </p>
            </div>
            <div className="flex items-center justify-center p-6 md:p-10">
              <div className="crest-stage crest-stage-left max-w-[320px]">
                <img src={crest} alt="School crest" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-16 bg-primary text-primary-foreground">
        <div className="site-container grid gap-8 md:grid-cols-3">
          {awardSections.map((section) => (
            <article className="award-column" key={`${section.year}-${section.title}-${section.subtitle}`}>
              <div className="flex items-center justify-between">
                <Award className="size-6 text-accent" />
                <span className="text-xs text-primary-foreground/50">{section.year}</span>
              </div>
              <h2 className="mt-24 font-display text-3xl font-bold">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-primary-foreground/65">{section.subtitle}</p>
              {section.details ? <p className="mt-6 text-sm font-semibold text-primary-foreground/90">{section.details}</p> : null}
              {section.extra ? <p className="mt-3 text-sm leading-7 text-primary-foreground/75">{section.extra}</p> : null}
              {section.linkTo ? (
                <Link to={section.linkTo} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline">
                  {section.linkLabel}
                  <ExternalLink className="size-3" />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
