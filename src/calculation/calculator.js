const calculator = (genderRatio, shapeRatio, ageRatio, heightRatio, incomeRatio) => {
    const value = genderRatio * shapeRatio * ageRatio * heightRatio * incomeRatio * 100;
    const arrangedValue = value.toFixed(1);

    return arrangedValue;
  };
  
  export {calculator};