export const site = {
  name: "Blujet AI",
  description:
    "Recover abandoned checkouts, upsell on autopilot, and grow revenue without extra ad spend.",
  url: "https://blujet.ai",
  ogImage: "/og.svg",
  nav: [],
  cta: { label: "Calculate Recovery ROI", href: "#book-call" },
  socials: {
    x: "https://twitter.com/",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  faq: [
    {
      q: "Won't this annoy my customers? Isn't this spam?",
      a: "No—because we only reach out at moments where customers have already shown intent or need help. Someone whose card just expired needs to know. Someone on Day 28 of their subscription who's gone silent might need reassurance. These aren't cold outreaches—they're helpful interventions at moments customers are already thinking about your brand. The agents speak in your brand voice with full context about their history. We've handled 300,000+ interactions with overwhelmingly positive customer feedback. When done right, this improves customer experience, not damages it.",
    },
    {
      q: "What if the AI says something wrong about my products?",
      a: "We build a comprehensive knowledge base specific to your brand—products, ingredients, benefits, policies, contraindications, everything. The agents can only pull from verified information about your business. They're not connected to general AI knowledge that could hallucinate. Before going live, we test hundreds of scenarios specific to your business to ensure responses are accurate. This isn't set-and-forget. We monitor performance and optimize based on real interactions.",
    },
    {
      q: "Does this work for my specific product category?",
      a: "Yes. This works across multiple categories: Supplements and wellness products, Skincare and beauty, Pet care and pet supplements, Fashion and apparel subscriptions, Food and beverage subscriptions, Fitness and health programs. The underlying principle is universal: every subscription funnel or ecommerce overall has high-intent moments where conversations determine outcomes. The specific scenarios differ, but the gaps exist everywhere.",
    },
    {
      q: "How quick can i expect the results from this?",
      a: "Almost immediately. When 1-to-1 Conversation Engine is live, you will see results coming in immediately. To set all of this up and test it, it takes us usually around 3-4 weeks, depending on what we agree on to do first.",
    },
    {
      q: "What if we don't see results?",
      a: "If you don't see results on timeframe we agree on, we will give you your money back. Since we only work with 8-10 brands at maximum because this is agentic service, not some tool, we can gurantee results. we can focus on your specific problems and act fast to grow your brand!",
    },
    {
      q: "How much does it cost?",
      a: "It's a 5-figure investment. Our goal is to make you at least 5-10 times more than you pay us. We work with a limited number of brands at a time (8-10 max) so we can guarantee results.",
    },
    {
      q: "Is this compliant with regulations like TCPA?",
      a: "Yes, compliance is our top priority. We operate strictly within all legal frameworks. Customers provide their phone numbers during the checkout process with clear consent for communication regarding their order. Our system is designed to be a helpful service interaction related to a transaction they initiated, fully adhering to TCPA guidelines.",
    },
    {
      q: "What platforms do you integrate with?",
      a: "Shopify, Klaviyo, Stripe, Recharge, Skio, Loop, Omnisend, Stay AI, and many more... Everything you are using for your Shopify store",
    },
    {
      q: "What happens to the conversation data?",
      a: "All conversation data is stored securely in our system with enterprise-grade encryption. Owned by you - it's your customer data, we're just processing it. We never: Sell your data to third parties. Use your conversations to train models for other brands. Share customer information outside your approved team. We're SOC 2 Type II compliant and GDPR/CCPA compliant. Full data processing agreement included.",
    },
    {
      q: "What if our retention is already pretty good?",
      a: "That actually makes this more valuable, not less. If your retention is good, you've already handled the obvious problems. What's left are the edge cases and high-leverage moments that your current systems miss. Think of it this way: If you're retaining 70% of customers, that's great. But you're still losing 30%—and some percentage of those are saveable with the right conversation at the right time. Even moving from 70% to 75% retention is massive at scale. Plus, the conversation data becomes incredibly valuable for optimization. When you already have a strong baseline, the intelligence you gather makes everything else better.",
    },
    {
      q: "What if we're already working with other agencies?",
      a: "Not a problem. We work alongside: Email/SMS agencies (we don't compete, we complement). Ad agencies (we improve ROAS by capturing more conversions from the same traffic). We'll coordinate with them as needed. Often our conversation data makes their work more effective too. The only potential conflict is if you have an agency specifically doing 'customer service automation'—but even then, we're usually focused on different moments (proactive vs. reactive).",
    },
  ],
}

export const heroCopy = {
  badge: "For Brands Doing over 100k/month",
  headline: "Recover +10–20% more revenue from the same traffic with AI Voice + SMS.",
  subhead:
    "We deploy done-for-you AI agents that intervene at the two most critical <>moments: abandoned checkouts and at-risk renewals. Our human-like conversations recapture lost sales and reduce churn, delivering profitable growth from your existing traffic.",
  primaryCta: { label: "Yes! Grow my subscriptions", href: "#book-call" },
  secondaryCta: { label: "Yes! Grow My Subscriptions", href: "#book-call" },
}

export const caseStudies = [
  {
    brand: "Abandonment Recovery",
    title: "$56,000+ in Total Value Recovered in 3 Weeks",
    summary:
      "Deployed multi-channel (Phone Call & SMS) AI agent that recovered over $50,000 in abandoned checkout revenue for a subscription ecommerce platform.",
  },
  {
    brand: "Outbound Campaign",
    title: "16% Conversion Rate on 20,000+ Automated Sales Calls",
    summary:
      "AI sales representative converted at 16% on over 20,000 automated calls for a 7-figure company that added $170k+/year.",
  },
  {
    brand: "Organic Supplement Brand",
    title: "Increased Repeat Purchases by 62%",
    summary:
      "The same AI system provided instant, personalized product recommendations and automated re-engagement.",
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
