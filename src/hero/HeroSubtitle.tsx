import type { ReactNode } from 'react';

type IHeroSubtitleProps = {
  title: ReactNode;
  description: string;
};

const HeroSubtitle = (props: IHeroSubtitleProps) => (
  <header className="z-50 text-center">
    <div className="my-4 font-satoshi text-h5 text-primary-500">
      {props.description}
    </div>
    <h2 className="leading-hero whitespace-pre-line font-roundoBold text-h2 text-primary-500">
      {props.title}
    </h2>
  </header>
);

export { HeroSubtitle };
