/**
 * About: converted 1:1 from the launch build (markup, classes and copy unchanged).
 * Internal links use next/link. Styling: Tailwind utilities + site classes + app/aq-pages.css (.aq-content wrapper).
 */
export default function About() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              About
              {' '}
              <span className="text-grad aq-heading-phrase">AgenQ</span>
            </h1>
            <div className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              <p>AgenQ is AI training and onboarding software for insurance agencies and brokerages. Staff ask how to do a task and AgenQ shows each step on their screen inside EZLynx or AMS360. In Execution Mode, AgenQ can complete approved tasks, with a person approving the important steps.</p>
            </div>
            <div className="aq-definition">
              <p>AgenQ provides in app AI training.</p>
            </div>
          </div>
        </section>
        <section id="why-we-built-agenq" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Why We
              {' '}
              <span className="text-grad aq-heading-phrase">Built AgenQ</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>Insurance software already has every road a team needs. People need clear directions. Employees know the task, but not how to do it in the software, so they search, wait for a colleague or guess. We built AgenQ to put the answer on the screen, at the moment it&apos;s needed.</p>
              <p>We started with insurance because mistakes cost more here, and because agency teams spend a large part of every week learning and relearning their software.</p>
            </div>
          </div>
        </section>
        <section id="founder" className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              <span className="text-grad aq-heading-phrase">Founder</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>
                <strong>Varun Mishra, Founder and CEO.</strong>
                {' '}
                15 years in enterprise software, including experience at MediaKind, formerly Ericsson Media, across engineering, pre sales, sales and product. Varun has spent his career watching how people actually use complex enterprise software, and where they get stuck. Repeat founder.
              </p>
            </div>
          </div>
        </section>
        <section id="backed-by" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Backed
              {' '}
              <span className="text-grad aq-heading-phrase">By</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>NEXT Canada (NEXT AI) · MaRS · MARL · NEC X</p>
            </div>
          </div>
        </section>
        <section id="where-we-are" className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Where
              {' '}
              <span className="text-grad aq-heading-phrase">We Are</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>Toronto and Montreal, Canada. Serving insurance teams in the United States and Canada.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              <span className="text-grad aq-heading-phrase">Contact</span>
            </h2>
            <div className="aq-copy aq-reading aq-centered mt-10">
              <p>
                <a href="mailto:founder@agenq.com" className="aq-text-link">founder@agenq.com</a>
                {' '}
                · +1 (416) 316 7435
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 aq-cta-row">
                <a href="https://koalendar.com/e/meet-with-varun-mishra?duration=30" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center rounded-full border border-line bg-paper px-7 text-[15px] font-medium text-ink shadow-soft transition-all duration-200 hover:border-brand-2/35">
                  Book a Meeting
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
