import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <div id="business-section">
    <Section yPadding="py-32" xPadding="px-32">
      <CTABanner
        title="Reach More Attendees, Sell More Tickets, Boost Your Event’s Success"
        subtitle="Are you a Business?"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button lg>Apply for OutFindr Business</Button>
          </Link>
        }
      />
    </Section>
  </div>
);

export { Banner };
