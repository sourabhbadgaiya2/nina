/**
 * The site's primary navigation.
 *
 * Four items: Product goes to the home page, Pricing is a direct link, and
 * Solutions and Resources open dropdowns.
 *
 * Every child is a page that exists. The nav is deliberately narrower than the
 * footer: FAQ and the Solution and Feature pages are reachable from
 * lib/footer.js and from the Use Cases index, so leaving one out here does not
 * orphan its route.
 */
export const NAV = [
  {
    label: "Solutions",
    sections: [
      {
        heading: "FOR INSURANCE",
        children: [
          { label: "For Insurance", href: "/solutions/insurance" },
          { label: "AgenQ for EZLynx", href: "/ezlynx" },
          { label: "AgenQ for AMS360", href: "/ams360" },
        ],
      },
      {
        heading: "OTHER USE CASE",
        children: [
          {
            label: "SaaS Onboarding",
            href: "/solutions/saas-onboarding",
          },
        ],
      },
    ],
  },
  {
    label: "Product",
    children: [
      {
        label: "Training Mode",
        href: "/features/workflow-navigation",
      },
      {
        label: "Execution Mode",
        href: "/features/action-based-execution",
      },
      {
        label: "Voice and Chat",
        href: "/features/voice-and-chat-guidance",
      },
      {
        label: "Product Knowledge",
        href: "/features/product-knowledge-training",
      },
      {
        label: "Security and Control",
        href: "/security",
      },
    ],
  },

  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    children: [
      { label: "Use Cases", href: "/resources/use-cases" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
      { label: "Documentation", href: "/documentation" },
      {
        label: "Compare Training Options",
        href: "/insurance-software-training",
      },
      {
        label: "What Is In-App AI Training?",
        href: "/resources/in-app-ai-training",
      },
      { label: "Blog", href: "/blog" },
    ],
  },
];
