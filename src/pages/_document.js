import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
    <html lang="ja" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="ユーザーが性別、体型、年齢、身長、収入を入力し、それに合う人の割合をリアルタイムで計算・表示するシンプルなサービスです。理想と現実のギャップを楽しく理解し、SNSでシェアする体験を提供します。" />
    <meta name="keywords" content="マッチング, 理想, 現実, 恋愛, 婚活, 性別, 体型, 年齢, 身長, 収入" />
    <meta property="og:title" content="現実チェック" />
    <meta property="og:description" content="ユーザーが性別、体型、年齢、身長、収入を入力し、それに合う人の割合をリアルタイムで計算・表示するシンプルなサービスです。理想と現実のギャップを楽しく理解し、SNSでシェアする体験を提供します。" />
    <meta property="og:url" content="https://get-real.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="現実チェック" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="現実チェック" />
    <meta name="twitter:description" content="ユーザーが性別、体型、年齢、身長、収入を入力し、それに合う人の割合をリアルタイムで計算・表示するシンプルなサービスです。理想と現実のギャップを楽しく理解し、SNSでシェアする体験を提供します。" />
    <style>
        @import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
    </style>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

Document.displayName = "/_document";
