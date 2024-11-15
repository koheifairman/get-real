const getGenderRatio = (clickedId) => {
  if (clickedId === 1) return 0.48; // 男性
  if (clickedId === 2) return 0.52; // 女性
  return undefined; // 未選択
};

export default getGenderRatio;