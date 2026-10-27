import Link from "next/link";

/**
 * InsuranceSoftwareTraining: converted 1:1 from the launch build (markup, classes and copy unchanged).
 * Internal links use next/link. Styling: Tailwind utilities + site classes + app/aq-pages.css (.aq-content wrapper).
 */
export default function InsuranceSoftwareTraining() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              Insurance Software{" "}
              <span className="text-grad">Training Options Compared</span>
            </h1>
            <p className="aq-definition aq-byline">
              <a
                className="aq-text-link"
                href="https://www.linkedin.com/in/mishravarun/"
              >
                Varun Mishra, Founder and CEO, AgenQ
              </a>{" "}
              · Published: October 25, 2026 · Last updated: October 25, 2026
            </p>
            <div className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              <p>
                Insurance agencies can train staff through vendor courses,
                consultants, guides and videos, learning platforms, general AI
                tools and in app AI training. Compare when help arrives, where
                staff use it, and how the approach fits your procedures. A
                course can teach the basics; help during work supports the
                moment someone gets stuck.
              </p>
            </div>
          </div>
        </section>
        <nav className="aq-jump" aria-label="Jump to section">
          <span>Jump to</span>
          <a href="#the-six-options-at-a-glance">All Options</a>
          <a href="#ezlynx">EZLynx</a>
          <a href="#ams360">AMS360</a>
          <a href="#how-to-choose">How to Choose</a>
          <a href="#faq">FAQ</a>
        </nav>
        <section
          id="the-short-answer"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="aq-short-answer card aq-copy">
              <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
                The{" "}
                <span className="text-grad aq-heading-phrase">
                  Short Answer
                </span>
              </h2>
              <p>
                There are six ways to train staff on insurance software like
                EZLynx and AMS360: vendor training, consultants, guide and video
                tools, learning platforms, general AI tools and in app AI
                training.
              </p>
              <p>
                Most agencies combine two or three. The biggest difference is
                when help arrives: before the work, away from it, or during it.
              </p>
            </div>
          </div>
        </section>
        <section
          id="the-six-options-at-a-glance"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              The Six Options{" "}
              <span className="text-grad aq-heading-phrase">at a Glance</span>
            </h2>
            <div className="aq-copy mt-10">
              <div
                className="aq-table-scroll"
                tabIndex="0"
                role="region"
                aria-label="Insurance software training options comparison"
              >
                <table className="aq-table aq-comparison">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span className="aq-sr">Option</span>
                      </th>
                      <th scope="col">Vendor training</th>
                      <th scope="col">Consultants</th>
                      <th scope="col">Guides and videos</th>
                      <th scope="col">Learning platforms</th>
                      <th scope="col">General AI tools</th>
                      <th scope="col">In app AI training (AgenQ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <strong>Examples</strong>
                      </th>
                      <td>EZLynx webinars, Vertafore University, NetVU</td>
                      <td>Kite Technology Group</td>
                      <td>Scribe, Guidde, Loom</td>
                      <td>TalentLMS</td>
                      <td>Vertafore Coach Agent, ChatGPT</td>
                      <td>AgenQ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <strong>When help arrives</strong>
                      </th>
                      <td>Scheduled or on demand</td>
                      <td>Scheduled</td>
                      <td>When you find the guide</td>
                      <td>When a course is assigned</td>
                      <td>When you ask</td>
                      <td>When you ask, during the task</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <strong>Where</strong>
                      </th>
                      <td>Webinar or course</td>
                      <td>Session</td>
                      <td>Separate guide or video</td>
                      <td>Learning portal</td>
                      <td>Chat window</td>
                      <td>On your software screen</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <strong>Uses your procedures</strong>
                      </th>
                      <td>No</td>
                      <td>If tailored</td>
                      <td>If you record them</td>
                      <td>If you build courses</td>
                      <td>
                        Coach Agent if set up; ChatGPT if shared or connected
                      </td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <strong>Can do the task</strong>
                      </th>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No for Coach Agent Q&amp;A; other tools vary</td>
                      <td>Yes, with approvals</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <strong>Cost</strong>
                      </th>
                      <td>Often included; some paid options</td>
                      <td>Per session</td>
                      <td>Free and paid plans</td>
                      <td>Subscription</td>
                      <td>Varies</td>
                      <td>From $199/month</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <strong>Best for</strong>
                      </th>
                      <td>Basics</td>
                      <td>Team programs</td>
                      <td>Documenting procedures</td>
                      <td>Tracking completion</td>
                      <td>Quick answers</td>
                      <td>Learning by doing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <em>Prices change. Check each provider&apos;s site.</em>
              </p>
            </div>
          </div>
        </section>
        <section id="1-vendor-training" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <article className="card aq-option aq-copy">
              <h2 className="display text-[1.85rem]">
                <span className="aq-heading-phrase">1.</span>{" "}
                <span className="text-grad aq-heading-phrase">
                  Vendor Training
                </span>
              </h2>
              <p>
                EZLynx offers self guided training, interactive training
                webinars, on demand Customer Success Workshops and weekly office
                hours with a product expert. One on one training is available
                for purchase.{" "}
                <a
                  href="https://www.ezlynx.com/why-ezlynx/onboarding-support/"
                  className="aq-text-link"
                >
                  EZLynx onboarding and support
                </a>
                .
              </p>
              <p>
                Vertafore and NetVU provide training resources for AMS360. Check
                each provider for current access and course offerings.
              </p>
              <div className="aq-grid aq-grid-2 aq-option-details">
                <p>
                  <strong>Best for:</strong> learning the basics.
                </p>
                <p>
                  <strong>Limit:</strong> general training, away from the real
                  task.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="2-consultants" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <article className="card aq-option aq-copy">
              <h2 className="display text-[1.85rem]">
                <span className="aq-heading-phrase">2.</span>{" "}
                <span className="text-grad aq-heading-phrase">Consultants</span>
              </h2>
              <p>
                Outside trainers, such as Kite Technology Group for AMS360, run
                tailored sessions.
              </p>
              <div className="aq-grid aq-grid-2 aq-option-details">
                <p>
                  <strong>Best for:</strong> a structured team program.
                </p>
                <p>
                  <strong>Limit:</strong> paid per session, and every new hire
                  means booking again.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="3-guide-and-video-tools" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <article className="card aq-option aq-copy">
              <h2 className="display text-[1.85rem]">
                <span className="aq-heading-phrase">3.</span>{" "}
                <span className="text-grad">Guide and Video Tools</span>
              </h2>
              <p>
                Tools such as Scribe, Guidde and Loom can create guides or
                screen recordings. Features and plans vary by provider.
              </p>
              <div className="aq-grid aq-grid-2 aq-option-details">
                <p>
                  <strong>Best for:</strong> documenting your procedures.
                </p>
                <p>
                  <strong>Limit:</strong> someone must create and update them,
                  and staff must find the right one.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="4-learning-platforms" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <article className="card aq-option aq-copy">
              <h2 className="display text-[1.85rem]">
                <span className="aq-heading-phrase">4.</span>{" "}
                <span className="text-grad aq-heading-phrase">
                  Learning Platforms
                </span>
              </h2>
              <p>
                Tools like TalentLMS assign courses and track who finished them.
              </p>
              <div className="aq-grid aq-grid-2 aq-option-details">
                <p>
                  <strong>Best for:</strong> tracking training.
                </p>
                <p>
                  <strong>Limit:</strong> you create the content, and learning
                  happens away from the task.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="5-general-ai-tools" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <article className="card aq-option aq-copy">
              <h2 className="display text-[1.85rem]">
                <span className="aq-heading-phrase">5.</span>{" "}
                <span className="text-grad aq-heading-phrase">
                  General AI Tools
                </span>
              </h2>
              <p>
                Vertafore Velocity Coach Agent, launched in October 2026,
                answers how to questions inside AMS360 and Sagitta, using
                Vertafore&apos;s documentation and, if set up, your
                agency&apos;s procedures.{" "}
                <a
                  href="https://www.vertafore.com/resources/press-releases/vertafore-launches-velocity-coach-agent-drive-employee-proficiency"
                  className="aq-text-link"
                >
                  Vertafore&apos;s announcement
                </a>
                .
              </p>
              <p>
                ChatGPT explains general steps and can work with shared images
                or screen access in supported experiences. Access to an
                agency&apos;s own procedures depends on what is shared or
                connected.{" "}
                <a
                  href="https://learn.chatgpt.com/docs/computer-use"
                  className="aq-text-link"
                >
                  Official OpenAI computer use documentation
                </a>
                .
              </p>
              <p>
                Some vendor AI tools can support processes such as policy intake
                or policy checking. These tools focus on defined processes
                rather than employee training. Availability varies by provider.
              </p>
              <div className="aq-grid aq-grid-2 aq-option-details">
                <p>
                  <strong>Best for:</strong> quick answers.
                </p>
                <p>
                  <strong>Limit:</strong> capabilities, access and approvals
                  vary by tool.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section
          id="6-in-app-ai-training-agenq"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <article className="card aq-option aq-copy">
              <h2 className="display text-[1.85rem]">
                <span className="aq-heading-phrase">6.</span>{" "}
                <span className="text-grad">In App AI Training (AgenQ)</span>
              </h2>
              <p>
                AgenQ is AI training and onboarding software for insurance
                agencies and brokerages. Staff ask how to do a task and AgenQ
                shows each step on their screen inside EZLynx or AMS360. In
                Execution Mode, AgenQ can complete approved tasks, with a person
                approving the important steps.
              </p>
              <p>
                See the results:{" "}
                <Link
                  href="/blog/ai-guided-workflows-for-insurance-software"
                  className="aq-text-link"
                >
                  How AgenQ cut onboarding time by 6X →
                </Link>
              </p>
              <div className="aq-grid aq-grid-2 aq-option-details">
                <p>
                  <strong>Best for:</strong> onboarding through real work, and
                  help with rare tasks.
                </p>
                <p>
                  <strong>Limit:</strong> supports EZLynx and AMS360 today, and
                  workflows need setup.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="ezlynx" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              EZLynx{" "}
              <span className="text-grad aq-heading-phrase">
                Training Options
              </span>
            </h2>
            <div className="mt-12 aq-grid aq-grid-4 aq-card-grid">
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="app"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="M3 9h18M7 6.5h.01m3 0h.01M8 13h8m-8 3h5"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">EZLynx:</h3>
                <div className="aq-copy aq-card-copy">
                  <p>
                    self guided training, webinars, workshops and weekly office
                    hours
                  </p>
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
                    <circle cx="9" cy="8" r="3"></circle>
                    <path d="M3 21v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m4 10v-2a6 6 0 0 0-3-5.2"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">Consultants:</h3>
                <div className="aq-copy aq-card-copy">
                  <p>tailored sessions</p>
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
                    <path d="M12 5.5V21M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">Scribe, Guidde or Loom:</h3>
                <div className="aq-copy aq-card-copy">
                  <p>your own guides and videos</p>
                </div>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="app"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="M3 9h18M7 6.5h.01m3 0h.01M8 13h8m-8 3h5"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  <Link href="/ezlynx" className="aq-text-link">
                    AgenQ for EZLynx
                  </Link>
                  :
                </h3>
                <div className="aq-copy aq-card-copy">
                  <p>steps on the EZLynx screen, during real work</p>
                </div>
              </article>
            </div>
            <div className="aq-copy aq-reading aq-centered mt-9">
              <p>
                <Link
                  href="/blog/onboard-new-csr-ezlynx"
                  className="aq-text-link"
                >
                  How to onboard a new CSR on EZLynx →
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section id="ams360" className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              AMS360{" "}
              <span className="text-grad aq-heading-phrase">
                Training Options
              </span>
            </h2>
            <div className="mt-12 aq-grid aq-grid-5 aq-card-grid">
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
                    <path d="M12 5.5V21M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  Vertafore University and NetVU:
                </h3>
                <div className="aq-copy aq-card-copy">
                  <p>courses and certification</p>
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
                    <circle cx="9" cy="8" r="3"></circle>
                    <path d="M3 21v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m4 10v-2a6 6 0 0 0-3-5.2"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">Kite Technology Group:</h3>
                <div className="aq-copy aq-card-copy">
                  <p>role based training</p>
                </div>
              </article>
              <article className="card aq-feature-card">
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
                    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L4 21l1.1-4.4A8.4 8.4 0 1 1 21 11.5Z"></path>
                    <path d="M8 9h8M8 13h5"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  Vertafore Velocity Coach Agent:
                </h3>
                <div className="aq-copy aq-card-copy">
                  <p>AI answers to how to questions</p>
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
                    <path d="M12 5.5V21M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">Scribe, Guidde or Loom:</h3>
                <div className="aq-copy aq-card-copy">
                  <p>your own guides and videos</p>
                </div>
              </article>
              <article className="card aq-feature-card">
                <div className="aq-icon-badge" aria-hidden="true">
                  <svg
                    className="aq-icon"
                    data-icon="app"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="M3 9h18M7 6.5h.01m3 0h.01M8 13h8m-8 3h5"></path>
                  </svg>
                </div>
                <h3 className="aq-card-title">
                  <Link href="/ams360" className="aq-text-link">
                    AgenQ for AMS360
                  </Link>
                  :
                </h3>
                <div className="aq-copy aq-card-copy">
                  <p>steps on the AMS360 screen, including the new interface</p>
                </div>
              </article>
            </div>
            <div className="aq-copy aq-reading aq-centered mt-9">
              <p>
                Moving to the new AMS360 interface? Ask any provider whether its
                training covers the new screens.
              </p>
            </div>
          </div>
        </section>
        <section id="how-to-choose" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              How to <span className="text-grad aq-heading-phrase">Choose</span>
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
                      <th scope="col">Your main need</th>
                      <th scope="col">Best option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Learn the basics</th>
                      <td>Vendor training</td>
                    </tr>
                    <tr>
                      <th scope="row">Train a whole new team</th>
                      <td>Consultant</td>
                    </tr>
                    <tr>
                      <th scope="row">Document your procedures</th>
                      <td>Guide and video tools</td>
                    </tr>
                    <tr>
                      <th scope="row">Track who completed training</th>
                      <td>Learning platform</td>
                    </tr>
                    <tr>
                      <th scope="row">Quick answers inside AMS360</th>
                      <td>Vertafore Velocity Coach Agent</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Automate policy intake or policy checking
                      </th>
                      <td>Vendor automation tools, where available</td>
                    </tr>
                    <tr>
                      <th scope="row">New hires learning on the job</th>
                      <td>AgenQ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Help with rare tasks, when they come up
                      </th>
                      <td>AgenQ</td>
                    </tr>
                    <tr>
                      <th scope="row">One approach for EZLynx and AMS360</th>
                      <td>AgenQ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Frequently Asked{" "}
              <span className="text-grad aq-heading-phrase">Questions</span>
            </h2>
            <div className="aq-reading aq-copy mt-10">
              <div className="aq-faq-list">
                <details className="card aq-faq">
                  <summary>
                    What is the best way to train employees on insurance
                    software?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Combine methods: vendor training for basics, plus help
                      during real tasks. People remember steps better when they
                      learn them while doing the work.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    What training does EZLynx offer?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      EZLynx offers self guided training, interactive webinars,
                      Customer Success Workshops and weekly office hours. One on
                      one training is available for purchase.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    What training is available for AMS360?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Vertafore University, NetVU courses, consultants such as
                      Kite Technology Group, Vertafore Velocity Coach Agent and
                      AgenQ for AMS360.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Is there an AI tool that trains employees inside insurance
                    software?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      Yes. AgenQ shows each step on screen inside EZLynx and
                      AMS360. Vertafore Velocity Coach Agent answers AMS360 how
                      to questions.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    What is the difference between an AI chatbot and in app AI
                    training?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      A chatbot gives you text to read. In app AI training shows
                      the next step on your screen, during the task.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can we use more than one option?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>Yes. Most agencies do.</p>
                  </div>
                </details>
              </div>
              <div className="aq-after-faq"></div>
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
              <p>
                Show us a task your team struggles to learn. We&apos;ll show you
                AgenQ teaching it, step by step.
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
            </div>
          </div>
        </section>
        <section id="sources" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="aq-reading aq-copy aq-sources">
              <h2 className="font-semibold text-ink">Sources</h2>
              <ul>
                <li>
                  <a
                    href="https://www.ezlynx.com/why-ezlynx/onboarding-support/"
                    className="aq-text-link"
                  >
                    EZLynx onboarding and support
                  </a>
                </li>
                <li>
                  <a
                    href="https://pathlms.com/netvu/courses/3505"
                    className="aq-text-link"
                  >
                    NetVU Certified Account Manager program
                  </a>
                </li>
                <li>
                  <a
                    href="https://kitetechgroup.com/ams360-employee-training"
                    className="aq-text-link"
                  >
                    Kite Technology Group AMS360 training
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vertafore.com/resources/press-releases/vertafore-launches-velocity-coach-agent-drive-employee-proficiency"
                    className="aq-text-link"
                  >
                    Vertafore Velocity Coach Agent launch
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.chatgpt.com/docs/computer-use"
                    className="aq-text-link"
                  >
                    Official OpenAI computer use documentation
                  </a>
                </li>
                <li>
                  <Link href="/pricing" className="aq-text-link">
                    AgenQ pricing
                  </Link>
                </li>
              </ul>
              <p className="aq-disclaimer">
                AgenQ is an independent company and is not affiliated with,
                endorsed by or sponsored by Applied Systems, EZLynx, Vertafore
                or any company named on this page. All product names belong to
                their respective owners. Information is based on public sources
                as of the date above.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
