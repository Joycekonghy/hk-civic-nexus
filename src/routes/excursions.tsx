import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import crest from "@/assets/hk3.jpg";
import one from "@/assets/excursion_20261004/20260410_1.jpeg";
import two from "@/assets/excursion_20261004/20260410_2.jpeg";
import three from "@/assets/excursion_20261004/20260410_3.jpeg";
import legal1 from "@/assets/excursion_20251110/t2,1.webp";
import legal2 from "@/assets/excursion_20251110/t2.2.webp";
import legal3 from "@/assets/excursion_20251110/t2.3.webp";
import singtao1 from "@/assets/excursion_singtao/singtao1.jpeg";
import singtao2 from "@/assets/excursion_singtao/singtao2.jpeg";
import singtao3 from "@/assets/excursion_singtao/singtao3.jpeg";
import singtao4 from "@/assets/excursion_singtao/singtao4.jpeg";
import station1 from "@/assets/excursion_station/station1.jpeg";
import station2 from "@/assets/excursion_station/station2.jpeg";
import station3 from "@/assets/excursion_station/station3.jpeg";
import merit1 from "@/assets/excursion_merit/merit1.webp";
import merit2 from "@/assets/excursion_merit/merit2.webp";
import merit3 from "@/assets/excursion_merit/merit3.webp";
import merit4 from "@/assets/excursion_merit/merit4.webp";

export const Route = createFileRoute("/excursions")({head:()=>({meta:[
  {title:"Excursions | CES at SKH Lam Woo"},{name:"description",content:"Five experiential learning excursions for Citizenship, Economics and Society."},{property:"og:title",content:"Excursions | CES at SKH Lam Woo"},{property:"og:description",content:"Learning from Hong Kong beyond the classroom."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
]}),component:ExcursionsPage});
const recentGallery=[three,two,one];
const legalGallery=[legal1, legal2, legal3];
const singtaoGallery=[singtao1, singtao2, singtao3, singtao4];
const stationGallery=[station1, station2, station3];
const meritGallery=[merit1, merit2, merit3, merit4];
const highlightGallery=[three,two,one];
const highlights = [
  { date: "2025/12/19", title: "Visit to “Station Rail Voyage”", location: "Station Rail Voyage", description: "A learning visit to a transport-themed experience that helped students connect urban life, public service and everyday decision-making." },
  { date: "2025/11/10", title: "Rule of Law Journey: Guided Tour of Landmarks of the Hong Kong Legal Hub", location: "Hong Kong Legal Hub", description: "A guided exploration of the city’s legal and civic landmarks, linking constitutional values to everyday life in Hong Kong." },
  { date: "2025/12/19", title: "Visit to Sing Tao News Corporation", location: "Sing Tao News Corporation", description: "A learning visit to the newsroom that helped students connect media, communication and public information in Hong Kong." },
  { date: "2022–2023", title: "Merit Award – 2nd Hong Kong Youth National Culture and Tourism Knowledge Contest", location: "Hong Kong", description: "Recognised for strong understanding of Hong Kong’s culture, heritage and tourism development." },
];
function RecentExcursionGallery() {
  const [index, setIndex] = useState(0);
  const goToPrevious = () => setIndex((current) => (current === 0 ? recentGallery.length - 1 : current - 1));
  const goToNext = () => setIndex((current) => (current === recentGallery.length - 1 ? 0 : current + 1));

  return (
    <div className="mb-16 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="grid gap-6 p-5 md:grid-cols-[1.3fr_0.7fr] md:p-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img src={recentGallery[index]} alt="IFEC FinEd Hub visit gallery" className="h-[320px] w-full object-cover md:h-[420px]" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="section-kicker text-accent">Most recent · 最新考察</p>
            <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">Visit to the IFEC FinEd Hub</h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">2026/4/10 · The Mills, Tsuen Wan</p>
            <p className="mt-5 leading-7 text-muted-foreground">Organized by the Investor and Financial Education Council, this visit helped students explore how financial literacy, public trust and everyday decision-making connect to economic life in Hong Kong.</p>
          </div>
          <div className="mt-8 flex items-center justify-between gap-3 rounded-full border border-border p-2">
            <button type="button" onClick={goToPrevious} aria-label="Previous image" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-accent hover:text-accent-foreground"><ChevronLeft className="size-4" /></button>
            <span className="text-sm font-semibold text-muted-foreground">{index + 1} / {recentGallery.length}</span>
            <button type="button" onClick={goToNext} aria-label="Next image" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-accent hover:text-accent-foreground"><ChevronRight className="size-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HighlightSlideshow({
  title,
  date,
  location,
  description,
  index,
  gallery,
}: {
  title: string;
  date: string;
  location: string;
  description: string;
  index: number;
  gallery: string[];
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const isReversed = index % 2 === 1;

  const goToPrevious = () => setSlideIndex((current) => (current === 0 ? gallery.length - 1 : current - 1));
  const goToNext = () => setSlideIndex((current) => (current === gallery.length - 1 ? 0 : current + 1));

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className={`grid gap-6 p-5 md:grid-cols-[0.7fr_1.3fr] md:p-8 ${isReversed ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img src={gallery[slideIndex]} alt={`${title} gallery image ${slideIndex + 1}`} className="h-[260px] w-full object-cover md:h-[300px]" />
          <div className="flex items-center justify-between gap-3 border-t border-border bg-background/80 p-2">
            <button type="button" onClick={goToPrevious} aria-label={`Previous image for ${title}`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-accent hover:text-accent-foreground"><ChevronLeft className="size-4" /></button>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{slideIndex + 1} / {gallery.length}</span>
            <button type="button" onClick={goToNext} aria-label={`Next image for ${title}`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-accent hover:text-accent-foreground"><ChevronRight className="size-4" /></button>
          </div>
        </div>
        <div className="self-center">
          <p className="section-kicker text-accent">Recent highlight · 近期活動</p>
          <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{date} · {location}</p>
          <p className="mt-5 leading-7 text-muted-foreground">{description}</p>
        </div>
      </div>
    </article>
  );
}

function ExcursionsPage() {
  return (
    <div className="site-container page-space">
      <section className="overflow-hidden rounded-[2rem]">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="section-kicker">Field learning · 考察活動</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-none md:text-6xl">The city is our classroom.</h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Five spaces prepared for the photographs and stories of student learning beyond the school gates.
            </p>
          </div>
          <div className="flex items-center justify-center p-6 md:p-10">
            <div className="crest-stage crest-stage-right max-w-[320px]">
              <img src={crest} alt="School crest" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <RecentExcursionGallery />

      <section className="mt-16 space-y-6">
        {highlights.map(({ date, title, location, description }, index) => {
          const gallery = index === 0 ? stationGallery : index === 1 ? legalGallery : index === 2 ? singtaoGallery : meritGallery;
          return (
            <HighlightSlideshow
              key={title}
              title={title}
              date={date}
              location={location}
              description={description}
              index={index}
              gallery={gallery}
            />
          );
        })}
      </section>
    </div>
  );
}
