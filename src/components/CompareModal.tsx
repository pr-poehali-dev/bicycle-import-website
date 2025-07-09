import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bike } from "@/types/bike";

interface CompareModalProps {
  compareList: number[];
  bikes: Bike[];
}

export const CompareModal = ({ compareList, bikes }: CompareModalProps) => {
  if (compareList.length === 0) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 bg-[#C41E3A] hover:bg-[#A01729] z-50"
          disabled={compareList.length === 0}
        >
          Сравнить ({compareList.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Сравнение велосипедов</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">Параметр</TableHead>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return (
                    <TableHead key={id} className="min-w-40">
                      {bike?.name}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Изображение</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return (
                    <TableCell key={id}>
                      <img
                        src={bike?.image}
                        alt={bike?.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Цена</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return (
                    <TableCell key={id} className="text-[#C41E3A] font-bold">
                      ₽{bike?.price.toLocaleString()}
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Категория</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return <TableCell key={id}>{bike?.category}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Материал</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return <TableCell key={id}>{bike?.material}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Групсет</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return <TableCell key={id}>{bike?.groupset}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Вес (кг)</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return <TableCell key={id}>{bike?.weight}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Скорости</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return <TableCell key={id}>{bike?.speeds}</TableCell>;
                })}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Размер колес</TableCell>
                {compareList.map((id) => {
                  const bike = bikes.find((b) => b.id === id);
                  return <TableCell key={id}>{bike?.wheelSize}"</TableCell>;
                })}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
