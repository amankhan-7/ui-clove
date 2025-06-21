import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-60.png",
      name: "Shubham",
      location: "Indore",
      treatment: "Aligners",
    },
    {
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-60-1.png",
      name: "Shubpreet",
      location: "Indore",
      treatment: "RCT",
    },
    {
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-60-2.png",
      name: "Anita",
      location: "Banglore",
      treatment: "Laser Treatment",
    },
    {
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-60-3.png",
      name: "Aarti Singh",
      location: "Indore",
      treatment: "Dentures",
    },
    {
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-60-4.png",
      name: "Aditya",
      location: "Indore",
      treatment: "Implant",
    },
    {
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/rectangle-60-5.png",
      name: "Nikita",
      location: "Indore",
      treatment: "Aligners",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[358px] mx-auto">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <h2 className="[font-family:'Figtree',Helvetica] font-bold text-text-1 text-xl leading-[26px]">
          What Our Patients Say
        </h2>
        <p className="text-center [font-family:'Figtree',Helvetica] font-normal text-text-2 text-base leading-[20.8px]">
          Real smiles, real stories. Here's what our patients love about
          their CLOVE Dental experience!
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
              <Card className="border-none shadow-none">
                <CardContent className="p-0 flex flex-col items-start gap-2">
                  <img
                    className="w-[200px] h-[360px] object-cover"
                    alt={`${testimonial.name}'s testimonial`}
                    src={testimonial.image}
                  />
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col items-start gap-1">
                      <div className="[font-family:'Figtree',Helvetica] font-semibold text-[#1a1a1a] text-sm leading-normal">
                        {testimonial.name}
                      </div>
                      <div className="[font-family:'Figtree',Helvetica] font-semibold text-[#777777] text-xs leading-normal">
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="[font-family:'Figtree',Helvetica] font-semibold text-[#f58420] text-sm leading-normal">
                      {testimonial.treatment}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
