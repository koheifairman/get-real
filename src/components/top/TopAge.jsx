import AgeSlider from "@/components/custom/AgeSlider";
import { title } from "@/datas/top/age";

const TopAge = () => {
  return (
    <>
      <div className="top-age">
        <div className="top-container">
          <div className="section-title">{title}</div>
          <div className="slider-container">
            <AgeSlider />
          </div>
        </div>
      </div>
      <style jsx>{`
        .top-age {
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

export default TopAge;

TopAge.displayName = "../components/top/TopAge";
