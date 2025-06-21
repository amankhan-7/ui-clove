import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const ContactSection = () => {
  const locations = [
    {
      city: "Delhi/NCR",
      clinics: "190 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934678.svg",
      fullWidth: true,
    },
    {
      city: "Banglore",
      clinics: "110 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934722.svg",
      fullWidth: true,
    },
    {
      city: "Mumbai",
      clinics: "40 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934686.svg",
      fullWidth: false,
    },
    {
      city: "Chennai",
      clinics: "59 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-260934680.svg",
      fullWidth: false,
    },
    {
      city: "Hyderabad",
      clinics: "76 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/vector.svg",
      fullWidth: false,
      iconLeft: "17px",
    },
    {
      city: "Punjab",
      clinics: "27 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/group.png",
      fullWidth: false,
      iconTop: "17px",
      iconLeft: "3.5",
    },
    {
      city: "Hyderabad",
      clinics: "76 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/vector.svg",
      fullWidth: false,
      iconLeft: "17px",
    },
    {
      city: "Punjab",
      clinics: "27 Clinics",
      icon: "https://c.animaapp.com/mc5ug0d6upZiHg/img/group-1.png",
      fullWidth: false,
      iconTop: "17px",
      iconLeft: "3.5",
    },
  ];

  const galleryImages = [
    "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-3046.png",
    "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-3046-1.png",
    "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-3046-2.png",
  ];

  const renderLocationCard = (location, index) => {
    const cardWidth = location.fullWidth ? "flex-1 grow" : "w-[170px]";
    const iconTop = location.iconTop || (location.fullWidth ? "4" : "4");
    const iconLeft =
      location.iconLeft ||
      (location.fullWidth ? (index % 2 === 0 ? "2.5" : "11px") : "9px");

    return (
      <Card
        key={`${location.city}-${index}`}
        className={`relative ${cardWidth} h-[86px] bg-white rounded-lg overflow-hidden border border-solid border-[#d0d0d0]`}
      >
        <CardContent className="p-0">
          <div
            className="inline-flex items-center gap-3 relative"
            style={{ top: iconTop, left: iconLeft }}
          >
            <img
              className="relative w-auto h-[54px]"
              alt={`${location.city} icon`}
              src={location.icon}
            />
            <div className="flex flex-col items-start gap-3 relative">
              <div className="relative w-fit mt-[-1.00px] font-bold text-text-1 text-base leading-6 whitespace-nowrap">
                {location.city}
              </div>
              <div className="relative font-semibold text-text-1 text-base leading-6">
                {location.clinics}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-col w-full max-w-[350px] items-start justify-end gap-10 relative">
      <div className="flex flex-col items-center gap-2 relative self-stretch w-full">
        <h2 className="relative w-fit mt-[-1.00px] font-bold text-text-1 text-xl leading-[26px] whitespace-nowrap">
          Find Us Across India
        </h2>
        <p className="relative self-stretch font-normal text-text-2 text-base text-center leading-[20.8px]">
          With over 500 clinics across India, you&apos;re never too far from a
          Clove Dental clinic. Choose your preferred city to book an
          appointment.
        </p>
      </div>

      <div className="flex flex-col w-full items-start gap-2.5 relative">
        <div className="flex items-center gap-2.5 relative self-stretch w-full">
          {renderLocationCard(locations[0], 0)}
          {renderLocationCard(locations[1], 1)}
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full">
          {renderLocationCard(locations[2], 2)}
          {renderLocationCard(locations[3], 3)}
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full">
          {renderLocationCard(locations[4], 4)}
          {renderLocationCard(locations[5], 5)}
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full">
          {renderLocationCard(locations[6], 6)}
          {renderLocationCard(locations[7], 7)}
        </div>
      </div>

      <ScrollArea className="w-full">
        <div className="flex items-center gap-3 relative self-stretch w-full">
          {galleryImages.map((image, index) => (
            <Card
              key={`gallery-${index}`}
              className="inline-flex flex-col items-end justify-end relative self-stretch flex-shrink-0 bg-white rounded-lg overflow-hidden border border-solid border-[#afafaf]"
            >
              <CardContent className="p-0">
                <img
                  className="relative self-stretch w-full h-[207px] object-cover"
                  alt={`Clinic image ${index + 1}`}
                  src={image}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
