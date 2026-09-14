import { createFileRoute } from "@tanstack/react-router";
import crest from "@/assets/hk5.jpg";
import implementation2 from "@/assets/implementation/veg3.png";
import implementation1 from "@/assets/implementation/veg4.png";
import implementation3 from "@/assets/implementation/vege-1.png";
import implementation4 from "@/assets/implementation/vegepic-2.png";

export const Route = createFileRoute("/implementation")({
  head: () => ({
    meta: [
      { title: "Learning Approach | CES at SKH Lam Woo" },
      { name: "description", content: "How CES connects classroom knowledge with research, media and fieldwork." },
      { property: "og:title", content: "Learning Approach | CES at SKH Lam Woo" },
      { property: "og:description", content: "Classroom knowledge applied through research, media and project work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImplementationPage,
});

const implementationGallery = [
  { src: implementation1, span: "md:col-span-2" },
  { src: implementation2, span: "" },
  { src: implementation3, span: "" },
  { src: implementation4, span: "md:col-span-2" },
];

function ImplementationPage() {
  return (
    <div className="page-space">
      <div className="site-container">
        <section className="overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="page-intro">
                <p className="section-kicker">From knowing to doing · 知行合一</p>
                <h1 className="page-title max-w-[12ch] text-[clamp(2.5rem,5vw,4.2rem)]">Implementations</h1>
                <p className="page-deck text-[1rem] leading-7">
                  We follow a philosophy that emphasises not only knowledge acquisition but also its meaningful application in real-world contexts.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 md:p-10">
              <div className="crest-stage crest-stage-right max-w-[320px]">
                <img src={crest} alt="School crest" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="section-kicker">In practice</p>
              <h2 className="mt-5 font-display text-2xl font-bold md:text-4xl">From notes to publication.</h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                We actively promote and foster an environment in which students are not only imbibers of information but also its propagators. Our students have consistently contributed their research and project work to school’s scholarly magazines as evidence of this philosophy in action. Furthermore, they have taken the initiative to create and distribute informative videos on various NGO platforms that reflect their acquired knowledge. This section details the external accolades and awards that our students have earned as a result of their abilities and dedication.
              </p>
            </div>
            <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
              {implementationGallery.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className={`overflow-hidden rounded-[1.5rem] border border-border bg-muted ${item.span}`}
                >
                  <img
                    src={item.src}
                    alt={`Implementation showcase ${index + 1}`}
                    className={`w-full object-cover ${item.span ? "h-[220px] md:h-[300px]" : "h-[260px] md:h-[360px]"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
