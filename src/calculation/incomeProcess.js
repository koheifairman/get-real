const ranges = [
  { min: 100, max: 200, ratio: 0.13 },
  { min: 201, max: 300, ratio: 0.146 },
  { min: 301, max: 400, ratio: 0.127 },
  { min: 401, max: 500, ratio: 0.105 },
  { min: 501, max: 600, ratio: 0.087 },
  { min: 601, max: 700, ratio: 0.072 },
  { min: 701, max: 800, ratio: 0.058 },
  { min: 801, max: 900, ratio: 0.046 },
  { min: 901, max: 1000, ratio: 0.037 }
];

const getIncomeRatio = (selectedRange) => {
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

export default getIncomeRatio;