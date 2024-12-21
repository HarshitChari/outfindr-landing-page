import Link from 'next/link';
import type { ReactNode } from 'react';

import { Button } from '../button/Button';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  ctaText: string;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className=" fixed z-10 flex w-full items-center justify-around px-5 ">
    <div className="shrink-0">
      <Link href="/">{props.logo}</Link>
    </div>

    <nav className="hidden h-[50px] w-fit rounded-[16px] bg-white bg-opacity-40 px-[24px] py-[14px] md:flex">
      <ul className="flex items-center justify-center space-x-5 font-satoshi text-paragraph text-primary-500">
        {props.children}
      </ul>
    </nav>

    <div className="shrink-0">
      <Button>{props.ctaText}</Button>
    </div>
  </div>
);

export { NavbarTwoColumns };
