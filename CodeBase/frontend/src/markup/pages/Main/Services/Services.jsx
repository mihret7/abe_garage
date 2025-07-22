import React from "react";
import BottomBanner from "../../../components/Banner/BottomBanner";
import TopBannerService from "../../../components/Banner/TopBannerService";
import CtaSec from "../../../components/CtaSec/CtaSec";
import ServicesSec from "../../../components/ServiceSec/ServicesSec";
import WhyChooseUs from "../../../components/WhyChoosUS/WhyChooseUs";

function Services() {
  return (
    <div>
      <TopBannerService />
      <ServicesSec />
      <WhyChooseUs />
      <BottomBanner />
      <CtaSec />
    </div>
  );
}

export default Services;
