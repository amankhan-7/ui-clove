import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const PortfolioSection = () => {
  const portfolioCards = [
    {
      id: 1,
      image: "https://c.animaapp.com/mc62a6vvA7qsij/img/image-434.png",
      imageStyle: "w-[438px] h-[250px] top-0 left-[-53px]",
      backgroundColor: "bg-[#112230]",
      title: "Uncompromised\nSafety",
      description:
        "10X Safety Protocols for a secure and worry-free dental experience",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mc62a6vvA7qsij/img/image-434-1.png",
      imageStyle: "w-[596px] h-[340px] left-0 top-0",
      backgroundColor: "bg-[#112230]",
      title: "Assuring\nCleanliness",
      description:
        "Rigid 4-Step Sterilization process, assuring a safe a spotless clinic.",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mc62a6vvA7qsij/img/image-434-2.png",
      imageStyle: "w-[380px] h-[217px] left-[-69px] object-cover top-0",
      backgroundColor: "bg-[#462512]",
      title: "Experience AIPS",
      titleStyle: "text-white text-2xl leading-[28.8px]",
      description:
        "Our AI- Powered Sterilization (AIPS) Monitoring system from DORI, USA Exclusively at Clove",
      isSpecial: true,
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-5 relative">
      <div className="flex flex-col items-center justify-center gap-2 self-stretch w-full relative">
        <h2 className="relative w-fit mt-[-1.00px] font-bold text-text-1 text-xl tracking-[0] leading-[26px] whitespace-nowrap">
          Safety, Precision, and Innovation
        </h2>
        <p className="relative self-stretch font-normal text-text-1 text-base text-center tracking-[0] leading-[20.8px]">
          Advanced care with top safety, sterilization, and technology
        </p>
      </div>

      <div className="flex items-start gap-4 relative self-stretch w-full mb-[-0.41px] overflow-x-scroll">
        {portfolioCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col w-[300px] items-start rounded-[20px] relative overflow-hidden border-none shadow-none"
          >
            <div className="relative self-stretch w-full h-[200px] overflow-hidden border border-solid border-[#d0d0d0]">
              <img
                className={`absolute ${card.imageStyle}`}
                alt="Card Visual"
                src={card.image}
              />
            </div>

            <CardContent
              className={`flex flex-col items-start justify-center gap-2 p-4 relative self-stretch w-full ${card.backgroundColor}`}
            >
              <div className="flex flex-col items-start gap-2 self-stretch w-full relative">
                <div className="flex items-center gap-[23px] relative self-stretch w-full">
                  {card.isSpecial ? (
                    <div className="relative w-fit mt-[-1.00px] font-bold text-transparent text-lg tracking-[0] leading-[21.6px]">
                      <span className="text-white">Experience</span>
                      <span className="text-white text-2xl leading-[28.8px]">
                        {" "}
                        AIPS
                      </span>
                    </div>
                  ) : (
                    <div className="relative w-fit mt-[-1.00px] font-bold text-white text-lg tracking-[0] leading-[21.6px] whitespace-pre-line">
                      {card.title}
                    </div>
                  )}

                  <img
                    className="relative flex-1 grow h-px"
                    alt="Divider"
                    src="https://c.animaapp.com/mc62a6vvA7qsij/img/vector-72.svg"
                  />
                </div>

                <div className="relative self-stretch font-normal text-white text-sm tracking-[0] leading-[18.2px]">
                  {card.description}
                </div>
              </div>

              <CardFooter className="inline-flex items-center gap-4 relative p-0 mt-2">
                <div className="relative w-fit font-semibold text-[#f58420] text-sm tracking-[0] leading-[18.2px] whitespace-nowrap">
                  Learn More
                </div>
                <img
                  className="relative w-[27px] h-[25.41px]"
                  alt="Arrow Icon"
                  src="https://c.animaapp.com/mc62a6vvA7qsij/img/frame-2609486.svg"
                />
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};