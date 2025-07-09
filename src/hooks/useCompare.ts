import { useState } from "react";

export const useCompare = () => {
  const [compareList, setCompareList] = useState<number[]>([]);

  const handleCompareToggle = (bikeId: number) => {
    setCompareList((prev) =>
      prev.includes(bikeId)
        ? prev.filter((id) => id !== bikeId)
        : [...prev, bikeId],
    );
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return {
    compareList,
    handleCompareToggle,
    clearCompare,
  };
};
