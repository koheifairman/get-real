import IncomeSlider from "@/components/custom/IncomeSlider";
import { title } from "@/datas/top/income";

const TopIncome = () => {
  return (
    <>
      <div className="top-income">
        <div className="top-container">
          <div className="section-title">{title}</div>
          <div className="slider-container">
            <IncomeSlider />
          </div>
        </div>
      </div>
      <style jsx>{`
        .top-income {
          color: #5a5a5a;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default TopIncome;

TopIncome.displayName = "../components/top/TopIncome";
