import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SizeGuide } from "@/types/bike";

interface SizeGuideSectionProps {
  sizeGuide: SizeGuide;
}

export const SizeGuideSection = ({ sizeGuide }: SizeGuideSectionProps) => {
  return (
    <section id="sizes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#1C1C1C]">
          Подберите размер по росту
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {Object.entries(sizeGuide).map(([size, height]) => (
            <Card
              key={size}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-[#C41E3A]">
                  {size}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{height}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
