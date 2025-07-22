import React from "react";
import About24 from "../../components/About24/About24";
import ServicesSec from "../../components/ServiceSec/ServicesSec";
import FeaturesSec from "../../components/FuaturesSec/FeaturesSec";
import WhyChooseUs from "../../components/WhyChoosUS/WhyChooseUs";
import CtaSec from "../../components/CtaSec/CtaSec";
import BottomBanner from "../../components/Banner/BottomBanner";
import TopBannerHome from "../../components/Banner/TopBannerHome";

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Video Section */}
      <TopBannerHome />
      {/* About Us Section */}
      <About24 />
      {/* Services Section */}
      <ServicesSec />
      {/* Services Section */}
      <FeaturesSec />
      {/* Why Choose US Section */}
      <WhyChooseUs />
      {/* Video Section */}
      <BottomBanner />
      {/* CTA Section */}
      <CtaSec />
    </div>
  );
};

export default Home;
