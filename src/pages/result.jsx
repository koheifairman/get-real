import GlobalHeader from '@/components/global/GlobalHeader';
import ResultMain from '@/components/result/ResultMain';
import GlobalFooter from '@/components/global/GlobalFooter';

const result = () => {
  return (
    <>
      <GlobalHeader />
      <ResultMain />
      <GlobalFooter />
    </>
  );
};

export default result;

result.displayName = '/result';
