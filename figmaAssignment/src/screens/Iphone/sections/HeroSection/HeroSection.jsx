import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

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
    <section className="flex flex-col items-start justify-center gap-5 w-full">
      <header className="flex flex-col items-center justify-center gap-2 w-full">
        <h2 className="font-bold text-text-1 text-xl leading-6 font-['Figtree',Helvetica] text-center tracking-normal">
          Real Smiles, Real Transformations
        </h2>
        <p className="font-['Figtree',Helvetica] font-normal text-text-2 text-base text-center tracking-normal leading-[20.8px]">
          See the life-changing results our dental implant patients enjoy
        </p>
      </header>

      <Carousel className="w-full overflow-x-auto">
        <CarouselContent className="flex gap-10">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="border-none shadow-none">
                <CardContent className="p-0 flex flex-col items-start gap-3">
                  <img
                    className="w-full h-[200px] object-cover"
                    alt={`${testimonial.name}'s transformation`}
                    src={testimonial.image}
                  />
                  <div className="flex items-start justify-between w-full">
                    <span className="font-['Figtree',Helvetica] font-semibold text-[#1a1a1a] text-base tracking-normal leading-normal whitespace-nowrap">
                      {testimonial.name}
                    </span>
                    <span className="font-['Figtree',Helvetica] font-semibold text-[#f58420] text-sm leading-normal tracking-normal">
                      {testimonial.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
