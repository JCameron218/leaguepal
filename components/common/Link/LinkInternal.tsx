import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface LinkProps extends PropsWithChildren {
  href: string;
}

const LinkInternal = ({ href, children }: LinkProps) => {
  return (
    <Link href={href} legacyBehavior>
      {children}
    </Link>
  )
};

export default LinkInternal;
