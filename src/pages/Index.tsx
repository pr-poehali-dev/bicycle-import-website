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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [compareList, setCompareList] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    priceRange: [20000, 100000],
    materials: [] as string[],
    groupsets: [] as string[],
    categories: [] as string[],
  });

  const bikes = [
    {
      id: 1,
      name: "Горный велосипед Dragon Peak",
      price: 45000,
      category: "Горный",
      material: "Алюминий",
      groupset: "Shimano Deore",
      weight: 13.5,
      speeds: 21,
      wheelSize: 27.5,
      image: "/img/bb705cf8-946d-4162-a520-ef6c3b3e81f8.jpg",
      description: "Прочный горный велосипед для экстремальных приключений",
      features: [
        "Алюминиевая рама",
        "21 скорость",
        "Дисковые тормоза",
        "Амортизатор",
      ],
      specs: {
        frame: "Алюминий 6061",
        fork: "SR Suntour XCT",
        brakes: "Дисковые механические",
        crankset: "Shimano FC-M131",
      },
    },
    {
      id: 2,
      name: "Городской электробайк Phoenix",
      price: 65000,
      category: "Электро",
      material: "Алюминий",
      groupset: "Shimano Nexus",
      weight: 22.0,
      speeds: 7,
      wheelSize: 28,
      image: "/img/4667ff1f-babc-4429-977e-6cb57a673c64.jpg",
      description: "Современный электровелосипед для городских поездок",
      features: [
        "Электромотор",
        "Батарея 48V",
        "Запас хода 60км",
        "USB зарядка",
      ],
      specs: {
        frame: "Алюминий 6061",
        motor: "Bafang 350W",
        battery: "48V 10Ah",
        display: "LCD дисплей",
      },
    },
    {
      id: 3,
      name: "Шоссейный велосипед Lightning",
      price: 55000,
      category: "Шоссейный",
      material: "Карбон",
      groupset: "Shimano 105",
      weight: 8.5,
      speeds: 16,
      wheelSize: 28,
      image: "/img/89ce7207-4332-4456-9ace-ea946e9fbf53.jpg",
      description: "Скоростной велосипед для шоссейных гонок",
      features: [
        "Карбоновая рама",
        "16 скоростей",
        "Аэродинамический дизайн",
        "Шоссейные покрышки",
      ],
      specs: {
        frame: "Карбон T700",
        fork: "Карбон",
        brakes: "Ободные Shimano",
        crankset: "Shimano FC-R345",
      },
    },
    {
      id: 4,
      name: "Гибридный велосипед Urban Mix",
      price: 38000,
      category: "Гибрид",
      material: "Микс",
      groupset: "Shimano Altus",
      weight: 11.8,
      speeds: 24,
      wheelSize: 28,
      image: "/img/bb705cf8-946d-4162-a520-ef6c3b3e81f8.jpg",
      description: "Универсальный велосипед для города и легкого бездорожья",
      features: [
        "Микс рама",
        "24 скорости",
        "Гибридные покрышки",
        "Эргономичные грипсы",
      ],
      specs: {
        frame: "Алюминий/Сталь",
        fork: "Стальная жесткая",
        brakes: "V-brake",
        crankset: "Shimano FC-M131",
      },
    },
    {
      id: 5,
      name: "Карбоновый шоссейник Pro Race",
      price: 85000,
      category: "Шоссейный",
      material: "Карбон",
      groupset: "Shimano Ultegra",
      weight: 7.2,
      speeds: 22,
      wheelSize: 28,
      image: "/img/89ce7207-4332-4456-9ace-ea946e9fbf53.jpg",
      description: "Профессиональный шоссейный велосипед для спорта",
      features: [
        "Карбон T800",
        "22 скорости",
        "Аэро руль",
        "Гоночная геометрия",
      ],
      specs: {
        frame: "Карбон T800",
        fork: "Карбон аэро",
        brakes: "Дисковые гидравлические",
        crankset: "Shimano FC-R6800",
      },
    },
    {
      id: 6,
      name: "Алюминиевый MTB Trail",
      price: 32000,
      category: "Горный",
      material: "Алюминий",
      groupset: "Shimano Acera",
      weight: 14.2,
      speeds: 18,
      wheelSize: 26,
      image: "/img/bb705cf8-946d-4162-a520-ef6c3b3e81f8.jpg",
      description: "Надежный горный велосипед для трейлов",
      features: [
        "Алюминиевая рама",
        "18 скоростей",
        "Передний амортизатор",
        "Широкие покрышки",
      ],
      specs: {
        frame: "Алюминий 6061",
        fork: "SR Suntour XCE",
        brakes: "V-brake",
        crankset: "Shimano FC-M131",
      },
    },
  ];

  const sizeGuide = {
    XS: "до 155 см",
    S: "155-165 см",
    M: "165-175 см",
    ML: "175-185 см",
    L: "185+ см",
  };

  const materials = ["Алюминий", "Карбон", "Микс"];
  const groupsets = [
    "Shimano Deore",
    "Shimano Nexus",
    "Shimano 105",
    "Shimano Altus",
    "Shimano Ultegra",
    "Shimano Acera",
  ];
  const categories = ["Горный", "Шоссейный", "Электро", "Гибрид"];

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

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType as keyof typeof prev].includes(value)
        ? (prev[filterType as keyof typeof prev] as string[]).filter(
            (item) => item !== value,
          )
        : [...(prev[filterType as keyof typeof prev] as string[]), value],
    }));
  };

  const handleCompareToggle = (bikeId: number) => {
    setCompareList((prev) =>
      prev.includes(bikeId)
        ? prev.filter((id) => id !== bikeId)
        : [...prev, bikeId],
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const compareModalContent =
    compareList.length > 0 ? (
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
    ) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
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

      {/* Catalog with Filters */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#1C1C1C]">
            Каталог велосипедов
          </h3>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
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
                        setFilters((prev) => ({ ...prev, priceRange: value }))
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
                    <Label className="text-sm font-medium mb-3 block">
                      Категория
                    </Label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={category}
                            checked={filters.categories.includes(category)}
                            onCheckedChange={() =>
                              handleFilterChange("categories", category)
                            }
                          />
                          <Label
                            htmlFor={category}
                            className="text-sm cursor-pointer"
                          >
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
                        <div
                          key={material}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={material}
                            checked={filters.materials.includes(material)}
                            onCheckedChange={() =>
                              handleFilterChange("materials", material)
                            }
                          />
                          <Label
                            htmlFor={material}
                            className="text-sm cursor-pointer"
                          >
                            {material}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Groupsets */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Групсет
                    </Label>
                    <div className="space-y-2">
                      {groupsets.map((groupset) => (
                        <div
                          key={groupset}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={groupset}
                            checked={filters.groupsets.includes(groupset)}
                            onCheckedChange={() =>
                              handleFilterChange("groupsets", groupset)
                            }
                          />
                          <Label
                            htmlFor={groupset}
                            className="text-sm cursor-pointer"
                          >
                            {groupset}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      setFilters({
                        priceRange: [20000, 100000],
                        materials: [],
                        groupsets: [],
                        categories: [],
                      })
                    }
                  >
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-4 text-sm text-gray-600">
                Найдено: {filteredBikes.length} из {bikes.length} велосипедов
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBikes.map((bike) => (
                  <Card
                    key={bike.id}
                    className="overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={bike.image}
                        alt={bike.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-[#C41E3A] text-white">
                          {bike.category}
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/80 hover:bg-white"
                          onClick={() => handleCompareToggle(bike.id)}
                        >
                          <Icon
                            name={
                              compareList.includes(bike.id) ? "Check" : "Plus"
                            }
                            size={16}
                          />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-[#1C1C1C]">
                        {bike.name}
                      </CardTitle>
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
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
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
                            onClick={() =>
                              document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            Заказать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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

      {/* Compare Modal */}
      {compareModalContent}
    </div>
  );
};

export default Index;
