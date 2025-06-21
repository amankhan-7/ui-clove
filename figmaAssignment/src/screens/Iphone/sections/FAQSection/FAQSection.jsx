import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

export const FAQSection = () => {
  return (
    <Card className="w-full max-w-[358px] bg-[#fff9f4] rounded-[20px] overflow-hidden">
      <CardContent className="flex flex-col items-start gap-6 p-4">
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <h2 className="self-stretch mt-[-1.00px] font-['Figtree',Helvetica] font-bold text-text-1 text-xl text-center tracking-[0] leading-[26px]">
            Expert Guidance for <br />
            Healthy Smiles
          </h2>

          <p className="self-stretch font-['Figtree',Helvetica] font-normal text-text-2 text-base text-center tracking-[0] leading-[20.8px]">
            Book your free consultation today and take the first step towards
            healthy, <br />
            beautiful teeth.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <div className="flex flex-col items-start gap-4 self-stretch w-full">
              <Input
                className="h-[38px] px-4 py-[17px] bg-white rounded-3xl border border-solid border-[#ffdfc4]"
                placeholder="Name"
              />

              <Input
                className="h-[38px] px-4 py-[17px] bg-white rounded-3xl border border-solid border-[#ffdfc4]"
                placeholder="Mobile Number"
              />

              <div className="flex h-11 items-center self-stretch w-full">
                <Input
                  className="w-[223px] h-[38px] px-4 py-[17px] bg-white rounded-[24px_0px_0px_24px] border border-solid border-[#ffdfc4]"
                  placeholder="Captcha"
                />
                <div className="flex h-[38px] items-center justify-center gap-2.5 px-4 py-[17px] flex-1 bg-[#462512] rounded-[0px_24px_24px_0px]">
                  <span className="font-['Figtree',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    1514
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 self-stretch w-full">
              <Checkbox
                id="terms"
                className="w-[19px] h-[19px] bg-white rounded border border-solid border-[#ffdfc4]"
              />
              <label
                htmlFor="terms"
                className="flex-1 mt-[-1.00px] font-['Figtree',Helvetica] font-normal text-text-1 text-xs tracking-[0] leading-[15.6px]"
              >
                <span className="font-['Figtree',Helvetica] font-normal text-[#303030] text-xs tracking-[0] leading-[15.6px]">
                  I agree to CLOVE Dental&apos;s{" "}
                </span>
                <span className="underline">Terms</span>
                <span className="font-['Figtree',Helvetica] font-normal text-[#303030] text-xs tracking-[0] leading-[15.6px]">
                  {" "}
                  and{" "}
                </span>
                <span className="underline">Privacy Policy</span>
                <span className="font-['Figtree',Helvetica] font-normal text-[#303030] text-xs tracking-[0] leading-[15.6px]">
                  {" "}
                  and consent to contact via phone, email, or SMS.
                </span>
              </label>
            </div>

            <Button className="h-[38px] w-full bg-[#f58420] rounded-3xl hover:bg-[#e07615] transition-colors">
              <span className="font-['Figtree',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                Book a Free Consultation
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};