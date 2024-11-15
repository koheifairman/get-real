import Image from "next/image";
import { useState } from "react";
import { Button } from "@mui/material";

import { icon, label } from "@/datas/result/share";

const ResultShare = () => {
  // ステート
  const [isClicked, setIsClicked] = useState(false);
  // 関数
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <div className="result-share">
        <div className="share-button">
          <Button
            onClick={() => {
              handleClick();
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
          <div className="icon-container">
            <Image src={icon.src} alt={icon.label} width={14} height={14} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .share-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          position: relative;
        }
        .icon-container {
          padding-right: 10px;
          position: absolute;
          top: 10px;
          left: 135px;
        }
      `}</style>
    </>
  );
};

export default ResultShare;

ResultShare.displayName = "../components/result/ResultShare";
