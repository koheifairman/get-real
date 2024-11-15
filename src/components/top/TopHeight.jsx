import HeightSlider from "@/components/custom/HeightSlider";
import { title } from "@/datas/top/height";

const TopHeight = () => {
  return (
    <>
      <div className="top-height">
        <div className="top-container">
          <div className="section-title">{title}</div>
          <div className="slider-container">
            <HeightSlider />
          </div>
        </div>
      </div>
      <style jsx>{`
        .top-height {
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

export default TopHeight;

TopHeight.displayName = "../components/top/TopHeight";
