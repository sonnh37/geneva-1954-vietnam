import StorySection from "@/components/story-section";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Computer, GraduationCap, Stethoscope } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionFour = () => {
  const router = useRouter();
  // useScrollOnHashChange();
  return (
    <StorySection
      id="section4"
      bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      title="IV. Câu hỏi thảo luận"
      subtitle="Bác sĩ, giảng viên, IT hiện nay có phải là giai cấp công nhân không?"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* 1. Góc nhìn Mác-Lênin */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              1. Dưới góc nhìn Mác – Lênin, giai cấp công nhân là ai?
            </h3>
            <div className="text-white/80">
              <p className="mb-4">Giai cấp công nhân được xác định qua:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Vị trí trong hệ thống sản xuất:
                  <ul className="list-none pl-6 mt-2">
                    <li>- Không sở hữu tư liệu sản xuất</li>
                    <li>- Bán sức lao động để sống</li>
                  </ul>
                </li>
                <li>
                  Tính chất lao động:
                  <ul className="list-none pl-6 mt-2">
                    <li>- Trực tiếp sản xuất</li>
                    <li>
                      - Gián tiếp tham gia sản xuất trong nền kinh tế công
                      nghiệp
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Phân tích từng nghề */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              2. Phân tích từng nghề
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-8 h-8 text-blue-400" />
                  <h4 className="text-xl font-semibold text-white">Bác sĩ</h4>
                </div>
                <div className="text-white/80 space-y-2">
                  <p>• Hoạt động trong lĩnh vực dịch vụ</p>
                  <p>• Không trực tiếp sản xuất của cải vật chất</p>
                  <p>• Làm việc trong tổ chức công lập hoặc tư nhân</p>
                  <p>• Bản chất công việc là chăm sóc sức khỏe</p>
                  <p className="font-semibold mt-4">
                    → Không thuộc giai cấp công nhân
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-green-400" />
                  <h4 className="text-xl font-semibold text-white">
                    Giảng viên
                  </h4>
                </div>
                <div className="text-white/80 space-y-2">
                  <p>• Làm việc trong lĩnh vực giáo dục</p>
                  <p>• Không tham gia trực tiếp sản xuất</p>
                  <p>• Gián tiếp đào tạo nguồn nhân lực</p>
                  <p>• Thuộc lĩnh vực phi sản xuất</p>
                  <p className="font-semibold mt-4">
                    → Không hoàn toàn đồng nhất với giai cấp công nhân
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Computer className="w-8 h-8 text-purple-400" />
                  <h4 className="text-xl font-semibold text-white">
                    Nhân viên IT
                  </h4>
                </div>
                <div className="text-white/80 space-y-2">
                  <p>• Thuộc lĩnh vực sản xuất tri thức và công nghệ cao</p>
                  <p>• Không sở hữu tư liệu sản xuất khi làm thuê</p>
                  <p>• Công việc mang tính sáng tạo và tri thức cao</p>
                  <p>• Không thuần túy là lao động công nghiệp truyền thống</p>
                  <p className="font-semibold mt-4">
                    → Có đặc điểm của giai cấp công nhân hiện đại
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3. Kết luận */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">3. Kết luận</h3>
            <div className="text-white/80 space-y-4">
              <p>
                Bác sĩ, giảng viên, và IT không hoàn toàn thuộc giai cấp công
                nhân theo định nghĩa truyền thống của chủ nghĩa Mác – Lênin.
              </p>
              <p>
                Tuy nhiên, trong bối cảnh kinh tế tri thức, họ là bộ phận lao
                động trí thức gắn bó mật thiết với giai cấp công nhân, góp phần
                thúc đẩy sự phát triển xã hội và nền kinh tế.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
};

export default SectionFour;
