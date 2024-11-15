import { subtitles } from "@/datas/top/subtitle";

const TopSubtitle = () => {
  return (
    <>
      <div className="top-subtitle">
        <div className="top-container">
          {subtitles.map((subtitleArg, index) => {
            return <div key={index}>{subtitleArg}</div>;
          })}
        </div>
      </div>
      <style jsx>{`
        .top-subtitle {
          color: #5a5a5a;
          font-size: 16px;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default TopSubtitle;

TopSubtitle.displayName = "../components/top/TopSubtitle";
