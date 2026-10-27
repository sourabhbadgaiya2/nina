import Link from "next/link";

/**
 * Security: converted 1:1 from the launch build (markup, classes and copy unchanged).
 * Internal links use next/link. Styling: Tailwind utilities + site classes + app/aq-pages.css (.aq-content wrapper).
 */
export default function Security() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              You Stay{" "}
              <span className="text-grad aq-heading-phrase">in Control</span>
            </h1>
            <div className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              <p>
                AgenQ only does what you allow, and you can see everything it
                did.
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
                You decide who uses AgenQ, what it can do and which steps need
                approval.
              </p>
            </div>
          </div>
        </section>
        <section id="the-controls-you-have" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              The{" "}
              <span className="text-grad aq-heading-phrase">
                Controls You Have
              </span>
            </h2>
            <div className="mt-12 aq-grid aq-grid-5 aq-card-grid">
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
                    <circle cx="9" cy="8" r="3"></circle>
                    <path d="M3 21v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m4 10v-2a6 6 0 0 0-3-5.2"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">You choose who uses it.</h3>
                <div className="aq-copy aq-card-copy">
                  <p>Set permissions for each person.</p>
                </div>
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
                <h3 className="aq-card-title">You choose the tasks.</h3>
                <div className="aq-copy aq-card-copy">
                  <p>
                    Decide which tasks AgenQ can help with, and which it can
                    complete.
                  </p>
                </div>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="check"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="m8 12 2.8 2.8L16 9.5"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  You approve the important steps.
                </h3>
                <div className="aq-copy aq-card-copy">
                  <p>
                    Require a person&apos;s approval before important actions
                    are completed.
                  </p>
                </div>
              </article>
              <article className="card aq-feature-card">
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
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="aq-card-title">You see everything.</h3>
                <div className="aq-copy aq-card-copy">
                  <p>Every step and change is recorded in audit logs.</p>
                </div>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="lock"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="10" width="14" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">You control your data.</h3>
                <div className="aq-copy aq-card-copy">
                  <p>
                    Data is stored in the United States and kept for 90 days.
                    AgenQ only sees your EZLynx or AMS360 window.
                  </p>
                </div>
              </article>
            </div>
            <div className="aq-copy aq-reading aq-centered mt-9"></div>
          </div>
        </section>
        <section
          id="how-control-works-in-each-mode"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              How Control Works{" "}
              <span className="text-grad aq-heading-phrase">in Each Mode</span>
            </h2>
            <div className="mt-12 aq-grid aq-grid-2 aq-card-grid">
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
                <h3 className="aq-card-title">Training Mode:</h3>
                <div className="aq-copy aq-card-copy">
                  <p>
                    AgenQ shows the steps. Your employee makes every change.
                  </p>
                </div>
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
                <h3 className="aq-card-title">Execution Mode:</h3>
                <div className="aq-copy aq-card-copy">
                  <p>
                    AgenQ completes only the tasks you approve, with a person
                    approving the important steps.
                  </p>
                </div>
              </article>
            </div>
            <div className="aq-copy aq-reading aq-centered mt-9"></div>
          </div>
        </section>
        <section id="deployment-options" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Deployment{" "}
              <span className="text-grad aq-heading-phrase">Options</span>
            </h2>
            <div className="aq-copy mt-10">
              <div
                className="aq-table-scroll"
                tabIndex="0"
                role="region"
                aria-label="Information table"
              >
                <table className="aq-table ">
                  <thead>
                    <tr>
                      <th scope="col">Plan</th>
                      <th scope="col">Deployment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Starter</th>
                      <td>Secure multi tenant</td>
                    </tr>
                    <tr>
                      <th scope="row">Growth</th>
                      <td>Secure multi tenant</td>
                    </tr>
                    <tr>
                      <th scope="row">Enterprise</th>
                      <td>Private, isolated deployment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <Link href="/pricing" className="aq-text-link">
                  See plans
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section
          id="security-questions"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Security{" "}
              <span className="text-grad aq-heading-phrase">Questions</span>
            </h2>
            <div className="aq-reading aq-copy mt-10">
              <div className="aq-faq-list">
                <details className="card aq-faq">
                  <summary>
                    What do staff need to install?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Staff add the AgenQ Google Chrome extension. Nothing is
                      installed inside EZLynx or AMS360.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can AgenQ see everything on our screen?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      No. AgenQ only sees the EZLynx or AMS360 window. It does
                      not see other applications, tabs or anything else on your
                      screen.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Where is our data stored, and for how long?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      AgenQ stores data in the United States and keeps it for 90
                      days.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can AgenQ change our records without approval?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      In Training Mode, your employee makes every change. In
                      Execution Mode, AgenQ completes only approved tasks, and
                      you decide which steps need a person&apos;s approval.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can we control who uses AgenQ?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>Yes, with permissions.</p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can we see what AgenQ did?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>Yes. Audit logs record every step and change.</p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can AgenQ run in a private environment?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>Yes, on the Enterprise plan.</p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Who do we contact about security?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Email{" "}
                      <a
                        href="mailto:founder@agenq.com"
                        className="aq-text-link"
                      >
                        founder@agenq.com
                      </a>{" "}
                      or book a meeting.
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
