import { scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TimelineNavProps {
  currentSection: string;
}

const TimelineNav = () => {
  const sections = [
    { id: "hero", label: "Giới thiệu" },
    { id: "section0", label: "I. Lãnh đạo cách mạng cả nước (1965 - 1975)" },
    { id: "section1", label: "Bối cảnh lịch sử" },
    { id: "section2", label: "Lãnh đạo cuộc kháng chiến chống Mỹ cứu nước - Miền Bắc" },
    { id: "section2-1", label: "Lãnh đạo cuộc kháng chiến chống Mỹ cứu nước - Miền Nam" },
    { id: "section3", label: "II. Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng thời kỳ 1954 - 1975" },
    { id: "section4", label: "Ý nghĩa lịch sử" },
    { id: "section5", label: "Kinh nghiệm lãnh đạo của Đảng" },
    { id: "section6", label: "Thảo luận" },
    { id: "section7", label: "Tổng kết" },
    { id: "thanks", label: "Kết thúc" },
  ];

  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "section0",
      "section1",
      "section2",
      "section2-1",
      "section3",
      "section4",
      "section5",
      "section6",
      "section7",
      "section8",
      "thanks",
    ];

    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setCurrentSection(section);
              }
            });
          },
          {
            threshold: 0.5,
          }
        );
        observer.observe(element);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center gap-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="group relative flex items-center"
            onClick={() => scrollToSection(section.id)}
          >
            <div
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentSection === section.id
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
            <div className="hidden group-hover:block absolute right-full mr-2">
              <span className="whitespace-nowrap bg-white/10 backdrop-blur-md text-white text-sm py-1 px-2 rounded">
                {section.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineNav;
