import GlobalHeader from "@/components/global/GlobalHeader";
import ResultMain from "@/components/result/ResultMain";
import GlobalFooter from "@/components/global/GlobalFooter";

const index = () => {
  return (
    <>
      <GlobalHeader />
      <ResultMain />
      <GlobalFooter />
    </>
  );
};

export default index;

index.displayName = "/result/index";
