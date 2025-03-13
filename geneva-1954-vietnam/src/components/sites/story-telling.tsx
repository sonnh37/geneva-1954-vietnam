"use client";
import TableOfContents from "../table-content";
import TimelineNav from "../time-line-nav";
import SectionZero from "./sections/section-0";
import SectionOne from "./sections/section-1";
import SectionTwo from "./sections/section-2";
import SectionThree from "./sections/section-3";
import SectionFour from "./sections/section-4";
import SectionFive from "./sections/section-5";
import SectionSix from "./sections/section-6";
import SectionSeven from "./sections/section-7";
import SectionEight from "./sections/section-8";
import SectionHero from "./sections/section-hero";
const section3 = "/thumbnail.jpg";

const StorytellingPage = () => {
  return (
    <div className="bg-black h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Outline */}
      <TimelineNav />
      <TableOfContents />
      {/* Hero Section */}
      <SectionHero />
      <SectionZero />

      {/* Section 1: Quan điểm cơ bản */}
      <SectionOne />

      {/* Section 2: Giai cấp công nhân hiện nay */}
      <SectionTwo />

      {/* Section 3: Sứ mệnh lịch sử của GCCN Việt Nam */}
      <SectionThree />

      {/* Section 4: Thảo luận */}
      <SectionFour />

      {/* Section 5: Lời cảm ơn */}
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </div>
  );
};

export default StorytellingPage;
