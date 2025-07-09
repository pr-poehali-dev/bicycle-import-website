import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Bike } from "@/types/bike";

interface BikeCardProps {
  bike: Bike;
  isInCompare: boolean;
  onCompareToggle: (bikeId: number) => void;
  onOrderClick: () => void;
}

export const BikeCard = ({
  bike,
  isInCompare,
  onCompareToggle,
  onOrderClick,
}: BikeCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-[#C41E3A] text-white">{bike.category}</Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/80 hover:bg-white"
            onClick={() => onCompareToggle(bike.id)}
          >
            <Icon name={isInCompare ? "Check" : "Plus"} size={16} />
          </Button>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg text-[#1C1C1C]">{bike.name}</CardTitle>
        <CardDescription>{bike.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600">Материал:</span>
              <div className="font-medium">{bike.material}</div>
            </div>
            <div>
              <span className="text-gray-600">Групсет:</span>
              <div className="font-medium">{bike.groupset}</div>
            </div>
            <div>
              <span className="text-gray-600">Вес:</span>
              <div className="font-medium">{bike.weight} кг</div>
            </div>
            <div>
              <span className="text-gray-600">Скорости:</span>
              <div className="font-medium">{bike.speeds}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {bike.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#C41E3A]">
              ₽{bike.price.toLocaleString()}
            </span>
            <Button
              className="bg-[#C41E3A] hover:bg-[#A01729]"
              onClick={onOrderClick}
            >
              Заказать
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
