import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const BlogSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Neha Singh",
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/ellipse-1-3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Neha Singh",
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/ellipse-1-3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Neha Singh",
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/ellipse-1-3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Neha Singh",
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/ellipse-1-3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-5 py-10 w-full bg-[#fff9f5] rounded-lg">
      {/* ─── Left Branding Section ─── */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-8 lg:gap-12 px-4 md:pl-20 lg:pl-25">
  <img
    className="w-[88px] h-[88px]"
    alt="Frame"
    src="https://c.animaapp.com/mc5ug0d6upZiHg/img/frame-51888.svg"
  />

  <div className="flex flex-col items-center md:items-start justify-center gap-2 md:gap-3">
    <div className="flex items-center gap-2">
      <img
        className="w-[24.7px] h-[23.57px]"
        alt="Star"
        src="https://c.animaapp.com/mc5ug0d6upZiHg/img/star-10.svg"
      />
      <img
        className="w-[1.5px] h-[26.25px]"
        alt="Line"
        src="https://c.animaapp.com/mc5ug0d6upZiHg/img/line-40.svg"
      />
      <Badge
        variant="outline"
        className="[font-family:'Open_Sans',Helvetica] font-bold text-text-1 text-2xl border-0"
      >
        4.9
      </Badge>
    </div>

    <div className="[font-family:'Raleway',Helvetica] font-normal text-2xl text-center md:text-left">
      <span className="[font-family:'Open_Sans',Helvetica] text-[20px] font-bold text-[#ea7d28]">
        (1.6 Lakh + )
      </span>
    </div>

    <div className="[font-family:'Figtree',Helvetica] font-semibold text-text-2 text-base text-center md:text-left md:text-sm lg:text-base">
      Verified Google Ratings
    </div>
  </div>
</div>

      {/* ─── Scrollable Testimonials Section ─── */}
      <ScrollArea className="w-full">
        <div className="flex gap-5 pb-4 w-fit">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex-none bg-white rounded-[20px] p-5 w-[252px] relative"
            >
              <div className="absolute w-[65px] h-[65px] top-0 right-0 bg-[#ffebc4] rounded-[0px_11.5px_0px_92px]" />
              <img
                className="absolute w-[30px] h-[30px] top-2.5 right-[11px] object-cover"
                alt="Google logo"
                src="https://c.animaapp.com/mc5ug0d6upZiHg/img/google-logo-9808-1-3.png"
              />

              <CardContent className="flex flex-col items-center gap-6 p-0">
                <Avatar className="w-[68px] h-[68px] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    alt={`${testimonial.name} profile`}
                    src={testimonial.image}
                  />
                </Avatar>

                <div className="flex flex-col items-center gap-[9px] w-full">
                  <h3 className="font-bold text-[#303030] text-lg [font-family:'Figtree',Helvetica]">
                    {testimonial.name}
                  </h3>

                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <img
                        key={i}
                        className="w-6 h-6"
                        alt="Star"
                        src="https://c.animaapp.com/mc5ug0d6upZiHg/img/star-1.svg"
                      />
                    ))}
                  </div>
                </div>

                <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#464646] text-base leading-6">
                  {testimonial.text}
                </p>

                <div className="flex items-center justify-end gap-2 w-full">
                  <span className="[font-family:'Figtree',Helvetica] font-semibold text-[#e9811f] text-base leading-[20.8px]">
                    Read more
                  </span>
                  <img
                    className="w-2 h-3.5"
                    alt="Arrow"
                    src="https://c.animaapp.com/mc5ug0d6upZiHg/img/frame.svg"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
