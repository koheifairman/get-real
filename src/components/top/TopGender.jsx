import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import { title, options } from "@/datas/top/gender";
import getGenderRatio from "@/calculation/genderProcess";
import { useRatio } from "@/contexts/RatioContext";

const TopGender = () => {
  // ステート
  const [clickedId, setClickedId] = useState(undefined);
  // 関数
  const handleClick = (id) => {
    setClickedId(id);
  };
  const { setGenderRatio } = useRatio(); // Contextの関数
  // 副作用
  useEffect(() => {
    const ratio = getGenderRatio(clickedId); // 対応表の値
    console.log(`性別：${ratio}`);
    setGenderRatio(ratio); // genderRatioを更新
  }, [clickedId, setGenderRatio]);

  return (
    <>
      <div className="top-gender">
        <div className="top-container">
          <div className="section-title">{title}</div>
          <div className="button-container">
            {options.map((optionArg) => {
              const isClicked = clickedId === optionArg.id;
              return (
                <div className="button" key={optionArg.id}>
                  <Button
                    onClick={() => {
                      handleClick(optionArg.id);
                    }}
                    variant="outlined"
                    sx={{
                      width: "140px",
                      color: isClicked ? "rgba(219, 124, 153, 1.0)" : "#5A5A5A",
                      fontWeight: isClicked ? "600" : "400",
                      boxShadow: isClicked
                        ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                        : "0 6px 12px rgba(0, 0, 0, 0.1)",
                      borderColor: isClicked
                        ? "rgba(219, 124, 153, 1.0)"
                        : "transparent",
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      borderRadius: "4px",
                      padding: "10px",
                    }}
                  >
                    {optionArg.label}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .top-gender {
          color: #5a5a5a;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .button-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default TopGender;

TopGender.displayName = "../components/top/TopGender";
