import FloatingOrbsFeatures from "@/components/floating-orbs-features";
import StorySection from "@/components/story-section";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Share2, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionEight = () => {
  return (
    <StorySection
      id="thanks"
      bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      title="Lời cảm ơn"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Cảm ơn quý thầy cô và các bạn đã theo dõi
          </h3>
          <div className="text-white/80 space-y-4">
            <p className="text-xl">
              Chúc quý thầy cô và các bạn nhiều sức khỏe và thành công!
            </p>
            <p className="italic">"Học, học nữa, học mãi" - V.I.Lenin</p>
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
};

export default SectionEight;
