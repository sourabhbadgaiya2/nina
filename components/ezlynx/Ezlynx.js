import Link from "next/link";

/**
 * AgenQ for EZLynx. Converted 1:1 from the launch build (markup, classes and copy unchanged).
 * Internal links use next/link; everything else is the original markup.
 * Styling: Tailwind utilities + site classes (card, display, aurora, text-grad, shadow-soft)
 * + the page's .aq-* classes from app/aq-pages.css, scoped by the .aq-content wrapper.
 */
export default function Ezlynx() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
           
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              Your Staff Know the Client.
              <br className="hidden lg:block" />{" "}
              <span className="text-grad aq-heading-phrase">
                AgenQ Knows EZLynx.
              </span>
            </h1>
            <div className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              <p>
                AI training and onboarding inside EZLynx. Your team asks
                &quot;How do I…?&quot; and sees the steps right on their screen.
              </p>
            </div>
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
            <div className="aq-definition">
              <p>
                Customer result: onboarding cut from about 90 minutes to about
                15, with about 30% fewer support calls.{" "}
                <Link
                  href="/blog/ai-guided-workflows-for-insurance-software"
                  className="aq-text-link"
                >
                  Read the case study →
                </Link>
              </p>
              <p>
                AgenQ for EZLynx is AI training and onboarding software that
                works inside EZLynx. Insurance agency staff ask how to do a task
                and see each step on their EZLynx screen.
              </p>
            </div>
          </div>
        </section>
        <section id="demo-clip-1" className="aq-demo-section px-5">
          <div className="mx-auto max-w-6xl">
            <figure className="aq-media aq-demo-slot" data-demo-slot="ezlynx-1">
              <div className="aq-media-stage">
                {/* Replace this stage with the approved video embed. */}
                <div className="aq-demo-play" aria-hidden="true">
                  <svg viewBox="0 0 48 48">
                    <circle
                      cx="24"
                      cy="24"
                      r="23"
                      fill="currentColor"
                      opacity=".12"
                    ></circle>
                    <path d="m20 16 14 8-14 8Z" fill="currentColor"></path>
                  </svg>
                </div>
                <p>Demo Clip 1</p>
              </div>
            </figure>
          </div>
        </section>
        <section id="just-ask-agenq" className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Just Ask{" "}
              <span className="text-grad aq-heading-phrase">AgenQ</span>
            </h2>
            <div className="aq-copy aq-reading aq-centered mt-6">
              <p>No videos. No searching. No interrupting a busy colleague.</p>
            </div>
            <div className="mt-12 aq-grid aq-grid-3 aq-card-grid">
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="workflow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="6" rx="1.5"></rect>
                    <rect x="3" y="16" width="6" height="5" rx="1.5"></rect>
                    <rect x="15" y="16" width="6" height="5" rx="1.5"></rect>
                    <path d="M12 9v4m-6 3v-3h12v3"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  &quot;How do I start a home and auto quote?&quot;
                </h3>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="workflow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="6" rx="1.5"></rect>
                    <rect x="3" y="16" width="6" height="5" rx="1.5"></rect>
                    <rect x="15" y="16" width="6" height="5" rx="1.5"></rect>
                    <path d="M12 9v4m-6 3v-3h12v3"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  &quot;How do I add a driver to this policy?&quot;
                </h3>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="workflow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="6" rx="1.5"></rect>
                    <rect x="3" y="16" width="6" height="5" rx="1.5"></rect>
                    <rect x="15" y="16" width="6" height="5" rx="1.5"></rect>
                    <path d="M12 9v4m-6 3v-3h12v3"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  &quot;How do I issue a certificate?&quot;
                </h3>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="workflow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="6" rx="1.5"></rect>
                    <rect x="3" y="16" width="6" height="5" rx="1.5"></rect>
                    <rect x="15" y="16" width="6" height="5" rx="1.5"></rect>
                    <path d="M12 9v4m-6 3v-3h12v3"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  &quot;How do I match this policy download?&quot;
                </h3>
              </article>
            </div>
          </div>
        </section>
        <section
          id="agenq-shows-you-how-or-does-it-for-you"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              AgenQ Shows You How, or{" "}
              <span className="text-grad aq-heading-phrase">
                Does It for You
              </span>
            </h2>
            <div className="mt-12 aq-grid aq-grid-2 aq-mode-pair">
              <article className="aq-mode-panel aurora aq-mode-light">
                <span className="aq-panel-icon" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="cursor"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 3 14 9-7 1-3 7Z"></path>
                  </svg>
                </span>
                <h3 className="display aq-mode-title">Training Mode:</h3>
                <p className="aq-copy aq-mode-copy">
                  you do the task, AgenQ shows the steps.
                </p>
              </article>
              <article className="aq-mode-panel aq-mode-dark">
                <span className="aq-panel-icon" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="workflow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="6" rx="1.5"></rect>
                    <rect x="3" y="16" width="6" height="5" rx="1.5"></rect>
                    <rect x="15" y="16" width="6" height="5" rx="1.5"></rect>
                    <path d="M12 9v4m-6 3v-3h12v3"></path>
                  </svg>
                </span>
                <h3 className="display aq-mode-title">Execution Mode:</h3>
                <p className="aq-copy aq-mode-copy">
                  AgenQ does the task, and a person approves the important
                  steps.
                </p>
              </article>
            </div>
            <div className="aq-copy aq-reading aq-centered mt-9"></div>
          </div>
        </section>
        <section id="demo-clip-2" className="aq-demo-section px-5">
          <div className="mx-auto max-w-6xl">
            <figure className="aq-media aq-demo-slot" data-demo-slot="ezlynx-2">
              <div className="aq-media-stage">
                {/* Replace this stage with the approved video embed. */}
                <div className="aq-demo-play" aria-hidden="true">
                  <svg viewBox="0 0 48 48">
                    <circle
                      cx="24"
                      cy="24"
                      r="23"
                      fill="currentColor"
                      opacity=".12"
                    ></circle>
                    <path d="m20 16 14 8-14 8Z" fill="currentColor"></path>
                  </svg>
                </div>
                <p>Demo Clip 2</p>
              </div>
            </figure>
          </div>
        </section>
        <section
          id="questions-about-agenq-for-ezlynx"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Questions About{" "}
              <span className="text-grad aq-heading-phrase">
                AgenQ for EZLynx
              </span>
            </h2>
            <div className="aq-reading aq-copy mt-10">
              <div className="aq-faq-list">
                <details className="card aq-faq">
                  <summary>
                    Can AgenQ help onboard new employees on EZLynx?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Yes. New hires learn EZLynx by doing real client work from
                      the start, with the steps shown on their screen instead of
                      weeks of shadowing.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can AgenQ train experienced staff too?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Yes. Experienced staff get help with tasks they rarely do,
                      without asking a colleague.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    How is AgenQ different from EZLynx University, Scribe or
                    Loom?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      They teach before or away from the task. AgenQ helps
                      during the task, on the EZLynx screen.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Is AgenQ affiliated with EZLynx or Applied Systems?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>No. AgenQ is independent.</p>
                  </div>
                </details>
              </div>
              <div className="aq-after-faq">
                <p>
                  <Link
                    href="/insurance-software-training#ezlynx"
                    className="aq-text-link"
                  >
                    Compare EZLynx training options
                  </Link>
                </p>
                <p>
                  <Link
                    href="/blog/onboard-new-csr-ezlynx"
                    className="aq-text-link"
                  >
                    How to onboard a new CSR on EZLynx →
                  </Link>
                </p>
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
                <p>
                  Related:{" "}
                  <Link href="/solutions/insurance" className="aq-text-link">
                    AgenQ for Insurance
                  </Link>{" "}
                  ·{" "}
                  <Link href="/ams360" className="aq-text-link">
                    AgenQ for AMS360
                  </Link>
                </p>
                <p className="aq-disclaimer">
                  AgenQ is an independent company and is not affiliated with,
                  endorsed by or sponsored by Applied Systems or EZLynx. EZLynx
                  and related marks belong to their respective owners.
                </p>
                <p>
                  <Link className="aq-text-link" href="/resources/faq">
                    More questions? See all FAQs →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
