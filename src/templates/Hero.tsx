import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background>
    <Section yPadding="py-6" zIndex="z-10">
      <NavbarTwoColumns logo={<Logo xl />} ctaText="Join Beta Program">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Explore Activities</Link>
        </li>
        <li>
          <Link href="/">OutFindr Pro</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32" xPadding="px-40" zIndex="z-10">
      <HeroOneButton
        title={
          <>
            {'Memories, Adventures, Friendships'}
            <span className="text-secondary-500"> All Start in OutFindr</span>
          </>
        }
        description="We Have a Plan for you Today 🥰"
        button={<Button xl>Apply for OutFindr Business</Button>}
      />
    </Section>
  </Background>
);

export { Hero };
