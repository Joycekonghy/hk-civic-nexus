import { createFileRoute } from "@tanstack/react-router";
import crest from "@/assets/hk4.jpg";
import carol from "@/assets/carol.jpg";
import chy from "@/assets/chy.jpg";
import lbk from "@/assets/lbk.jpg";
import tyy from "@/assets/tyy.jpg";
import yky from "@/assets/yky.jpg";

export const Route = createFileRoute("/panel-members")({
  head: () => ({ meta: [
    { title: "Panel Members | CES at SKH Lam Woo" }, { name: "description", content: "Meet the Citizenship, Economics and Society panel at SKH Lam Woo." },
    { property: "og:title", content: "Panel Members | CES at SKH Lam Woo" }, { property: "og:description", content: "The educators leading Citizenship, Economics and Society." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: PanelPage,
});
const members = [
  { name: "Ms. Tsang Ying Ying", role: "Panel Head", image: tyy },
  { name: "Ms. Chu Hiu Ying", role: "Panel Member", image: chy },
  { name: "Ms. Ng Chui King, Carol", role: "Panel Member", image: carol },
  { name: "Ms. Yung Ka Yee", role: "Panel Member", image: yky },
  { name: "Ms. Leung Bik Kim", role: "Panel Member", image: lbk },
] as const;

function MemberPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border bg-muted shadow-sm md:h-20 md:w-20">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function PanelPage(){return <div className="site-container page-space">
  <section className="overflow-hidden rounded-[2rem]">
    <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col justify-center p-6 md:p-10">
        <p className="section-kicker">Our educators · 教學團隊</p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-none">The panel</h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Guiding enquiry, widening perspectives and helping students connect ideas to the world beyond school.
        </p>
      </div>
      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="crest-stage crest-stage-soft max-w-[320px]">
          <img src={crest} alt="School crest" className="w-full object-contain" />
        </div>
      </div>
    </div>
  </section>
  <section className="mt-14 border-t border-primary">
    {members.map((m,index)=><article key={m.name} className="member-row"><span className="editorial-number">0{index+1}</span><MemberPhoto src={m.image} alt={m.name} /><div><h2 className="font-display text-2xl font-bold md:text-2xl">{m.name}</h2><p className="mt-2 text-sm uppercase text-muted-foreground">{m.role}</p></div>{index===0&&<span className="role-badge">Panel Head · 科主任</span>}</article>)}
  </section>
</div>}
