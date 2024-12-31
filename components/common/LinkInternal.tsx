import Link from 'next/link';
import { CSSProperties, PropsWithChildren } from 'react';

interface LinkProps extends PropsWithChildren {
  href: string;
  style?: CSSProperties;
}

export const LinkInternal = ({ href, style, children }: LinkProps) => {
  return (
    <Link href={href} legacyBehavior style={ style }>
      {children}
    </Link>
  )
};
