import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { SidebarLinksProps } from './sidebar-links';
import { motion } from 'framer-motion';
import { HeightVariants } from '@/services/framer-motion/variants';

const DashboardSidebarItem: React.FC<{ item: SidebarLinksProps }> = ({
  item,
}) => {
  const asPath = usePathname();
  const paths = asPath.split('/');
  const parentPath = '/' + [...paths][1] + '/' + [...paths][2];
  const nestedPath = paths.length > 3 && '/' + [...paths][paths.length - 1];

  const [collapse, setCollapse] = useState(
    parentPath === item.link || asPath === item.link || false
  );

  return (
    <li className="">
      <div
        className={clsx(
          ' relative flex items-center justify-between rounded-[14px] py-4',
          asPath === item.link || parentPath === item.link ? ' px-4' : ''
        )}
      >
        <Link
          className={clsx(
            'relative z-10 flex items-center gap-[10px] text-sm font-semibold',
            asPath === item.link || parentPath === item.link
              ? 'text-primary'
              : 'text-alert-gray'
          )}
          href={item.redirectLink ? item.redirectLink : item.link}
        >
          <div className={clsx(asPath === item.link ? 'h-5 w-5 ' : 'h-6 w-6')}>
            <img
              className="h-full w-full"
              src={
                asPath === item.link || parentPath === item.link
                  ? item.activeIcon
                  : item.inactiveIcon
              }
              alt=""
            />
          </div>
          <span>{item.title}</span>
        </Link>

        {item?.nestedLinks && (
          <button
            onClick={() => {
              setCollapse((current) => !current);
            }}
            className="relative z-10"
          >
            <img
              className={clsx(
                'transition-all duration-200 ease-in',
                collapse && 'rotate-180'
              )}
              src="/assets/images/icons/down-arrow-dark.svg"
              alt="Down Arrow"
            />
          </button>
        )}

        {asPath === item.link || parentPath === item.link ? (
          <motion.div
            className="absolute bottom-0 left-0 right-0 top-0 rounded-[14px]  bg-theme-green"
            layoutId="dash-link"
          ></motion.div>
        ) : null}
      </div>

      {/* NESTED LINKS */}
      {item?.nestedLinks && (
        <motion.ul
          initial={!collapse && { height: 0, scale: 0.75 }}
          animate={
            collapse
              ? {
                  height: 'max-content',
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                }
              : {
                  height: 0,
                  scale: 0.75,
                  transition: {
                    duration: 0.5,
                    ease: 'easeIn',
                  },
                }
          }
          className=""
        >
          {item.nestedLinks.map((e, index) => {
            return (
              <motion.li
                initial={!collapse && 'hide'}
                key={index}
                custom={index}
                variants={HeightVariants}
                animate={collapse ? 'show' : 'hide'}
                className="px-3 py-2 first:pt-6 "
              >
                <Link
                  className={clsx(
                    'flex items-center gap-2 text-sm',
                    nestedPath === e.link || asPath === item.link + e.link
                      ? 'text-primary'
                      : 'text-alert-gray'
                  )}
                  href={
                    e?.redirectLink
                      ? e.redirectLink
                      : asPath.length > 3
                      ? parentPath + e.link
                      : item.link + e.link
                  }
                >
                  <img
                    src={
                      nestedPath === e.link || asPath === item.link + e.link
                        ? e.activeIcon
                        : e.inactiveIcon
                    }
                    alt=""
                  />
                  <span>{e.title}</span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </li>
  );
};

export default DashboardSidebarItem;
