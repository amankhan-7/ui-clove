import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const ContactSection = () => {
  const locations = [
    { city: "Delhi/NCR", clinics: "190 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934678.svg" },
    { city: "Banglore", clinics: "110 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934722.svg" },
    { city: "Mumbai", clinics: "40 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934686.svg" },
    { city: "Chennai", clinics: "59 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934680.svg" },
    { city: "Hyderabad", clinics: "76 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/vector.svg" },
    { city: "Punjab", clinics: "27 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/group.png" },
    { city: "Pune", clinics: "76 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/vector.svg" },
    { city: "Ahemdabad", clinics: "27 Clinics", icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/group-1.png" },
  ];

  const galleryImages = [
    "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-3046.png",
    "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-3046-1.png",
    "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-3046-2.png",
    "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-3046-1.png", // duplicated to get 2×2
  ];

  const renderLocationCard = ({ city, clinics, icon }, idx) => (
    <Card
      key={city}
      className="relative w-full max-w-full h-[86px] rounded-lg border border-[#d0d0d0] bg-white px-3"
    >
      <CardContent className="p-0">
        <div className="flex items-center gap-3 absolute top-4 left-3">
          <img src={icon} alt={`${city} icon`} className="h-[54px] w-7 md:w-auto" />
          <div>
            <p className="font-bold text-text-1 leading-6">{city}</p>
            <p className="font-semibold text-text-1 leading-6">{clinics}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-6">
      {/* headline */}
      <header className="mb-8 lg:mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-text-1">
          Find Us Across India
        </h2>
        <p className="mt-2 text-base text-text-2 max-w-3xl">
          With over 500 clinics across India, you’re never too far from a Clove
          Dental clinic. Choose your preferred city to book an appointment.
        </p>
      </header>

      {/* desktop row (becomes column on mobile) */}
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 w-full">
  {/* ─────────── Locations ─────────── */}
  <div className="flex flex-col gap-2.5 lg:w-[460px]">
    <div className="grid grid-cols-2 gap-5">
      {locations.map(renderLocationCard)}
    </div>
  </div>

  {/* ─────────── Gallery ─────────── */}
  {/* mobile scroll */}
 <ScrollArea className="mt-10 lg:hidden">
  <div className="flex gap-3">
    {galleryImages.map((src, idx) => (
      <Card key={idx} className="min-w-[260px] h-[207px] flex-shrink-0 ...">
        <CardContent className="p-0">
          <img src={src} alt={`Clinic ${idx + 1}`} className="w-full h-[200px] object-cover rounded-md"/>
        </CardContent>
      </Card>
    ))}
  </div>
</ScrollArea>

  {/* desktop grid */}
  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-5 lg:flex-1">
    {galleryImages.slice(0, 4).map((src, idx) => (
      <Card key={idx} className="w-full h-[200px] rounded-lg border border-[#afafaf] overflow-hidden">
        <CardContent className="p-0">
          <img src={src} alt={`Clinic ${idx + 1}`} className="w-full h-full object-cover" />
        </CardContent>
      </Card>
    ))}
  </div>
</div>
    </section>
  );
};
