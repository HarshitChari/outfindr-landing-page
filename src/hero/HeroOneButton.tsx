import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="z-50 text-center">
    <div className="my-4 font-satoshi text-h5 text-primary-500">
      {props.description}
    </div>
    <h1 className="leading-hero whitespace-pre-line font-roundoBold text-h1 text-primary-500">
      {props.title}
    </h1>

    {props.button}
  </header>
);

export { HeroOneButton };
