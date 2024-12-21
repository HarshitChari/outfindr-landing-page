import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  zIndex?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto ${props.yPadding ? props.yPadding : 'py-16'} ${props.zIndex ? props.zIndex : 'z-0'} ${props.xPadding ? props.xPadding : 'px-10'}`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
