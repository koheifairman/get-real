import { useRatios } from '@/contexts/useRatios';
import TopSubtitle from './TopSubtitle';
import TopGender from './TopGender';
import TopShape from './TopShape';
import TopAge from './TopAge';
import TopHeight from './TopHeight';
import TopIncome from './TopIncome';
import TopResult from './TopResult';

const TopMain = () => {
  // STATE
  const { ageRange, setAgeRange } = useRatios();
  return (
    <>
      <div className="top-main">
        <TopSubtitle />
        <TopGender />
        <TopShape />
        <TopAge ageRange={ageRange} setAgeRange={setAgeRange} />
        <TopHeight />
        <TopIncome />
        <TopResult />
      </div>
      <style jsx>{`
        .top-main {
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default TopMain;

TopMain.displayName = '../components/top/TopMain';
