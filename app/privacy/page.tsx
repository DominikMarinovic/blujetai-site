export default function PrivacyPage() {
  return (
    <main className="container prose prose-invert max-w-3xl py-12">
      <h1>Privacy Policy</h1>

      <section className="mt-8">
        <h2>Introduction</h2>
        <p>
          Blujet AI (&quot;Blujet&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) provides
          AI-powered checkout recovery services delivered through automated phone outreach. These
          Terms of Service govern how merchants use our platform and describe how information is
          handled while the service is delivered.
        </p>
      </section>

      <section className="mt-8">
        <h2>Scope of Services</h2>
        <p>
          We monitor abandoned checkouts, initiate automated voice and SMS conversations, process
          customer responses, and supply performance insights that help merchants recover revenue.
        </p>
      </section>

      <section className="mt-8">
        <h2>Information We Collect</h2>
        <p>We collect and process information supplied by merchants and generated through use:</p>
        <h3>From Merchants</h3>
        <ul>
          <li>Store profile and contact information</li>
          <li>Authentication credentials that authorize platform access</li>
          <li>Payment information required to maintain the subscription</li>
          <li>Customer data shared so we can deliver recovery calls</li>
        </ul>
        <h3>From Customers (on a merchant&apos;s behalf)</h3>
        <ul>
          <li>Names, phone numbers, and other contact details</li>
          <li>Order, cart abandonment, and subscription status data</li>
          <li>Call interaction logs, recordings, and outcome notes</li>
          <li>Purchase history relevant to checkout recovery</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>How We Use Information</h2>
        <p>Information is used strictly to deliver and improve the recovery program:</p>
        <ul>
          <li>Identifying abandoned checkout or churn-risk events</li>
          <li>Initiating automated contact sequences and routing responses</li>
          <li>Analyzing campaign performance and customer sentiment</li>
          <li>Providing merchants with dashboards, recordings, and insights</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Merchant Transparency and Controls</h2>
        <p>Merchants receive full visibility into processing activities, including:</p>
        <ul>
          <li>Detailed processing logs and status dashboards</li>
          <li>Real-time access to call recordings and transcripts</li>
          <li>Configurable data retention parameters</li>
          <li>Downloadable processing reports and data exports</li>
          <li>Granular controls over which customer data we may act on</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Data Protection Measures</h2>
        <p>We implement safeguards that align with industry best practices, including:</p>
        <ul>
          <li>Encryption for data in transit and at rest</li>
          <li>Role-based access controls and multi-factor authentication</li>
          <li>Recurring security assessments and monitoring</li>
          <li>Employee training on data-protection requirements</li>
          <li>Use of secure, certified data centers</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Merchant Rights</h2>
        <p>At any time, merchants may:</p>
        <ul>
          <li>Access or export any customer data processed on their behalf</li>
          <li>Modify processing parameters or pause campaigns</li>
          <li>Request deletion of customer data or recordings</li>
          <li>Set custom data retention periods</li>
          <li>Receive detailed processing and compliance reports</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>Data Retention</h2>
        <ul>
          <li>Call recordings are retained for 90 days</li>
          <li>Customer contact data is stored for the duration of the merchant relationship</li>
          <li>Analytics and performance data is retained for 12 months</li>
        </ul>
        <p>Merchants may request shorter retention periods at any time.</p>
      </section>

      <section className="mt-8">
        <h2>Compliance</h2>
        <p>
          We comply with applicable privacy and telecommunications regulations, including GDPR,
          CCPA, TCPA, and other relevant regional requirements.
        </p>
      </section>

      <section className="mt-8">
        <h2>Updates to These Terms</h2>
        <p>
          We may revise these Terms as our services evolve. Material changes will be communicated to
          merchants, and consent will be requested when required by law.
        </p>
      </section>

      <section className="mt-8">
        <h2>Acceptable Use</h2>
        <p>
          Merchants must comply with all applicable laws, obtain customer consent before sharing
          contact details, and use the service in a way that respects customer privacy and
          preferences.
        </p>
      </section>

      <section className="mt-8">
        <h2>Liability</h2>
        <p>
          The services are provided on an &quot;as is&quot; and &quot;as available&quot; basis
          without warranties, to the maximum extent permitted by law.
        </p>
      </section>

      <section className="mt-8">
        <h2>Contact</h2>
        <p>
          Questions about these Terms or our data practices can be sent to{" "}
          <a href="mailto:support@blujetai.com">support@blujetai.com</a>.
        </p>
      </section>
    </main>
  )
}
