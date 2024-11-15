const ranges = [
  { min: 0, max: 20, ratio: 0.179 },
  { min: 21, max: 30, ratio: 0.111 },
  { min: 31, max: 40, ratio: 0.12 },
  { min: 41, max: 50, ratio: 0.136 },
  { min: 51, max: 60, ratio: 0.149 },
  { min: 61, max: 70, ratio: 0.124 },
  { min: 71, max: 80, ratio: 0.12 }
];

const getAgeRatio = (selectedRange) => {
  const [selectedMin, selectedMax] = selectedRange;
  let totalRatio = 0;

  for (const range of ranges) {
    // 選択範囲とデータ範囲が交差する部分を計算
    const overlapMin = Math.max(selectedMin, range.min);
    const overlapMax = Math.min(selectedMax, range.max);

    // 交差する範囲がある場合のみ計算
    if (overlapMin < overlapMax) {
      const rangeLength = range.max - range.min + 1;
      const overlapLength = overlapMax - overlapMin + 1;
      const overlapRatio = overlapLength / rangeLength;

      // 交差する範囲に応じた割合を加算
      totalRatio += range.ratio * overlapRatio;
    }
  }

  return totalRatio;
};

export default getAgeRatio;