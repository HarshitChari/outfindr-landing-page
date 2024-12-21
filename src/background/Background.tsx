import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => <div>{props.children}</div>;

export { Background };
