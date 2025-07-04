import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
//import { CallToActionSection } from "./sections/CallToActionSection"; // optional: remove if not available
import { ContactSection } from "./sections/ContactSection";
import { FAQSection } from "./sections/FAQSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Iphone = () => {
  const statsData = [
    {
      icon: "https://c.animaapp.com/mc62a6vvA7qsij/img/clinics.png",
      count: "550+",
      label: "Clinics",
    },
    {
      icon: "https://c.animaapp.com/mc62a6vvA7qsij/img/smile-makeover.png",
      iconSecondary: "https://c.animaapp.com/mc62a6vvA7qsij/img/doctors.png",
      count: "1200+",
      label: "Dentists",
      isDoubleIcon: true,
    },
    {
      icon: "https://c.animaapp.com/mc62a6vvA7qsij/img/happy-patients.png",
      count: "20 L+",
      label: "Happy Patients",
    },
    {
      vectorIcons: [
        "https://c.animaapp.com/mc62a6vvA7qsij/img/vector-7.svg",
        "https://c.animaapp.com/mc62a6vvA7qsij/img/vector-5.svg",
        "https://c.animaapp.com/mc62a6vvA7qsij/img/vector-3.svg",
        "https://c.animaapp.com/mc62a6vvA7qsij/img/frame-260934759.svg",
      ],
      count: "35K+",
      label: "Ortho Cases",
      isVectorGroup: true,
    },
    {
      icon: "https://c.animaapp.com/mc62a6vvA7qsij/img/implant.svg",
      count: "55K+",
      label: "Implants Placed",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden min-h-screen">
      {/* App Header - responsive sizing and layout */}
      <div className="w-full h-14 sm:h-20 lg:h-24 bg-[#fffaf5] flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 ">
        <img
          className="w-20 sm:w-[101px] h-8 sm:h-[41px] md:h-12"
          alt="Clove logo"
          src="https://c.animaapp.com/mc62a6vvA7qsij/img/clove-logo.svg"
        />
        <Card className="h-8 sm:h-[38px] md:h-10 bg-white rounded-[70px] border border-solid border-[#462512] p-0">
          <CardContent className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1 sm:py-2 h-full">
            <img
              className="w-2 sm:w-[12.47px] h-4 sm:h-[21.47px]"
              alt="Get a call back"
              src="https://c.animaapp.com/mc62a6vvA7qsij/img/get-a-call-back.png"
            />
            <span className="font-['Figtree',Helvetica] font-semibold text-[#1a1a1a] text-xs sm:text-base md:text-lg">
              985-6589-510
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Stats Scrolling Section - responsive height and spacing */}
      <ScrollArea className="w-full h-12 sm:h-[60px] md:h-15 lg:h-20 bg-[#fff9f4] ">
        <div className="flex items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 p-2 sm:p-[11px] md:p-4 lg:px-6 lg:py-5">
          {statsData.map((stat, index) => (
            <div
              key={`stat-${index}`}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-shrink-0 md:pl-20"
            >
              {stat.isDoubleIcon ? (
                <div className="relative w-6 sm:w-[33.3px] md:w-10 lg:w-12 h-7 sm:h-[38.28px] md:h-12 lg:h-14">
                  <img
                    className="absolute w-4 sm:w-[23px] md:w-7 lg:w-8 h-4 sm:h-[23px] md:h-7 lg:h-8 top-0 left-1 sm:left-1.5 md:left-2"
                    alt={stat.label}
                    src={stat.icon}
                  />
                  <img
                    className="absolute w-6 sm:w-[34px] md:w-8 lg:w-9 h-3 sm:h-[17px] md:h-5 lg:h-6 top-4 sm:top-[22px] md:top-7 lg:top-8 left-0"
                    alt={`${stat.label} secondary`}
                    src={stat.iconSecondary}
                  />
                </div>
              ) : stat.isVectorGroup ? (
                <div className="relative w-7 sm:w-[36.68px] md:w-10 lg:w-12 h-7 sm:h-[38px] md:h-12 lg:h-14">
                  <div className="relative w-6 sm:w-[31px] md:w-8 lg:w-10 h-6 sm:h-[33px] md:h-10 lg:h-12">
                    {stat.vectorIcons?.map((icon, vIndex) => (
                      <img
                        key={`vector-${vIndex}`}
                        className="absolute w-6 sm:w-[31px] md:w-8 lg:w-10 h-6 sm:h-[31px] md:h-8 lg:h-10 top-0 left-0"
                        alt={`Vector ${vIndex}`}
                        src={icon}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <img
                  className="w-6 sm:w-[35px] md:w-10 lg:w-12 h-7 sm:h-[38px] md:h-12 lg:h-14"
                  alt={stat.label}
                  src={stat.icon}
                />
              )}
              <div className="font-['Figtree',Helvetica] text-xs sm:text-sm md:text-base lg:text-lg">
                <span className="font-bold text-[#f58420]">{stat.count}</span>
                <span className="font-bold text-black"> {stat.label}</span>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Sections Container - responsive spacing and padding */}
      <div className="flex flex-col w-full items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="w-full max-w-7xl">
          <ContactSection />
        </div>
        <div className="w-full max-w-7xl">
          <AboutUsSection />
        </div>
        <div className="w-full max-w-7xl">
          <HeroSection />
        </div>
        <div className="w-full max-w-7xl">
          <TestimonialsSection />
        </div>
        <div className="w-full max-w-7xl">
          <PortfolioSection />
        </div>
        <div className="w-full max-w-7xl">
          <BlogSection />
        </div>

        <div className="w-full max-w-7xl">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};
