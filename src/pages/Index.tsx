import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SizeGuideSection } from "@/components/SizeGuideSection";
import { FiltersPanel } from "@/components/FiltersPanel";
import { BikeCard } from "@/components/BikeCard";
import { CompareModal } from "@/components/CompareModal";
import { ContactSection } from "@/components/ContactSection";
import { DeliverySection } from "@/components/DeliverySection";
import { Footer } from "@/components/Footer";
import { useFilters } from "@/hooks/useFilters";
import { useCompare } from "@/hooks/useCompare";
import {
  bikes,
  sizeGuide,
  materials,
  groupsets,
  categories,
} from "@/data/bikes";
import { ContactForm } from "@/types/bike";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const {
    filters,
    setFilters,
    handleFilterChange,
    resetFilters,
    filteredBikes,
  } = useFilters(bikes);
  const { compareList, handleCompareToggle } = useCompare();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const handleOrderClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <HeroSection />
      <SizeGuideSection sizeGuide={sizeGuide} />

      {/* Catalog with Filters */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#1C1C1C]">
            Каталог велосипедов
          </h3>

          <div className="flex flex-col lg:flex-row gap-8">
            <FiltersPanel
              filters={filters}
              setFilters={setFilters}
              handleFilterChange={handleFilterChange}
              resetFilters={resetFilters}
              materials={materials}
              groupsets={groupsets}
              categories={categories}
            />

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-4 text-sm text-gray-600">
                Найдено: {filteredBikes.length} из {bikes.length} велосипедов
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBikes.map((bike) => (
                  <BikeCard
                    key={bike.id}
                    bike={bike}
                    isInCompare={compareList.includes(bike.id)}
                    onCompareToggle={handleCompareToggle}
                    onOrderClick={handleOrderClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        contactForm={contactForm}
        setContactForm={setContactForm}
        handleContactSubmit={handleContactSubmit}
        sizeGuide={sizeGuide}
      />

      <DeliverySection />
      <Footer />

      <CompareModal compareList={compareList} bikes={bikes} />
    </div>
  );
};

export default Index;
