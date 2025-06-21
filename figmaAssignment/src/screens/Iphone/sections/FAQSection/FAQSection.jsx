import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

export const FAQSection = () => {
  return (
    <Card className="w-full bg-[#fff9f4] rounded-[20px] overflow-hidden">
      <CardContent className="flex flex-col gap-6 p-4 w-full">
        <h2 className="text-center text-xl font-bold text-text-1">
          Book an Appointment with Cloves Dentist in Delhi
        </h2>

        {/* Input Fields */}
        <div className="flex flex-wrap gap-4 w-full">
          <Input
            className="h-[38px] px-4 py-[17px] bg-white rounded-3xl border border-[#ffdfc4] flex-1 min-w-[200px]"
            placeholder="Name"
          />
          <Input
            className="h-[38px] px-4 py-[17px] bg-white rounded-3xl border border-[#ffdfc4] flex-1 min-w-[200px]"
            placeholder="Phone"
          />
          <div className="flex w-full sm:w-auto gap-2">
            <Input
              className="h-[38px] px-4 py-[17px] bg-white rounded-l-3xl border border-[#ffdfc4] flex-1 min-w-[200px]"
              placeholder="Captcha"
            />
            <div className="h-[38px] px-4 py-[17px] bg-[#462512] text-white text-sm rounded-r-3xl flex items-center justify-center min-w-[80px]">
              1514
            </div>
          </div>
        </div>

        {/* Checkbox + Button side by side */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mx-auto">
          <div className="flex items-start gap-2 max-w-[400px]">
            <Checkbox
              id="terms"
              className="w-[19px] h-[19px] bg-white rounded border border-[#ffdfc4] mt-1"
            />
            <label
              htmlFor="terms"
              className="text-xs text-[#303030] leading-[15.6px]"
            >
              I agree to CLOVE Dental&apos;s{" "}
              <span className="underline">Terms</span> and{" "}
              <span className="underline">Privacy Policy</span> and consent to
              contact via phone, email, or SMS.
            </label>
          </div>

          <Button className="h-[38px] bg-[#f58420] rounded-3xl hover:bg-[#e07615] transition-colors px-6">
            <span className="font-semibold text-white text-sm whitespace-nowrap">
              Book a Free Consultation
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
