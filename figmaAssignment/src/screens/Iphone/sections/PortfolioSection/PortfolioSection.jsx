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
    <div className="flex flex-col w-full items-center gap-5 px-4 max-w-[358px] md:max-w-6xl mx-auto md:pl-30">
      {/* ─────── Header ─────── */}
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="font-bold text-text-1 text-xl md:text-2xl leading-[26px] text-center">
          Safety, Precision, and Innovation
        </h2>
        <p className="font-normal text-text-1 text-base md:text-lg text-center leading-[20.8px] md:leading-7">
          Advanced care with top safety, sterilization, and technology
        </p>
      </div>

      {/* ─────── Horizontal Scrollable Cards ─────── */}
      <div className="w-full overflow-x-auto">
        <div className="flex flex-nowrap gap-4 w-fit">
          {portfolioCards.map((card) => (
            <Card
              key={card.id}
              className="flex-shrink-0 w-[300px] rounded-[20px] overflow-hidden border-none shadow-none"
            >
              {/* Image Section */}
              <div className="relative w-full h-[200px] overflow-hidden border border-solid border-[#d0d0d0]">
                <img
                  className={`absolute ${card.imageStyle}`}
                  alt="Card Visual"
                  src={card.image}
                />
              </div>

              {/* Content Section */}
              <CardContent
                className={`flex flex-col items-start justify-center gap-2 p-4 w-full ${card.backgroundColor}`}
              >
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-center gap-[23px] w-full">
                    {card.isSpecial ? (
                      <div className="font-bold text-transparent text-lg">
                        <span className="text-white">Experience</span>
                        <span className="text-white text-2xl leading-[28.8px]">
                          {" "}
                          AIPS
                        </span>
                      </div>
                    ) : (
                      <div className="font-bold text-white text-lg whitespace-pre-line">
                        {card.title}
                      </div>
                    )}

                    <img
                      className="flex-1 grow h-px"
                      alt="Divider"
                      src="https://c.animaapp.com/mc62a6vvA7qsij/img/vector-72.svg"
                    />
                  </div>

                  <div className="font-normal text-white text-sm leading-[18.2px]">
                    {card.description}
                  </div>
                </div>

                {/* Footer CTA */}
                <CardFooter className="inline-flex items-center gap-4 mt-2 p-0">
                  <div className="font-semibold text-[#f58420] text-sm whitespace-nowrap">
                    Learn More
                  </div>
                  <img
                    className="w-[27px] h-[25.41px]"
                    alt="Arrow Icon"
                    src="https://c.animaapp.com/mc62a6vvA7qsij/img/frame-2609486.svg"
                  />
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
