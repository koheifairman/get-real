import NextLink from 'next/link';

import { heading } from '@/datas/global/globalHeader';

// https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next/link
const GlobalHeader = () => {
  return (
    <div className="global-header">
      <NextLink className="global-header-title" href={'/'}>
        {heading}
      </NextLink>
      <style jsx>{`
        .global-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .global-header-title {
          color: #db7c99;
          text-align: center;
        }
        .global-header-title:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
export default GlobalHeader;

GlobalHeader.displayName = '../components/GlobalHeader';
