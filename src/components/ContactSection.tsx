import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactForm, SizeGuide } from "@/types/bike";

interface ContactSectionProps {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  contactForm: ContactForm;
  setContactForm: (form: ContactForm) => void;
  handleContactSubmit: (e: React.FormEvent) => void;
  sizeGuide: SizeGuide;
}

export const ContactSection = ({
  selectedSize,
  setSelectedSize,
  contactForm,
  setContactForm,
  handleContactSubmit,
  sizeGuide,
}: ContactSectionProps) => {
  return (
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
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
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
  );
};
