import { useRouter } from "next/router";
import { Button } from "@mui/material";

import { label } from "@/datas/top/result";

const TopResult = () => {
  // ステート
  const router = useRouter();
  // 関数
  const clickRouter = () => {
    router.push(`/result`);
  };
  return (
    <>
      <div className="top-result">
        <div className="top-container">
          <Button
            onClick={() => {
              clickRouter();
            }}
            variant="contained"
            sx={{
              width: "256px",
              color: "#FFFFFF",
              backgroundColor: "rgba(219,124,153)",
              borderRadius: "4px",
              padding: "10px",
              "&:hover": {
                backgroundColor: "rgba(186,105,129,1)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            {label}
          </Button>
        </div>
      </div>
      <style jsx>{`
        .top-result {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default TopResult;

TopResult.displayName = "../components/top/TopResult";
