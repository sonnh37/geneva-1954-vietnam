import FloatingOrbsFeatures from "@/components/floating-orbs-features";
import StorySection from "@/components/story-section";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Share2, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionSeven = () => {
  return (
    <StorySection
      id="section7"
      bgImage="end.jpg"
      title="Tổng kết"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
        >
          <h1 className="scroll-m-20 text-white text-2xl font-extrabold tracking-tight lg:text-5xl">
            Giai đoạn 1954 - 1975 là thời kỳ Đảng ta lãnh đạo nhân dân Việt Nam
            thực hiện thành công sự nghiệp giải phóng dân tộc, thống nhất đất
            nước. Đây là một thắng lợi vĩ đại, để lại nhiều bài học kinh nghiệm
            quý báu cho sự nghiệp xây dựng và bảo vệ Tổ quốc sau này.
          </h1>
        </motion.div>
      </div>
    </StorySection>
  );
};

export default SectionSeven;
