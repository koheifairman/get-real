import { subtitles } from "@/datas/result/subtitle";

const ResultSubtitle = () => {
  return (
    <>
      <div className="result-subtitle">
        {subtitles.map((subtitleArg, index) => {
          return (
            <div key={index} className="subtitle-item">
              {subtitleArg}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .result-subtitle {
          margin: 0 auto;
          text-align: center;
          color: #5a5a5a;
        }
      `}</style>
    </>
  );
};

export default ResultSubtitle;

ResultSubtitle.displayName = "../components/result/ResultSubtitle";
