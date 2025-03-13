import StorySection from "@/components/story-section";
import TimelineItem from "@/components/time-line-item";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionTwo = () => {
  const router = useRouter();
  // useScrollOnHashChange();
  return (
    <StorySection
      id="section2"
      bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
      title="II. Giai cấp công nhân và việc thực hiện sứ mệnh lịch sử hiện nay"
    >
      <div className="max-w-6xl mx-auto px-4">
        <TimelineItem
          year="1. Bối cảnh hiện nay"
          title="Toàn cầu hóa và CMCN 4.0"
          description="Quá trình toàn cầu hóa và cách mạng công nghiệp 4.0 đang tạo ra những biến đổi to lớn trong cơ cấu kinh tế - xã hội, ảnh hưởng đến giai cấp công nhân.
Lực lượng công nhân không chỉ tập trung trong các ngành công nghiệp truyền thống mà còn mở rộng sang các ngành công nghiệp công nghệ cao, dịch vụ, và tri thức.
"
          isRight={false}
          image="https://bcp.cdnchinhphu.vn/Uploaded/nguyenhuythang/2021_12_08/digitaleconomy-818x460-15613879121091909436853-crop-15613879165961941291784.jpg"
        />
        <TimelineItem
          year="2. Thách thức"
          title="Thách thức đối với giai cấp công nhân"
          description="Sự phân hóa giàu nghèo ngày càng sâu sắc trong xã hội tư bản.
Lao động trong các ngành công nghệ và tri thức cao không hoàn toàn đồng nhất với lao động công nghiệp truyền thống, dẫn đến sự phân tầng trong chính nội bộ giai cấp công nhân.
Sự xâm nhập của tư tưởng tư sản, ảnh hưởng đến ý thức tổ chức và tính cách mạng của giai cấp công nhân.
"
          isRight={true}
          image="https://static.tapchimattran.vn/zoom/1300/uploaded/dodong/2022_02_16/nghien%20cuu/11_demd.jpg"
        />
        <TimelineItem
          year="3. Vai trò"
          title="Vai trò của giai cấp công nhân"
          description="Tiếp tục giữ vai trò nòng cốt trong cuộc đấu tranh xóa bỏ chế độ tư bản và xây dựng xã hội xã hội chủ nghĩa.
Tham gia tích cực vào quá trình đổi mới, sáng tạo, làm chủ khoa học công nghệ, nâng cao năng lực sản xuất và sức mạnh kinh tế.
Duy trì tính tổ chức, đoàn kết, và ý thức cách mạng trong đấu tranh chính trị và kinh tế.
"
          isRight={false}
          image="https://www.quanlynhanuoc.vn/wp-content/uploads/2019/08/cong-nhan.jpg"
        />
      </div>
    </StorySection>
  );
};

export default SectionTwo;
