import { useRatio } from "@/contexts/RatioContext";
import { calculator } from "@/calculation/calculator";

const ResultValue = () => {
  const { genderRatio, shapeRatio, ageRatio, heightRatio, incomeRatio } =
    useRatio();
  const value = calculator(
    genderRatio,
    shapeRatio,
    ageRatio,
    heightRatio,
    incomeRatio
  );

  return (
    <>
      <div className="result-value">
        <div className="value">{value}</div>
        <span className="unit">%</span>
      </div>
      <style jsx>{`
        .result-value {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: baseline;
        }
        .value {
          text-align: center;
          color: #db7c99;
          font-family: "Robot";
          font-weight: bold;
        }
        .unit {
          color: #db7c99;
          font-family: "Robot";
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default ResultValue;

ResultValue.displayName = "../components/result/ResultValue";
