export default function VoiceAndChatGuidance() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              Ask by{" "}
              <span className="text-grad aq-heading-phrase">
                Typing or Speaking
              </span>
            </h1>
            <div className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              <p>
                Describe the task in plain English. AgenQ shows the steps on
                your screen, or completes the approved work.
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
                AgenQ Voice and Chat lets employees ask for help in their
                insurance software by typing or speaking, in their own words,
                with no special commands.
              </p>
            </div>
          </div>
        </section>
        <section
          id="start-with-the-task-not-the-menu"
          className="px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Start With the Task,{" "}
              <span className="text-grad aq-heading-phrase">Not the Menu</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>
                Your employee knows the client needs a certificate, but not what
                the software calls it. With AgenQ, they just say what they need.
              </p>
            </div>
          </div>
        </section>
        <section
          id="questions-your-team-can-ask"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Questions{" "}
              <span className="text-grad aq-heading-phrase">
                Your Team Can Ask
              </span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <ul>
                <li>&quot;How do I find this client's policy?&quot;</li>
                <li>&quot;How do I issue a certificate?&quot;</li>
                <li>&quot;Where do I record this policy change?&quot;</li>
                <li>&quot;How do I set the next follow up?&quot;</li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="questions-about-voice-and-chat"
          className="bg-tint/60 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Questions About{" "}
              <span className="text-grad aq-heading-phrase">
                Voice and Chat
              </span>
            </h2>
            <div className="aq-reading aq-copy mt-10">
              <div className="aq-faq-list">
                <details className="card aq-faq">
                  <summary>
                    Do employees need special commands?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>No. They describe the task in their own words.</p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Can they type instead of speak?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>Yes. Both work.</p>
                  </div>
                </details>
                <details className="card aq-faq">
                  <summary>
                    Does speaking change what AgenQ is allowed to do?
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="aq-faq-answer aq-copy">
                    <p>No. The same permissions and approvals apply.</p>
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
