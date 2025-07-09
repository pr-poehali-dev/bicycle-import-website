import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Bike" size={24} className="text-[#C41E3A]" />
              <h5 className="text-xl font-bold">Chinese Bicycles</h5>
            </div>
            <p className="text-gray-400">
              Качественные велосипеды прямо из Китая
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Контакты</h6>
            <div className="space-y-2 text-gray-400">
              <p>📧 info@chinese-bikes.ru</p>
              <p>📱 +7 (999) 123-45-67</p>
              <p>
                💬 Техподдержка:
                <a
                  href="https://t.me/YOUR_TELEGRAM_USERNAME"
                  className="text-[#C41E3A] ml-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @YOUR_TELEGRAM_USERNAME
                </a>
              </p>
            </div>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Информация</h6>
            <div className="space-y-2 text-gray-400">
              <p>• Доставка: 18-21 день</p>
              <p>• Гарантия: 1 год</p>
              <p>• Возврат: 14 дней</p>
              <p>• Сравнение моделей</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Chinese Bicycles. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
