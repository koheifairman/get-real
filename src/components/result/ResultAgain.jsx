import { useRouter } from "next/router";
import { Button } from "@mui/material";

import { label } from "@/datas/result/again";

const ResultAgain = () => {
  // ステート
  const router = useRouter();
  // 関数
  const clickRouter = () => {
    router.push(`/`);
  };
  return (
    <>
      <div className="result-again">
        <Button
          onClick={() => {
            clickRouter();
          }}
          variant="outlined"
          sx={{
            width: "256px",
            color: "rgba(219, 124, 153, 1.0)",
            fontWeight: "bold",
            borderColor: "rgba(219, 124, 153, 1.0)",
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
            padding: "10px",
            "&:hover": {
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {label}
        </Button>
      </div>
      <style jsx>{`
        .result-again {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default ResultAgain;

ResultAgain.displayName = "../components/result/ResultAgain";
