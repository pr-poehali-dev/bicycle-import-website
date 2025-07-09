import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Filters } from "@/types/bike";

interface FiltersPanelProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  handleFilterChange: (filterType: keyof Filters, value: string) => void;
  resetFilters: () => void;
  materials: string[];
  groupsets: string[];
  categories: string[];
}

export const FiltersPanel = ({
  filters,
  setFilters,
  handleFilterChange,
  resetFilters,
  materials,
  groupsets,
  categories,
}: FiltersPanelProps) => {
  return (
    <div className="lg:w-1/4">
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle className="text-[#C41E3A]">Фильтры</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Цена: ₽{filters.priceRange[0].toLocaleString()} - ₽
              {filters.priceRange[1].toLocaleString()}
            </Label>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) =>
                setFilters({
                  ...filters,
                  priceRange: value as [number, number],
                })
              }
              max={100000}
              min={20000}
              step={5000}
              className="w-full"
            />
          </div>

          <Separator />

          {/* Categories */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Категория</Label>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() =>
                      handleFilterChange("categories", category)
                    }
                  />
                  <Label htmlFor={category} className="text-sm cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Materials */}
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Материал рамы
            </Label>
            <div className="space-y-2">
              {materials.map((material) => (
                <div key={material} className="flex items-center space-x-2">
                  <Checkbox
                    id={material}
                    checked={filters.materials.includes(material)}
                    onCheckedChange={() =>
                      handleFilterChange("materials", material)
                    }
                  />
                  <Label htmlFor={material} className="text-sm cursor-pointer">
                    {material}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Groupsets */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Групсет</Label>
            <div className="space-y-2">
              {groupsets.map((groupset) => (
                <div key={groupset} className="flex items-center space-x-2">
                  <Checkbox
                    id={groupset}
                    checked={filters.groupsets.includes(groupset)}
                    onCheckedChange={() =>
                      handleFilterChange("groupsets", groupset)
                    }
                  />
                  <Label htmlFor={groupset} className="text-sm cursor-pointer">
                    {groupset}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={resetFilters}>
            Сбросить фильтры
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
