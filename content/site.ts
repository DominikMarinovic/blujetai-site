export const site = {
  name: "Blujet AI",
  description:
    "Recover abandoned checkouts, upsell on autopilot, and grow revenue without extra ad spend.",
  url: "https://blujet.ai",
  ogImage: "/og.svg",
  nav: [],
  cta: { label: "Calculate Recovery ROI", href: "#roi" },
  socials: {
    x: "https://twitter.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  faq: [
    {
      q: "How is this different from our existing email and SMS recovery tools?",
      a: "Email and SMS are passive, one-way channels that compete with hundreds of other messages. Our AI voice agent is a proactive, two-way conversational channel. It actively engages customers in a human-like dialogue to understand and solve their specific objections in real-time, recovering the high-intent customers that your passive flows miss.",
    },
    {
      q: "Will the AI agent sound robotic and damage our brand?",
      a: "Absolutely not. We invest 7-10 days in a white-glove setup process to custom-build an AI agent that sounds perfectly on-brand. We analyze your marketing, script custom dialogues, and use state-of-the-art voice technology to ensure the agent is warm, empathetic, and sounds remarkably human. Our priority is to enhance your customer experience, not detract from it.",
    },
    {
      q: "Is this compliant with regulations like TCPA?",
      a: "Yes, compliance is our top priority. We operate strictly within all legal frameworks. Customers provide their phone numbers during the checkout process with clear consent for communication regarding their order. Our system is designed to be a helpful service interaction related to a transaction they initiated, fully adhering to TCPA guidelines.",
    },
    {
      q: "What platforms do you integrate with?",
      a: "Shopify, Klaviyo, Recharge, Skio, Loop, Omnisend, Stay AI, Seal and many more...",
    },
    {
      q: "What does the pricing look like after the pilot program?",
      a: "After the pilot proves its value, we transition to a simple partnership model. This consists of a monthly base retainer (starting at $1,500/mo) and a performance commission based on the revenue we recover for you. Our pricing is tiered based on your volume, ensuring it's always a high-ROI investment.",
    },
    {
      q: "What does the setup process look like for us?",
      a: "The process is 100% done-for-you. It starts with a 30-minute strategy call. After that, we only need API access to your Shopify and subscription platform. My team handles the entire technical build, scripting, and testing. There is no work required from your team. You will also get a private Slack channel with me so you and your team can ask any questions you have!",
    },
  ],
}

export const heroCopy = {
  badge: "For Brands Doing over 100k/month",
  headline: "Recover +10–20% more revenue from the same traffic with AI Voice + SMS.",
  subhead:
    "We Turn Abandoned Carts into Orders and Increase Subscriptions with AI Recovery System so you can grow MRR and have higher ROAS without more Ad Spend",
  primaryCta: { label: "Book a Demo Call", href: "/demo" },
  secondaryCta: { label: "Start Recovering Lost Revenue", href: "/demo" },
}

export const features = [
  {
    title: "Abandoned Checkout Calls",
    desc: "Re-engage within minutes, answer objections, and bring customers back.",
    icon: "Phone",
  },
  {
    title: "Upsell & Cross-Sell",
    desc: "Offer bundles and higher-margin SKUs during the call.",
    icon: "TrendingUp",
  },
  {
    title: "Omnichannel Follow-ups",
    desc: "SMS, WhatsApp, and email follow-ups after calls.",
    icon: "MessagesSquare",
  },
  {
    title: "Shopify-Native",
    desc: "Read carts, orders, discounts; write notes and tags.",
    icon: "ShoppingCart",
  },
  {
    title: "Human-like Voice",
    desc: "ElevenLabs quality with smart intent routing.",
    icon: "Mic",
  },
  {
    title: "Compliance & Privacy",
    desc: "GDPR-ready; opt-out and consent management.",
    icon: "Shield",
  },
]

export const steps = [
  { title: "Setup", desc: "Recover abandoned carts instantly before customers slip away." },
  {
    title: "Reduce Churn",
    desc: "Save subscription revenue by fixing failed rebills before they churn.",
  },
  {
    title: "Increasing AOV",
    desc: "Upsell + cross-sell automatically during recovery, raising your average order value.",
  },
  {
    title: "Optimization",
    desc: "Collect real customer objections so you know exactly why buyers drop off and how to fix it.",
  },
]

export const caseStudies = [
  {
    title: "$46,000+ in Total Value Recovered in 21 Days",
    summary:
      "Deployed Voice & WhatsApp AI agent that recovered over $41,000 in abandoned checkout revenue for a subscription ecommerce platform.",
    detail:
      "Established a new, automated channel for boosting customer LTV and monthly subscriptions.",
  },
  {
    title: "An average of 16% Conversion Rate on 20,000+ Automated Sales Calls",
    summary:
      "AI sales representative converted at 16% on over 20,000 automated calls for a 7-figure company.",
  },
  {
    title: "Increased E-commerce Repeat Purchases by 62% for Organic supplement brand",
    summary:
      "Boosted repeat customer purchases by 62% for the organic supplement brand by deploying an AI system that provided instant, personalized product recommendations and automated re-engagement.",
  },
]

export const pricing = [
  {
    name: "Build & Run",
    blurb: "Done-for-you setup + monthly ops.",
    price: "Custom",
    bullets: [
      "Strategy + playbooks",
      "Voice + routing setup",
      "Shopify + Klaviyo integration",
      "Weekly ops tuning",
    ],
  },
  {
    name: "Infrastructure Pro",
    blurb: "Advanced automations, custom scripts, and reporting.",
    price: "Custom",
    bullets: ["Custom workflows", "Advanced tracking", "Reporting dashboards", "Priority support"],
  },
]

export const beforeAfter = {
  title: "From Leaking Revenue To Automated Recovery",
  blurb:
    "Most e-commerce brands are still stuck in the old way: chasing traffic, leaking revenue at checkout. Turn customer objections into CRO insights.",
  before: [
    "Generic ‘You forgot something’ emails that most customers ignore",
    "Subscription rebills failing silently → churn goes unnoticed",
    "Support teams drowning in repetitive questions, slow replies",
    "Customers slipping away without feedback on why they didn’t buy",
    "Growth = only possible by spending more on ads",
  ],
  after: [
    "Full sales conversations that recover 10–15% more revenue",
    "Subscriptions saved automatically with proactive rebill recovery",
    "Support handled instantly → 75% faster responses, 80% less workload",
    "Every abandoned checkout = customer insights + CRO data",
    "Growth without extra ad spend → profits from customers you already paid for",
  ],
}

// Assumptions used by ROI calculator when hidden fields are removed
export const roiAssumptions = {
  // % of checkout attempts that are abandoned (industry baseline)
  abandonmentRate: 65,
  // Expected AI recovery rate on abandoned checkouts
  aiRecoveryRate: 12,
}
