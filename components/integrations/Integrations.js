import Link from "next/link";

/**
 * Integrations: converted 1:1 from the launch build (markup, classes and copy unchanged).
 * Internal links use next/link. Styling: Tailwind utilities + site classes + app/aq-pages.css (.aq-content wrapper).
 */
export default function Integrations() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              Supported{" "}
              <span className="text-grad aq-heading-phrase">
                Insurance Software
              </span>
            </h1>
            <div className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              <p>
                AgenQ works inside the insurance software your team already
                uses. Nothing is installed in your agency management system.
              </p>
            </div>
          </div>
        </section>
        <section id="ezlynx" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              <span className="text-grad aq-heading-phrase">EZLynx</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>
                AI training and onboarding inside EZLynx. Staff see each step on
                their screen for quotes, policy changes, certificates and more.
              </p>
              <p>
                <Link href="/ezlynx" className="aq-text-link">
                  Explore AgenQ for EZLynx
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section
          id="vertafore-ams360"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Vertafore{" "}
              <span className="text-grad aq-heading-phrase">AMS360</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>
                AI training and onboarding inside AMS360. Ask the AgenQ team to
                confirm support for the specific AMS360 and AgencyOne screens
                your team uses.
              </p>
              <p>
                <Link href="/ams360" className="aq-text-link">
                  Explore AgenQ for AMS360
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section id="more-software-coming" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              More{" "}
              <span className="text-grad aq-heading-phrase">
                Software Coming
              </span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>
                Using a different agency management system? Tell us which one at{" "}
                <a href="mailto:founder@agenq.com" className="aq-text-link">
                  founder@agenq.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        <section
          id="see-agenq-inside-your-software"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              See AgenQ{" "}
              <span className="text-grad aq-heading-phrase">
                Inside Your Software
              </span>
            </h2>
            <div className="aq-copy aq-reading aq-centered mt-10">
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 aq-cta-row">
                <a
                  href="https://koalendar.com/e/meet-with-varun-mishra?duration=30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center rounded-full border border-line bg-paper px-7 text-[15px] font-medium text-ink shadow-soft transition-all duration-200 hover:border-brand-2/35"
                >
                  Book a Meeting
                </a>
              </div>
              <p className="aq-disclaimer">
                AgenQ is an independent company and is not affiliated with
                Applied Systems, EZLynx or Vertafore.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
