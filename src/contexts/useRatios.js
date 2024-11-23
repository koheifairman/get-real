import { useState } from 'react';

export const useRatios = () => {
  // const [genderRatio, setGenderRatio] = useState(undefined);
  // const [shapeRatio, setShapeRatio] = useState(undefined);
  // const [ageRatio, setAgeRatio] = useState(undefined);
  // const [heightRatio, setHeightRatio] = useState(undefined);
  // const [incomeRatio, setIncomeRatio] = useState(undefined);

  const [ageRange, setAgeRange] = useState([20, 40]);

  return {
    // genderRatio,
    // setGenderRatio,
    // shapeRatio,
    // setShapeRatio,
    // ageRatio,
    // setAgeRatio,
    // heightRatio,
    // setHeightRatio,
    // incomeRatio,
    // setIncomeRatio,

    ageRange,
    setAgeRange,
  };
};
