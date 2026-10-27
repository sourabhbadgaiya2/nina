import Link from "next/link";

/**
 * InAppAiTraining: converted 1:1 from the launch build (markup, classes and copy unchanged).
 * Internal links use next/link. Styling: Tailwind utilities + site classes + app/aq-pages.css (.aq-content wrapper).
 */
export default function InAppAiTraining() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              What Is{" "}
              <span className="text-grad aq-heading-phrase">
                In App AI Training?
              </span>
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
          </div>
        </section>
        <section
          id="the-short-answer"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              The{" "}
              <span className="text-grad aq-heading-phrase">Short Answer</span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                In app AI training is software that teaches employees inside the
                application they are using. Employees ask how to do a task, and
                the AI shows the next step on their screen while they do the
                real work. It replaces learning before the task (courses,
                videos) with help during the task.
              </p>
            </div>
          </div>
        </section>
        <section
          id="how-does-in-app-ai-training-work"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              How does in app{" "}
              <span className="text-grad aq-heading-phrase">
                AI training work?
              </span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                In app AI training shows the next software step while an
                employee completes a real task.
              </p>
              <ol>
                <li>
                  The employee asks a question, by typing or speaking: &quot;How
                  do I issue a certificate?&quot;
                </li>
                <li>
                  The AI points to where to click, one step at a time, on the
                  real screen.
                </li>
                <li>
                  The employee completes the task and learns it by doing it.
                </li>
              </ol>
              <p>
                Some tools, like AgenQ, can also complete approved tasks, with a
                person approving the important steps. Check the supported tasks,
                review controls and limits of the tool you are considering.
              </p>
            </div>
          </div>
        </section>
        <section
          id="how-is-in-app-ai-training-different-from-other-training"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              How is in app AI{" "}
              <span className="text-grad">
                training different from other training?
              </span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                The main difference is when and where help arrives. Courses can
                establish the basics; in app AI training supports the employee
                during the task.
              </p>
              <div
                className="aq-table-scroll"
                tabIndex="0"
                role="region"
                aria-label="Information table"
              >
                <table className="aq-table ">
                  <thead>
                    <tr>
                      <th scope="col">Method</th>
                      <th scope="col">When help arrives</th>
                      <th scope="col">Where</th>
                      <th scope="col">Uses your procedures</th>
                      <th scope="col">Can do the task</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Courses and webinars</th>
                      <td>Scheduled or on demand</td>
                      <td>Course or webinar</td>
                      <td>If tailored</td>
                      <td>Training itself does not complete the task</td>
                    </tr>
                    <tr>
                      <th scope="row">Videos and written guides</th>
                      <td>When staff find the material</td>
                      <td>Guide or video</td>
                      <td>If included in the material</td>
                      <td>Material itself does not complete the task</td>
                    </tr>
                    <tr>
                      <th scope="row">Learning platforms (LMS)</th>
                      <td>When a course is assigned or opened</td>
                      <td>Learning portal</td>
                      <td>If included in the course</td>
                      <td>Course delivery itself does not complete the task</td>
                    </tr>
                    <tr>
                      <th scope="row">AI chatbots, such as ChatGPT</th>
                      <td>When staff ask</td>
                      <td>Chat or supported connected experience</td>
                      <td>If supplied or connected</td>
                      <td>Varies by tool, access and permissions</td>
                    </tr>
                    <tr>
                      <th scope="row">In app AI training</th>
                      <td>When staff ask during work</td>
                      <td>Supported application screen</td>
                      <td>Varies by tool; AgenQ uses your procedures</td>
                      <td>Varies by tool; AgenQ supports approved tasks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <Link
                  href="/insurance-software-training"
                  className="aq-text-link"
                >
                  See the full insurance software training comparison
                </Link>
                . This table describes training methods; individual tools can
                combine methods and offer other capabilities.
              </p>
            </div>
          </div>
        </section>
        <section
          id="is-in-app-ai-training-the-same-as-a-digital-adoption-platform"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Is in app AI training the{" "}
              <span className="text-grad">
                same as a digital adoption platform?
              </span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                They overlap. Digital adoption platforms can show tours and
                tooltips inside software, and some include AI features. In app
                AI training starts from the employee&apos;s own question in
                plain language and guides them through the current task.
                Features vary by provider.
              </p>
            </div>
          </div>
        </section>
        <section
          id="who-is-in-app-ai-training-for"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Who is in app{" "}
              <span className="text-grad aq-heading-phrase">
                AI training for?
              </span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                In app AI training suits teams using complex software,
                onboarding new staff or returning to tasks they rarely perform.
                In insurance agencies and brokerages, those roles include CSRs,
                account managers and producers.
              </p>
              <p>
                Choose tasks where uncertainty about software steps interrupts
                client work. A person who needs insurance judgment still needs
                the right insurance colleague; software training cannot supply
                authority to make that decision.
              </p>
            </div>
          </div>
        </section>
        <section
          id="what-are-the-limits-of-in-app-ai-training"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              What are the limits{" "}
              <span className="text-grad">of in app AI training?</span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                In app AI training needs supported tasks and software. It helps
                with software steps, not insurance judgment.
              </p>
              <p>
                For AgenQ, tasks need setup before AgenQ can guide staff. Agency
                procedures, permissions and review rules still matter. Ask who
                maintains the guidance when software screens change and how your
                agency will check a changed task.
              </p>
            </div>
          </div>
        </section>
        <section
          id="what-does-in-app-ai-training-look-like-in-insurance-software"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              What does in app AI training{" "}
              <span className="text-grad">
                look like in insurance software?
              </span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                AgenQ is AI training and onboarding software for insurance
                agencies and brokerages. Staff ask how to do a task and AgenQ
                shows each step on their screen inside EZLynx or AMS360. In
                Execution Mode, AgenQ can complete approved tasks, with a person
                approving the important steps.
              </p>
              <p>
                AgenQ provides in app AI training for{" "}
                <Link href="/ezlynx" className="aq-text-link">
                  EZLynx
                </Link>{" "}
                and{" "}
                <Link href="/ams360" className="aq-text-link">
                  AMS360
                </Link>
                .{" "}
                <Link
                  href="/blog/ai-guided-workflows-for-insurance-software"
                  className="aq-text-link"
                >
                  Read the insurance software provider case study
                </Link>{" "}
                for customer reported results from a separate insurance
                platform.
              </p>
            </div>
          </div>
        </section>
        <section
          id="frequently-asked-questions"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Frequently Asked{" "}
              <span className="text-grad aq-heading-phrase">Questions</span>
            </h2>
            <div className="aq-reading aq-copy mt-10">
              <div className="aq-faq-list">
                <details className="card aq-faq">
                  <summary>
                    Is in app AI training the same as a chatbot?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      In app AI training shows software steps on the application
                      screen during a task. Chat tools can explain steps and may
                      support images, shared screens or actions, depending on
                      the tool and permissions.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Does in app AI training replace vendor training?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      In app AI training can work alongside vendor training.
                      Courses can establish the basics while on screen help
                      supports real work.
                    </p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can in app AI training follow our own procedures?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>
                      The answer depends on the tool. AgenQ uses your approved
                      procedures and training material.
                    </p>
                  </div>
                </details>
              </div>
              <div className="aq-after-faq"></div>
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
                    href="https://www.walkme.com/technology/"
                    className="aq-text-link"
                  >
                    WalkMe platform overview
                  </a>
                </li>
                <li>
                  <a href="https://whatfix.com/ai/" className="aq-text-link">
                    Whatfix AI
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    href="/insurance-software-training"
                    className="aq-text-link"
                  >
                    Insurance software training options compared
                  </Link>
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
                  <a
                    href="https://learn.chatgpt.com/docs/image-inputs"
                    className="aq-text-link"
                  >
                    Official OpenAI image inputs documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="see-it-with-your-team" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              See It{" "}
              <span className="text-grad aq-heading-phrase">
                With Your Team
              </span>
            </h2>
            <div className="aq-copy aq-reading mt-10">
              <p>
                Show us a task your team struggles with. We&apos;ll show you
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
      </main>
    </div>
  );
}
