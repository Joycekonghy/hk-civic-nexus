import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/panel-members")({
  head: () => ({ meta: [
    { title: "Panel Members | CES at SKH Lam Woo" }, { name: "description", content: "Meet the Citizenship, Economics and Society panel at SKH Lam Woo." },
    { property: "og:title", content: "Panel Members | CES at SKH Lam Woo" }, { property: "og:description", content: "The educators leading Citizenship, Economics and Society." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: PanelPage,
});
const members = [
  { name: "Ms. Tsang Ying Ying", role: "Panel Head", mark: "ring" },
  { name: "Ms. Chu Hiu Ying", role: "Panel Member", mark: "gate" },
  { name: "Ms. Ng Chui King, Carol", role: "Panel Member", mark: "eye" },
  { name: "Ms. Yung Ka Yee", role: "Panel Member", mark: "star" },
  { name: "Ms. Leung Bik Kim", role: "Panel Member", mark: "wave" },
];
function Sigil({type}:{type:string}) { return <div className={`sigil sigil-${type}`} aria-hidden="true"><span/><i/></div> }
function PanelPage(){return <div className="site-container page-space">
  <header className="page-intro"><p className="section-kicker">Our educators · 教學團隊</p><h1 className="page-title">The panel</h1><p className="page-deck">Guiding enquiry, widening perspectives and helping students connect ideas to the world beyond school.</p></header>
  <section className="mt-14 border-t border-primary">
    {members.map((m,index)=><article key={m.name} className="member-row"><span className="editorial-number">0{index+1}</span><Sigil type={m.mark}/><div><h2 className="font-display text-2xl font-bold md:text-3xl">{m.name}</h2><p className="mt-2 text-sm uppercase text-muted-foreground">{m.role}</p></div>{index===0&&<span className="role-badge">Panel Head · 科主任</span>}</article>)}
  </section>
</div>}
