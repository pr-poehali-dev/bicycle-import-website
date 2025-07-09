import { useState } from "react";
import { Filters, Bike } from "@/types/bike";

export const useFilters = (bikes: Bike[]) => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [20000, 100000],
    materials: [],
    groupsets: [],
    categories: [],
  });

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? (prev[filterType] as string[]).filter((item) => item !== value)
        : [...(prev[filterType] as string[]), value],
    }));
  };

  const resetFilters = () => {
    setFilters({
      priceRange: [20000, 100000],
      materials: [],
      groupsets: [],
      categories: [],
    });
  };

  const filteredBikes = bikes.filter((bike) => {
    const priceInRange =
      bike.price >= filters.priceRange[0] &&
      bike.price <= filters.priceRange[1];
    const materialMatch =
      filters.materials.length === 0 ||
      filters.materials.includes(bike.material);
    const groupsetMatch =
      filters.groupsets.length === 0 ||
      filters.groupsets.includes(bike.groupset);
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(bike.category);

    return priceInRange && materialMatch && groupsetMatch && categoryMatch;
  });

  return {
    filters,
    setFilters,
    handleFilterChange,
    resetFilters,
    filteredBikes,
  };
};
