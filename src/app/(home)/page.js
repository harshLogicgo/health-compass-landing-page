import Banner from "@/components/common/Banner";
import Image from "next/image";
import InfoSection from "./infoSections";
import NewsSection from "./NewsSection";
import TestimonialsSection from "./TestimonialSection";
import CTABanner from "./CTABanner";
import SimpleToolsSection from "./SimpleToolsSection";
import DiscoverSection from "./DiscoverSection";

export default function Home() {
  return (
    <div>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <main>
        <Banner />
        <InfoSection />
        <NewsSection />
        <SimpleToolsSection />
        <DiscoverSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
    </div>
  );
}
