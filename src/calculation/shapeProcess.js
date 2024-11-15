const getShapeRatio = (clickedId) => {
    if (clickedId === 1) return 0.225; // ぽっちゃり
    if (clickedId === 2) return 0.578; // 普通
    if (clickedId === 3) return 0.197; // マッチョ
    return undefined; // 未選択
  };
  
  export default getShapeRatio;
  