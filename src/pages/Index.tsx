import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const bikes = [
    {
      id: 1,
      name: "Горный велосипед Dragon Peak",
      price: "₽45,000",
      image: "/img/bb705cf8-946d-4162-a520-ef6c3b3e81f8.jpg",
      description: "Прочный горный велосипед для экстремальных приключений",
      features: ["Алюминиевая рама", "21 скорость", "Дисковые тормоза"],
    },
    {
      id: 2,
      name: "Городской электробайк Phoenix",
      price: "₽65,000",
      image: "/img/4667ff1f-babc-4429-977e-6cb57a673c64.jpg",
      description: "Современный электровелосипед для городских поездок",
      features: ["Электромотор", "Батарея 48V", "Запас хода 60км"],
    },
    {
      id: 3,
      name: "Шоссейный велосипед Lightning",
      price: "₽55,000",
      image: "/img/89ce7207-4332-4456-9ace-ea946e9fbf53.jpg",
      description: "Скоростной велосипед для шоссейных гонок",
      features: ["Карбоновая рама", "16 скоростей", "Аэродинамический дизайн"],
    },
  ];

  const sizeGuide = {
    XS: "до 155 см",
    S: "155-165 см",
    M: "165-175 см",
    ML: "175-185 см",
    L: "185+ см",
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual form submission logic
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-[#C41E3A]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Bike" size={32} className="text-[#C41E3A]" />
              <h1 className="text-2xl font-bold text-[#1C1C1C]">
                Chinese Bicycles
              </h1>
            </div>
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#A01729] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Качественные велосипеды из Китая
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Прямые поставки качественных велосипедов. Выбирайте размер по росту
            и получайте через 18-21 день.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#C41E3A] hover:bg-gray-100"
          >
            Выбрать велосипед
          </Button>
        </div>
      </section>

      {/* Size Guide */}
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

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#1C1C1C]">
            Наши велосипеды
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes.map((bike) => (
              <Card
                key={bike.id}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#1C1C1C]">
                    {bike.name}
                  </CardTitle>
                  <CardDescription>{bike.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {bike.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-[#C41E3A] text-white"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#C41E3A]">
                        {bike.price}
                      </span>
                      <Button className="bg-[#C41E3A] hover:bg-[#A01729]">
                        Выбрать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-[#1C1C1C]">
              Оформить заказ
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#C41E3A]">
                  Свяжитесь с нами для подтверждения заказа
                </CardTitle>
                <CardDescription>
                  Выберите размер и оставьте контакты. Мы свяжемся с вами для
                  подтверждения заказа.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="size">Выберите размер велосипеда</Label>
                    <Select
                      value={selectedSize}
                      onValueChange={setSelectedSize}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите размер" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(sizeGuide).map(([size, height]) => (
                          <SelectItem key={size} value={size}>
                            {size} ({height})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            phone: e.target.value,
                          })
                        }
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      placeholder="Укажите модель велосипеда и дополнительные пожелания"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#C41E3A] hover:bg-[#A01729]"
                  >
                    Отправить заказ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 bg-[#C41E3A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
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
              <Icon name="Phone" size={48} className="mx-auto" />
              <h4 className="text-xl font-bold">Поддержка 24/7</h4>
              <p>Помощь в выборе и консультации по товару</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <p>🕒 Работаем 24/7</p>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Информация</h6>
              <div className="space-y-2 text-gray-400">
                <p>• Доставка: 18-21 день</p>
                <p>• Гарантия: 1 год</p>
                <p>• Возврат: 14 дней</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Chinese Bicycles. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
