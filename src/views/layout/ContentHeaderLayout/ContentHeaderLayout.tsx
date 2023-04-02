import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

const ContentHeaderLayout: React.FC<{
  links: { title: string; href: string }[];
}> = ({ links }) => {
  const { asPath } = useRouter();
  return (
    <div className="bg-white shadow-primary  px-10 rounded-[14px]">
      <ul className="flex gap-8">
        {links.map((e, index) => (
          <li className="py-6 relative" key={index}>
            <Link
              href={e.href}
              className={clsx(
                ' text-sm font-semibold',
                asPath === e.href ? 'text-primary' : 'text-primary/50'
              )}
            >
              {e.title}
            </Link>

            {e.href === asPath ? (
              <motion.div
                className="absolute left-0 w-full h-1 bottom-0  bg-theme-green rounded-lg"
                layoutId="nav-link"
              ></motion.div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentHeaderLayout;
