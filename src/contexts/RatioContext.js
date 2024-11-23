import { createContext, useContext, useState } from 'react';

// Context作成
const RatioContext = createContext();

// Providerコンポーネント
export const RatioProvider = ({ children }) => {
  const [genderRatio, setGenderRatio] = useState(undefined);
  const [shapeRatio, setShapeRatio] = useState(undefined);
  const [ageRatio, setAgeRatio] = useState(undefined);
  const [heightRatio, setHeightRatio] = useState(undefined);
  const [incomeRatio, setIncomeRatio] = useState(undefined);

  return (
    <RatioContext.Provider
      value={{
        genderRatio,
        setGenderRatio,
        shapeRatio,
        setShapeRatio,
        ageRatio,
        setAgeRatio,
        heightRatio,
        setHeightRatio,
        incomeRatio,
        setIncomeRatio,
      }}
    >
      {children}
    </RatioContext.Provider>
  );
};

// Contextを利用するフック
export const useRatio = () => useContext(RatioContext);

RatioProvider.displayName = '../contexts/RatioContext';
