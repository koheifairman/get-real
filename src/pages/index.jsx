import GlobalHeader from "../components/global/GlobalHeader";
import TopMain from "../components/top/TopMain";
import GlobalFooter from "../components/global/GlobalFooter";

const index = () => {
  return (
    <>
      <GlobalHeader />
      <TopMain />
      <GlobalFooter />
    </>
  );
};

export default index;

index.displayName = "/";
