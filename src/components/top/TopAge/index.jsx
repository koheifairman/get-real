import { title } from '@/datas/top/age';
import AgeSlider from './AgeSlider';

const TopAge = ({ ageRange, setAgeRange }) => {
  return (
    <>
      <div className="top-age">
        <div className="top-container">
          <div className="section-title">{title}</div>
          <div className="slider-container">
            <AgeSlider ageRange={ageRange} setAgeRange={setAgeRange} />
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

TopAge.displayName = '../components/top/TopAge';
