import { useRouter } from "next/router";

import { heading } from "@/datas/global/globalHeader";

const GlobalHeader = () => {
  // ステート
  const router = useRouter();
  // 関数
  const clickRouter = () => {
    router.push(`/`);
  };

  return (
    <div className="global-header">
      <div className="global-header-title" onClick={() => clickRouter()}>
        {heading}
      </div>
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

GlobalHeader.displayName = "../components/GlobalHeader";
