import Link from "next/link";

export default function WorkflowNavigation() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              Learn the Software{" "}
              <span className="text-grad aq-heading-phrase">
                While Doing the Work
              </span>
            </h1>
            <div className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              <p>
                AgenQ Training Mode shows each step on your screen, right when
                you need it. You do the task and learn as you go.
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
                <a
                  href="/blog/ai-guided-workflows-for-insurance-software/"
                  className="aq-text-link"
                >
                  Read the case study →
                </a>
              </p>
              <p>
                Training Mode is the AgenQ mode for training and onboarding.
                Employees ask how to do a task, and AgenQ points to where to
                click in their insurance software, one step at a time, while
                they complete the real work.
              </p>
            </div>
          </div>
        </section>
        <section
          id="how-training-mode-works"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              How{" "}
              <span className="text-grad aq-heading-phrase">
                Training Mode Works
              </span>
            </h2>
            <div className="aq-copy aq-reading aq-centered mt-6"></div>
            <div className="mt-12 aq-grid aq-grid-3 aq-step-grid">
              <article className="card aq-step-card">
                <span className="aq-step-number  ">1</span>
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="chat"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L4 21l1.1-4.4A8.4 8.4 0 1 1 21 11.5Z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>
                </div>
                <h3 className="aq-card-title">Ask:</h3>
                <div className="aq-step-copy">
                  <p>type or say &quot;How do I issue a certificate?&quot;</p>
                </div>
              </article>
              <article className="card aq-step-card">
                <span className="aq-step-number">2</span>
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="eye"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="aq-card-title">See:</h3>
                <div className="aq-step-copy">
                  <p>
                    AgenQ points to exactly where to click, one step at a time.
                  </p>
                </div>
              </article>
              <article className="card aq-step-card">
                <span className="aq-step-number">3</span>
                <div className="aq-icon-badge" aria-hidden="true">
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
                    <path d="m5 3 14 9-7 1-3 7Z" />
                  </svg>
                </div>
                <h3 className="aq-card-title">Do:</h3>
                <div className="aq-step-copy">
                  <p>
                    you complete the task and learn the software by doing it.
                  </p>
                </div>
              </article>
            </div>
            <div className="aq-copy aq-reading aq-centered mt-9"></div>
          </div>
        </section>
        <section
          id="built-for-onboarding-and-everyday-training"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Built for{" "}
              <span className="text-grad">
                Onboarding and Everyday Training
              </span>
            </h2>
            <div className="mt-12 aq-grid aq-grid-3 aq-card-grid">
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="userPlus"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 21v-2a6 6 0 0 1 12 0v2m4-13v6m-3-3h6" />
                  </svg>
                </div>
                <h3 className="aq-card-title">New hires</h3>
                <div className="aq-copy aq-card-copy">
                  <p>
                    learn by doing real client work from the start, instead of
                    weeks of shadowing.
                  </p>
                </div>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="book"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5.5V21M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z" />
                  </svg>
                </div>
                <h3 className="aq-card-title">Experienced staff</h3>
                <div className="aq-copy aq-card-copy">
                  <p>get the steps for tasks they rarely do.</p>
                </div>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="users"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 21v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m4 10v-2a6 6 0 0 0-3-5.2" />
                  </svg>
                </div>
                <h3 className="aq-card-title">Everyone</h3>
                <div className="aq-copy aq-card-copy">
                  <p>gets help when screens change.</p>
                </div>
              </article>
            </div>
            <div className="aq-copy aq-reading aq-centered mt-9"></div>
          </div>
        </section>
        <section id="you-make-every-change" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              You Make{" "}
              <span className="text-grad aq-heading-phrase">Every Change</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>
                In Training Mode, AgenQ shows the way and your employee does the
                task. Nothing changes in your software unless your employee
                changes it.
              </p>
              <p>
                Want AgenQ to do the task instead?{" "}
                <a
                  href="/features/action-based-execution/"
                  className="aq-text-link"
                >
                  Explore Execution Mode
                </a>
              </p>
            </div>
          </div>
        </section>
        <section
          id="questions-about-training-mode"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Questions About{" "}
              <span className="text-grad aq-heading-phrase">Training Mode</span>
            </h2>
            <div className="aq-reading aq-copy mt-10">
              <div className="aq-faq-list">
                <details className="card aq-faq">
                  <summary>
                    Does Training Mode work inside our insurance software?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Yes. The steps appear on the screen your employee is
                      using, not in a separate video or document.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Does Training Mode change our records?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>No. Your employee makes every change.</p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can it follow our procedures?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Yes. AgenQ uses your approved guided tasks and training
                      material.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Which software does it support?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      EZLynx and Vertafore AMS360 today. See{" "}
                      <Link href="/ezlynx/" className="aq-text-link">
                        AgenQ for EZLynx
                      </Link>{" "}
                      and{" "}
                      <Link href="/ams360/" className="aq-text-link">
                        AgenQ for AMS360
                      </Link>
                      .
                    </p>
                  </div>
                </details>
              </div>
              <div className="aq-after-faq">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
