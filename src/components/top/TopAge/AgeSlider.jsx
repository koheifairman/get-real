import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import getAgeRatio from '@/calculation/ageProcess';

const Style = styled(Slider)({
  'color': '#DB7C99',
  'height': 6,
  '& .MuiSlider-thumb': {
    'height': 24,
    'width': 24,
    'border': '2px solid #FFFFFF',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(233, 30, 99, 0.16)',
    },
  },
  '& .MuiSlider-rail': {
    color: '#E8E9EC',
    opacity: 1,
    height: 6,
  },
});

const AgeSlider = ({ ageRange, setAgeRange }) => {
  // ステート
  const [value, setValue] = useState([20, 40]);
  // 関数
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { setAgeRatio } = useRatio(); // Contextの関数
  // 副作用
  useEffect(() => {
    const ratio = getAgeRatio(value); // 対応表から出す期待値
    console.log(`年齢：${ratio}`);
    setAgeRatio(ratio); // ageRatioを更新
  }, [value, setAgeRatio]);

  return (
    <Box width={300} mx="auto">
      <Style
        value={value}
        onChange={handleChange}
        onChangeCommitted={(event, newValue) => setValue(newValue)} // ドラッグ終了時に現在値を保持
        min={0}
        max={80}
        valueLabelDisplay="on" // 現在値を表示
        marks={[
          { value: 0, label: '0歳' },
          { value: 80, label: '80歳' },
        ]}
      />
    </Box>
  );
};

export default AgeSlider;

AgeSlider.displayName = '../components/custom/AgeSlider';
