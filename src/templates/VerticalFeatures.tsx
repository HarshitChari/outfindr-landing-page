import { HorizontalFeatureRow } from '../feature/HorizontalFeatureRow';
import { HeroSubtitle } from '../hero/HeroSubtitle';
import { Section } from '../layout/Section';
import { Categories } from '../utils/Categories';

const VerticalFeatures = () => {
  return (
    <Section yPadding="pt-20 pb-32" xPadding="px-0" zIndex="z-10">
      <HeroSubtitle
        title={
          <>
            {'Explore All Types Of Adventures \n'}
            <span className="text-secondary-500">
              {' '}
              That You&apos;ve Dreamt About
            </span>
          </>
        }
        description="100+ activities on OutFindr."
      />
      <HorizontalFeatureRow features={Categories} />
    </Section>
  );
};

export { VerticalFeatures };
