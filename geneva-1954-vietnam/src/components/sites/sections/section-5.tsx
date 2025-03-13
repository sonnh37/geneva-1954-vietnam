import FeatureCard from "@/components/feature-card";
import FloatingOrbsFeatures from "@/components/floating-orbs-features";
import StorySection from "@/components/story-section";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Share2, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionFive = () => {
  const router = useRouter();
  // useScrollOnHashChange();
  const section3 = "/thumbnail.jpg";
  
  return (
    <StorySection
      id="section5"
      bgImage="https://tapchicongsan.org.vn/image/journal/article?img_id=183555343&t=1652448799191"
      title="Kinh nghiệm lãnh đạo của Đảng"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <FeatureCard
          icon={ArrowRight}
          title="Giữ vững và phát huy vai trò lãnh đạo của Đảng"
          description="Đảng đề ra đường lối đúng đắn, phù hợp với thực tiễn cách mạng Việt Nam.
Đặt lợi ích dân tộc lên hàng đầu, kiên định mục tiêu giải phóng và thống nhất đất nước.
"
        />
        <FeatureCard
          icon={ArrowRight}
          title="Phát huy sức mạnh đoàn kết toàn dân tộc
"
          description={`Huy động toàn dân tham gia kháng chiến với tinh thần "Toàn dân, toàn diện".
Kết hợp đấu tranh chính trị, ngoại giao và quân sự để giành thắng lợi.

`}
        />
        <FeatureCard
          icon={ArrowRight}
          title="Kết hợp sức mạnh dân tộc và sức mạnh thời đại
"
          description="Tận dụng sự giúp đỡ từ các nước xã hội chủ nghĩa, nhất là Liên Xô và Trung Quốc.
Tranh thủ sự ủng hộ của nhân dân yêu chuộng hòa bình trên thế giới.

"
        />
        <FeatureCard
          icon={ArrowRight}
          title="Sáng tạo trong chiến lược và chiến thuật quân sự
"
          description={`Đề ra chiến lược đấu tranh linh hoạt: "Tiến công - Nổi dậy", kết hợp đấu tranh quân sự và chính trị.
Áp dụng nghệ thuật quân sự đặc sắc: đánh du kích, đánh chính quy, phối hợp nhịp nhàng giữa các mặt trận.


`}
        />
        <FeatureCard
          icon={ArrowRight}
          title="Xây dựng hậu phương vững mạnh

"
          description="Miền Bắc trở thành hậu phương lớn, đáp ứng nhu cầu vật chất và nhân lực cho kháng chiến.
Tổ chức tốt công tác hậu cần, bảo đảm sức chiến đấu lâu dài.


"
        />
      </div>
    </StorySection>
  );
};

export default SectionFive;
