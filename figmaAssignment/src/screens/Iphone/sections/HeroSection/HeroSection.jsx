import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ScrollArea,
  ScrollBar,
} from "../../../../components/ui/scroll-area";

export const HeroSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      location: "Mumbai",
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-68.png",
    },
    {
      id: 2,
      name: "Kavita Sharma",
      location: "Bangalore",
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-68-1.png",
    },
    {
      id: 3,
      name: "Neha Joshi",
      location: "Delhi",
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-68-2.png",
    },
    {
      id: 4,
      name: "Viram Desai",
      location: "Chennai",
      image:
        "https://c.animaapp.com/mc5ug0d6upZiHg/img/a-dental-clinic-setup-.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-5 w-full px-4">
      {/* heading */}
      <header className="text-center">
        <h2 className="text-lg font-bold text-black">
          Real Smiles, Real Transformations
        </h2>
        <p className="text-base text-text-2 leading-5">
          See the life-changing results our dental implant patients enjoy
        </p>
      </header>

      {/* pure Radix ScrollArea carousel */}
      <ScrollArea className="w-full">
        <div className="flex gap-4 w-max">
          {testimonials.map((t) => (
            <div
              /*  --> width fixed + no shrinking → true overflow */
              key={t.id}
              className="shrink-0 w-[260px] sm:w-[300px]"
            >
              <Card className="border-none shadow-none">
                <CardContent className="p-0 flex flex-col gap-3">
                  <img
                    src={t.image}
                    alt={`${t.name}'s transformation`}
                    /* keep full image, no crop */
                    className="w-full h-auto max-h-[220px] object-contain rounded-md"
                  />
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-[#1a1a1a]">{t.name}</span>
                    <span className="text-[#f58420]">{t.location}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* nice draggable scrollbar for desktop users */}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
