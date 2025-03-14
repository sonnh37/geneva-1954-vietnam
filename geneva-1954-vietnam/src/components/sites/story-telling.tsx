"use client";
import TableOfContents from "../table-content";
import TimelineNav from "../time-line-nav";
import SectionZero from "./sections/section-0";
import SectionOne from "./sections/section-1";
import SectionTwo from "./sections/section-2";
import SectionTwoOne from "./sections/section-2-1";
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
      <SectionHero />
      <SectionZero />
      <SectionOne />
      <SectionTwo />
      <SectionTwoOne />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </div>
  );
};

export default StorytellingPage;
