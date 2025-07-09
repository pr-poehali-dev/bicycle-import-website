import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#A01729] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Качественные велосипеды из Китая
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Прямые поставки качественных велосипедов. Выбирайте размер по росту и
          получайте через 18-21 день.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#C41E3A] hover:bg-gray-100"
          onClick={() =>
            document
              .getElementById("catalog")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Выбрать велосипед
        </Button>
      </div>
    </section>
  );
};
