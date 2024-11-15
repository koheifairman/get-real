import ResultSubtitle from "./ResultSubtitle";
import ResultValue from "./ResultValue";
import ResultShare from "./ResultShare";
import ResultAgain from "./ResultAgain";

const ResultMain = () => {
  return (
    <>
      <div className="result-main">
        <ResultSubtitle />
        <ResultValue />
        <ResultShare />
        <ResultAgain />
      </div>
      <style jsx>{`
        .result-main {
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default ResultMain;

ResultMain.displayName = "../components/result/ResultMain";
