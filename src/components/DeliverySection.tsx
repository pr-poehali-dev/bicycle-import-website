import Icon from "@/components/ui/icon";

export const DeliverySection = () => {
  return (
    <section className="py-16 bg-[#C41E3A] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-4">
            <Icon name="Truck" size={48} className="mx-auto" />
            <h4 className="text-xl font-bold">Доставка 18-21 день</h4>
            <p>Прямые поставки из Китая с отслеживанием</p>
          </div>
          <div className="space-y-4">
            <Icon name="Shield" size={48} className="mx-auto" />
            <h4 className="text-xl font-bold">Гарантия качества</h4>
            <p>Все велосипеды проходят проверку перед отправкой</p>
          </div>
          <div className="space-y-4">
            <Icon name="MessageCircle" size={48} className="mx-auto" />
            <h4 className="text-xl font-bold">Техподдержка в Telegram</h4>
            <p>Быстрая помощь и консультации</p>
          </div>
          <div className="space-y-4">
            <Icon name="GitCompare" size={48} className="mx-auto" />
            <h4 className="text-xl font-bold">Сравнение моделей</h4>
            <p>Выберите лучший велосипед для себя</p>
          </div>
        </div>
      </div>
    </section>
  );
};
