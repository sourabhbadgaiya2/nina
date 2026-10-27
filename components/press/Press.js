/* eslint-disable @next/next/no-img-element */
/**
 * Press: converted 1:1 from the launch build (markup, classes and copy unchanged).
 * Internal links use next/link. Styling: Tailwind utilities + site classes + app/aq-pages.css (.aq-content wrapper).
 */
export default function Press() {
  return (
    <div className="aq-content">
      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
          <div className="aurora pointer-events-none absolute inset-0 -z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper"></div>
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              AgenQ
              {' '}
              <span className="text-grad aq-heading-phrase">Press Kit</span>
            </h1>
          </div>
        </section>
        <section id="about-agenq-in-one-line" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              About AgenQ
              {' '}
              <span className="text-grad aq-heading-phrase">in One Line</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>AgenQ is AI training and onboarding software for insurance teams. It shows users each step on their screen and can complete approved tasks.</p>
            </div>
          </div>
        </section>
        <section id="company-facts" className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Company
              {' '}
              <span className="text-grad aq-heading-phrase">Facts</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <ul>
                <li>Company: AgenQ</li>
                <li>Founded by: Varun Mishra, Founder and CEO</li>
                <li>Based in: Toronto and Montreal, Canada</li>
                <li>Serves: insurance teams in the United States and Canada</li>
                <li>Supported software: EZLynx and Vertafore AMS360</li>
                <li>Backed by: NEXT Canada (NEXT AI), MaRS, MARL, NEC X</li>
                <li>
                  Website:
                  {' '}
                  <a href="https://agenq.com" className="aq-text-link">https://agenq.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="founder" className="px-5 py-20 sm:py-24">
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
        <section id="logo" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              <span className="text-grad aq-heading-phrase">Logo</span>
            </h2>
            <div className="aq-press-logos">
              <div className="aq-press-logo">
                <div className="aq-press-logo-preview ">
                  <img src="/assets/press/agenq-light.svg" alt="AgenQ logo for light backgrounds" width="2000" height="799" />
                </div>
                <div className="aq-press-logo-copy">
                  <h3>For Light Backgrounds</h3>
                  <p>
                    <a download href="/assets/press/agenq-light.png" className="aq-text-link">Download AgenQ logo PNG</a>
                    {' '}
                    ·
                    {' '}
                    <a download href="/assets/press/agenq-light.svg" className="aq-text-link">Download AgenQ logo SVG</a>
                  </p>
                </div>
              </div>
              <div className="aq-press-logo">
                <div className="aq-press-logo-preview aq-press-logo-dark">
                  <img src="/assets/press/agenq-dark.svg" alt="AgenQ logo for dark backgrounds" width="2000" height="799" />
                </div>
                <div className="aq-press-logo-copy">
                  <h3>For Dark Backgrounds</h3>
                  <p>
                    <a download href="/assets/press/agenq-dark.png" className="aq-text-link">Download AgenQ logo PNG</a>
                    {' '}
                    ·
                    {' '}
                    <a download href="/assets/press/agenq-dark.svg" className="aq-text-link">Download AgenQ logo SVG</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="press-contact" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Press
              {' '}
              <span className="text-grad aq-heading-phrase">Contact</span>
            </h2>
            <div className="aq-copy aq-reading  mt-10">
              <p>
                <a href="mailto:founder@agenq.com" className="aq-text-link">founder@agenq.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
