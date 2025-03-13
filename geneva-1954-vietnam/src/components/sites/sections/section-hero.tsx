import StorySection from "@/components/story-section";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionHero = () => {
  const router = useRouter();
  // useScrollOnHashChange();
  return (
    <StorySection
      id="hero"
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
      title="Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân"
      subtitle="Chương 2 - Nhóm 2 - Môn MLN131"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <button
          onClick={() => scrollToSection("section1")}
          className="inline-flex items-center gap-2 text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
        >
          Khám phá <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </StorySection>
  );
};

export default SectionHero; 
