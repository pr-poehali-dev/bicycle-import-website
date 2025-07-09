import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-[#C41E3A] sticky top-0 z-40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Bike" size={32} className="text-[#C41E3A]" />
            <h1 className="text-2xl font-bold text-[#1C1C1C]">
              Chinese Bicycles
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#catalog"
                className="text-[#1C1C1C] hover:text-[#C41E3A] transition-colors"
              >
                Каталог
              </a>
              <a
                href="#sizes"
                className="text-[#1C1C1C] hover:text-[#C41E3A] transition-colors"
              >
                Размеры
              </a>
              <a
                href="#contact"
                className="text-[#1C1C1C] hover:text-[#C41E3A] transition-colors"
              >
                Заказать
              </a>
            </nav>
            <a
              href="https://t.me/YOUR_TELEGRAM_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#C41E3A] text-white px-4 py-2 rounded-lg hover:bg-[#A01729] transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Техподдержка</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
