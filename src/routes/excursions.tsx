import { createFileRoute } from "@tanstack/react-router";
import { Camera, MapPin } from "lucide-react";
export const Route = createFileRoute("/excursions")({head:()=>({meta:[
  {title:"Excursions | CES at SKH Lam Woo"},{name:"description",content:"Five experiential learning excursions for Citizenship, Economics and Society."},{property:"og:title",content:"Excursions | CES at SKH Lam Woo"},{property:"og:description",content:"Learning from Hong Kong beyond the classroom."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
]}),component:ExcursionsPage});
const trips=[
  ["01","Community & Identity Walk","Sham Shui Po","Understanding neighbourhood change through observation and conversation."],
  ["02","Hong Kong Economy in Motion","Central","Tracing the institutions, enterprises and people that shape our economy."],
  ["03","Our Country, Our Connections","West Kowloon","Exploring Hong Kong’s place within the nation through culture and exchange."],
  ["04","Sustainable City Field Study","Victoria Harbour","Investigating how urban choices affect communities and the environment."],
  ["05","Civil Society in Action","Hong Kong","Meeting organisations that turn empathy and responsibility into service."],
];
function ExcursionsPage(){return <div className="site-container page-space"><header className="page-intro"><p className="section-kicker">Field learning · 考察活動</p><h1 className="page-title">The city is our classroom.</h1><p className="page-deck">Five spaces prepared for the photographs and stories of student learning beyond the school gates.</p></header><div className="mt-16 space-y-16">{trips.map((t,i)=><article key={t[0]} className={`trip-story ${i%2?"trip-reverse":""}`}><div className="photo-placeholder"><Camera className="size-8"/><span>Excursion photo {t[0]}</span><small>相片位置</small></div><div className="self-center py-4"><span className="editorial-number">{t[0]}</span><h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">{t[1]}</h2><p className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent"><MapPin className="size-4"/>{t[2]}</p><p className="mt-6 max-w-lg leading-7 text-muted-foreground">{t[3]}</p></div></article>)}</div></div>}
