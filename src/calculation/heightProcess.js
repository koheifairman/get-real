const maleRanges = [
  { min: 151, max: 160, ratio: 0.0185 },
  { min: 161, max: 170, ratio: 0.5 },
  { min: 171, max: 180, ratio: 0.4615 },
  { min: 181, max: 190, ratio: 0.02 }
];

const femaleRanges = [
  { min: 151, max: 160, ratio: 0.75 },
  { min: 161, max: 170, ratio: 0.2 },
  { min: 171, max: 180, ratio: 0.03 },
  { min: 181, max: 190, ratio: 0.02 }
];

// 選択された身長範囲と性別に基づき割合を計算する関数
const getHeightRatio = (selectedRange, genderId) => {
  const [selectedMin, selectedMax] = selectedRange;
  const heightRanges = genderId === 1 ? maleRanges : femaleRanges;
  let totalRatio = 0;

  for (const range of heightRanges) {
    // 選択範囲とデータ範囲が交差する部分を計算
    const overlapMin = Math.max(selectedMin, range.min);
    const overlapMax = Math.min(selectedMax, range.max);

    // 交差する範囲がある場合のみ計算
    if (overlapMin <= overlapMax) {
      const rangeLength = range.max - range.min + 1;
      const overlapLength = overlapMax - overlapMin + 1;
      const overlapRatio = overlapLength / rangeLength;

      // 交差する範囲に応じた割合を加算
      totalRatio += range.ratio * overlapRatio;
    }
  }

  return totalRatio;
};

export default getHeightRatio;
