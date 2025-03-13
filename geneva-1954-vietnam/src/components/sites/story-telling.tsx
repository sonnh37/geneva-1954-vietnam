"use client";
import TableOfContents from "../table-content";
import TimelineNav from "../time-line-nav";
import SectionOne from "./sections/section-1";
import SectionTwo from "./sections/section-2";
import SectionThree from "./sections/section-3";
import SectionFour from "./sections/section-4";
import SectionFive from "./sections/section-5";
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
    </div>
  );
};

export default StorytellingPage;
