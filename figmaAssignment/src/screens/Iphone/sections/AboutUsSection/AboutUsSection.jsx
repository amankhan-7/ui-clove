import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const AboutUsSection = () => {
  const treatmentCards = [
    {
      id: 1,
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/image-453.png",
      title: "Root Canal Treatment",
      description: "Ideal for infected or damaged tooth",
      types: [
        "Root Canal Treatment",
        "Spilt RCT",
        "Split RCT with rubber dam",
        "Split RCT with laser",
      ],
      price: "₹ 19,999",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mc5ug0d6upZiHg/img/image-453-2.svg",
      title: "Re-Root Canal Treatment",
      description:
        "Ideal issues that persist or recur after an initial root canal treatment",
      types: [
        "Re-RCT with rubber dam",
        "Re-RCT laser specialist",
        "e-RCT with retrieval of old RCT filling",
      ],
      price: "₹ 19,999",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-5 w-full max-w-[358px] mx-auto">
      <header className="flex flex-col items-center justify-center gap-2 w-full">
        <h2 className="font-bold text-text-1 text-xl text-center leading-6 [font-family:'Figtree',Helvetica]">
          Types of Dental Implants
        </h2>
        <p className="font-normal text-text-2 text-base text-center leading-[20.8px] [font-family:'Figtree',Helvetica]">
          The surgeon inserts an implant into the jawbone which acts as an
          anchor for an artificial tooth, called a crown
        </p>
      </header>

      <ScrollArea className="w-full">
        <div className="flex gap-[22px] pb-4">
          {treatmentCards.map((card) => (
            <Card
              key={card.id}
              className="flex-shrink-0 w-[285px] rounded-[20px] overflow-hidden border-[#ffdfc4]"
            >
              <div className="w-full h-[285px]">
                <img
                  className="w-full h-full object-cover"
                  alt={card.title}
                  src={card.image}
                />
              </div>

              <CardContent className="flex flex-col gap-4 p-5">
                <div className="flex flex-col gap-2">
                  <h3 className="mt-[-1px] [font-family:'Raleway',Helvetica] font-bold text-black text-base leading-normal">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Figtree',Helvetica] font-normal text-[#474747] text-sm leading-[18.2px]">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="mt-[-1px] [font-family:'Figtree',Helvetica] font-bold text-black text-sm leading-normal">
                    Types of RCT
                  </h4>
                  <div className="[font-family:'Figtree',Helvetica] font-normal text-[#474747] text-sm leading-[18.2px]">
                    {card.types.map((type, index) => (
                      <React.Fragment key={index}>
                        {type}
                        {index < card.types.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col w-[147px] gap-1">
                    <span className="[font-family:'Figtree',Helvetica] font-semibold text-[#f58420] text-xs leading-[15.6px]">
                      Starting Price
                    </span>
                    <span className="[font-family:'Figtree',Helvetica] font-bold text-[#1a1a1a] text-base leading-normal">
                      {card.price}
                    </span>
                  </div>

                  <Button className="h-[38px] w-full bg-[#f58420] rounded-3xl [font-family:'Figtree',Helvetica] font-semibold text-white text-sm">
                    Get Free Consultation
                  </Button>
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
