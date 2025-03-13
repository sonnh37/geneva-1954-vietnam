import FloatingOrbsFeatures from "@/components/floating-orbs-features";
import StorySection from "@/components/story-section";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Share2, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionThree = () => {
  const router = useRouter();
  // useScrollOnHashChange();
  const section3 = "/thumbnail.jpg";
  return (
    <StorySection
      id="section3"
      bgImage={section3}
      title="III. Sứ mệnh lịch sử của giai cấp công nhân"
    >
      <FloatingOrbsFeatures
        features={[
          {
            icon: Briefcase,
            title: "Vai trò của GCCN Việt Nam",
            description:
              "Là lực lượng tiên phong trong cuộc đấu tranh giải phóng dân tộc, lật đổ chế độ thực dân phong kiến, giành độc lập và xây dựng chủ nghĩa xã hội.",
          },
          {
            icon: Share2,
            title: "Sứ mệnh lịch sử",
            description:
              "Giai cấp công nhân Việt Nam đang đứng trước những cơ hội và thách thức trong bối cảnh hội nhập kinh tế quốc tế và cách mạng công nghiệp lần thứ tư.",
          },
          {
            icon: TrendingUp,
            title: "Giải pháp phát huy vai trò",
            description:
              "Nâng cao chất lượng đào tạo và giáo dục chính trị tư tưởng cho công nhân. Cải thiện điều kiện lao động và đời sống, đảm bảo quyền lợi của giai cấp công nhân.",
          },
        ]}
      />
    </StorySection>
  );
};

export default SectionThree;
