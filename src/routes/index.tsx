import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Globe2, Landmark, Users } from "lucide-react";
import crest from "@/assets/school-crest.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Citizenship, Economics & Society | SKH Lam Woo" },
    { name: "description", content: "Explore Citizenship, Economics and Society at SKH Lam Woo Memorial Secondary School." },
    { property: "og:title", content: "Citizenship, Economics & Society | SKH Lam Woo" },
    { property: "og:description", content: "A bilingual learning community for informed and responsible citizens." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

const pillars = [
  { icon: Users, number: "01", title: "Personal & Social Development", zh: "個人及社會發展" },
  { icon: Landmark, number: "02", title: "Hong Kong & Our Country", zh: "香港與國家" },
  { icon: BookOpen, number: "03", title: "Economic Activities", zh: "經濟活動" },
  { icon: Globe2, number: "04", title: "Global Issues", zh: "全球議題" },
];

function HomePage() {
  return <>
    <section className="hero-band">
      <div className="site-container relative grid min-h-[650px] items-center gap-12 py-16 md:grid-cols-[1.45fr_.55fr] md:py-24">
        <div>
          <p className="section-kicker text-accent">SKH Lam Woo Memorial Secondary School</p>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.08] text-primary-foreground sm:text-6xl lg:text-7xl">Citizenship,<br/><span className="text-highlight">Economics</span> & Society</h1>
          <p className="mt-6 font-cjk text-2xl font-semibold text-primary-foreground/85 sm:text-3xl">公民、經濟與社會科</p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-primary-foreground/72">Equipping students to understand our city, our country and our changing world — and to participate with insight, empathy and responsibility.</p>
          <Link to="/implementation" className="mt-9 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-semibold text-primary-foreground">Discover our approach <ArrowRight className="size-4" /></Link>
        </div>
        <div className="crest-stage"><img src={crest.url} alt="SKH Lam Woo Memorial Secondary School crest" className="w-full object-contain" /></div>
        <div className="harbour-rule" aria-hidden="true" />
      </div>
    </section>

    <section className="site-container py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
        <div><p className="section-kicker">Our subject · 本科簡介</p><h2 className="section-title mt-5">Learning to read the world.</h2></div>
        <div className="bilingual-copy"><p>Citizenship, Economics and Society equips students with knowledge and understanding of personal and social development, Hong Kong and our country, economic activities, and global issues. Through the study of contemporary issues, students develop thinking and enquiry skills, as well as positive values and attitudes, preparing them to become informed and responsible citizens.</p><p className="font-cjk">公民、經濟與社會科讓學生認識個人及社會發展、香港與國家、經濟活動及全球議題。透過探討不同的當代議題，課程培養學生的思考及探究能力，以及正面的價值觀和態度，幫助他們成為有識見和負責任的公民。</p></div>
      </div>
    </section>

    <section className="border-y border-border bg-secondary">
      <div className="site-container py-16 md:py-20"><p className="section-kicker">Four lenses · 四個視野</p><div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{pillars.map(({icon: Icon,...p}) => <article key={p.number} className="pillar"><div className="flex items-center justify-between"><span className="editorial-number">{p.number}</span><Icon className="size-5 text-accent" /></div><h3 className="mt-12 font-display text-xl font-bold leading-snug">{p.title}</h3><p className="mt-3 font-cjk text-sm text-muted-foreground">{p.zh}</p></article>)}</div></div>
    </section>

    <section className="site-container grid gap-8 py-20 md:grid-cols-2 md:py-28">
      <Link to="/excursions" className="feature-link bg-primary text-primary-foreground"><span className="section-kicker text-accent">Beyond the classroom</span><span className="mt-16 font-display text-4xl font-bold">Five journeys through Hong Kong</span><span className="mt-8 inline-flex items-center gap-2 text-sm">View excursions <ArrowRight className="size-4" /></span></Link>
      <Link to="/panel-members" className="feature-link border border-border bg-card"><span className="section-kicker">The people behind CES</span><span className="mt-16 font-display text-4xl font-bold">Meet our panel</span><span className="mt-8 inline-flex items-center gap-2 text-sm">Panel members <ArrowRight className="size-4" /></span></Link>
    </section>
  </>;
}
