import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import getHeightRatio from "@/calculation/heightProcess";
import { useRatio } from "@/contexts/RatioContext";

const Style = styled(Slider)({
  color: "#DB7C99",
  height: 6,
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    border: "2px solid #FFFFFF",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(233, 30, 99, 0.16)",
    },
  },
  "& .MuiSlider-rail": {
    color: "#E8E9EC",
    opacity: 1,
    height: 6,
  },
  // 左端マークラベル調整
  '& .MuiSlider-markLabel[data-index="0"]': {
    transform: "translateX(-40%)",
  },
  // 右端マークラベル調整
  '& .MuiSlider-markLabel[data-index="1"]': {
    transform: "translateX(-70%)",
  },
});

const HeightSlider = () => {
  // ステート
  const [value, setValue] = useState([160, 180]);
  // 関数
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { genderRatio, setHeightRatio } = useRatio(); // Contextの関数
  // 副作用
  useEffect(() => {
    const genderId = genderRatio === 0.48 ? 1 : 2;
    const ratio = getHeightRatio(value, genderId); // 対応表から出す期待値
    console.log(`身長：${ratio}`);
    setHeightRatio(ratio); // heightRatioを更新
  }, [value, genderRatio, setHeightRatio]);

  return (
    <Box width={300} mx="auto">
      <Style
        value={value}
        onChange={handleChange}
        onChangeCommitted={(event, newValue) => setValue(newValue)} // ドラッグ終了時に現在値を保持
        min={150}
        max={190}
        valueLabelDisplay="on" // 現在値を表示
        marks={[
          { value: 150, label: "150cm" },
          { value: 190, label: "190cm" },
        ]}
      />
    </Box>
  );
};

export default HeightSlider;

HeightSlider.displayName = "../components/custom/HeightSlider";
