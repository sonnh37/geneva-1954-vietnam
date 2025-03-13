import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import TimelineItem from "@/components/time-line-item";
import FeatureCard from "@/components/feature-card";
import { ArrowRight, Briefcase, Share2, TrendingUp } from "lucide-react";
import FloatingOrbsFeatures from "@/components/floating-orbs-features";

const SectionFour = () => {
  const bgImage =
    "https://baotiengdan.com/wp-content/uploads/2020/04/1-4.jpeg";
  const title = "Ý nghĩa lịch sử ";
  const subtitle = undefined;

  return (
    <section
      id={"section4"}
      className="min-h-screen relative flex flex-col justify-between overflow-hidden snap-start"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-red-800"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.3)",
        }}
      />

      {/* Header */}
      <div className="z-10 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="scroll-m-20 text-white text-3xl font-semibold tracking-wide">
            {title}
          </h3>

          {subtitle && (
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <div className="h-full flex items-center justify-center w-full z-10">
        <FloatingOrbsFeatures
          features={[
            {
              icon: Briefcase,
              title:
                "Kết thúc 21 năm chống Mỹ, 30 năm chiến tranh cách mạng, 117 năm chống đế quốc",
              description: "",
              images: [
                {
                  src: "https://vietjack.com/giai-bai-tap-lich-su-11/images/ly-thuyet-nhan-dan-viet-nam-khang-chien-chong-phap-xam-luoc-tu-nam-1858-1.PNG",
                  caption:
                    "1858 Pháp nổ súng tấn công Đà Nẵng Cai trị, bóc lột gần 100 năm",
                },
                {
                  src: "https://www.vietjack.com/giao-duc-quoc-phong-10-kn/images/ly-thuyet-bai-1-lich-su-truyen-thong-cua-luc-luong-vu-trang-1.PNG",
                  caption: "1954 chiến thắng Điện Biên Phủ",
                },
                {
                  src: "https://www.vietstamp.net/forum/attachment.php?attachmentid=66484&d=1255098858",
                  caption: "1975 Giải phóng miền Nam Thống nhất đất nước",
                },
              ],
            },
            {
              icon: Share2,
              title:
                "Kết thúc cách mạng dân tộc dân chủ nhân dân trên cả nước, mở ra kỷ nguyên mới cho dân tộc",
              description: "",
              images: [
                {
                  src: "https://special.nhandan.vn/quochoilahienthan/assets/ke8ie0AT68/2024425211737_146298-1600x900.jpg",
                  caption:
                    "Kỷ nguyên hòa bình, thống nhất, cùng chung nhiệm vụ chiến lược, đi lên  chủ nghĩa xã hội ",
                },
              ],
            },
            {
              icon: TrendingUp,
              title:
                "Làm thất bại âm mưu và thủ đoạn của chủ nghĩa đế quốc tiến công vào CNXH và cách mạng thế giới",
              description: "",
              images: [
                {
                  src: "https://wtop.com/wp-content/uploads/2015/10/AP_6910150454-1880x1242.jpg",
                  caption:
                    "Đánh bại cuộc chiến xâm lược quy mô lớn nhất, dài ngày nhất từ sau Thế chiến II, chia rẽ nước Mỹ sâu sắc nhất, làm phá sản tất cả chiến lược mới mà Mỹ thử nghiệm",
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};

export default SectionFour;

// import StorySection from "@/components/story-section";
// import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
// import { scrollToSection } from "@/lib/utils";
// import { motion } from "framer-motion";
// import { ArrowRight, Computer, GraduationCap, Stethoscope } from "lucide-react";
// import { useRouter } from "next/navigation";

// const SectionFour = () => {
//   const router = useRouter();
//   // useScrollOnHashChange();
//   return (
//     <StorySection
//       id="section4"
//       bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//       title="IV. Câu hỏi thảo luận"
//       subtitle="Bác sĩ, giảng viên, IT hiện nay có phải là giai cấp công nhân không?"
//     >
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="space-y-8"
//         >
//           {/* 1. Góc nhìn Mác-Lênin */}
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
//             <h3 className="text-2xl font-bold text-white mb-4">
//               1. Dưới góc nhìn Mác – Lênin, giai cấp công nhân là ai?
//             </h3>
//             <div className="text-white/80">
//               <p className="mb-4">Giai cấp công nhân được xác định qua:</p>
//               <ul className="list-disc list-inside space-y-2 pl-4">
//                 <li>
//                   Vị trí trong hệ thống sản xuất:
//                   <ul className="list-none pl-6 mt-2">
//                     <li>- Không sở hữu tư liệu sản xuất</li>
//                     <li>- Bán sức lao động để sống</li>
//                   </ul>
//                 </li>
//                 <li>
//                   Tính chất lao động:
//                   <ul className="list-none pl-6 mt-2">
//                     <li>- Trực tiếp sản xuất</li>
//                     <li>
//                       - Gián tiếp tham gia sản xuất trong nền kinh tế công
//                       nghiệp
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* 2. Phân tích từng nghề */}
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
//             <h3 className="text-2xl font-bold text-white mb-6">
//               2. Phân tích từng nghề
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white/5 p-6 rounded-lg"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Stethoscope className="w-8 h-8 text-blue-400" />
//                   <h4 className="text-xl font-semibold text-white">Bác sĩ</h4>
//                 </div>
//                 <div className="text-white/80 space-y-2">
//                   <p>• Hoạt động trong lĩnh vực dịch vụ</p>
//                   <p>• Không trực tiếp sản xuất của cải vật chất</p>
//                   <p>• Làm việc trong tổ chức công lập hoặc tư nhân</p>
//                   <p>• Bản chất công việc là chăm sóc sức khỏe</p>
//                   <p className="font-semibold mt-4">
//                     → Không thuộc giai cấp công nhân
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white/5 p-6 rounded-lg"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <GraduationCap className="w-8 h-8 text-green-400" />
//                   <h4 className="text-xl font-semibold text-white">
//                     Giảng viên
//                   </h4>
//                 </div>
//                 <div className="text-white/80 space-y-2">
//                   <p>• Làm việc trong lĩnh vực giáo dục</p>
//                   <p>• Không tham gia trực tiếp sản xuất</p>
//                   <p>• Gián tiếp đào tạo nguồn nhân lực</p>
//                   <p>• Thuộc lĩnh vực phi sản xuất</p>
//                   <p className="font-semibold mt-4">
//                     → Không hoàn toàn đồng nhất với giai cấp công nhân
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white/5 p-6 rounded-lg"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Computer className="w-8 h-8 text-purple-400" />
//                   <h4 className="text-xl font-semibold text-white">
//                     Nhân viên IT
//                   </h4>
//                 </div>
//                 <div className="text-white/80 space-y-2">
//                   <p>• Thuộc lĩnh vực sản xuất tri thức và công nghệ cao</p>
//                   <p>• Không sở hữu tư liệu sản xuất khi làm thuê</p>
//                   <p>• Công việc mang tính sáng tạo và tri thức cao</p>
//                   <p>• Không thuần túy là lao động công nghiệp truyền thống</p>
//                   <p className="font-semibold mt-4">
//                     → Có đặc điểm của giai cấp công nhân hiện đại
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* 3. Kết luận */}
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
//             <h3 className="text-2xl font-bold text-white mb-4">3. Kết luận</h3>
//             <div className="text-white/80 space-y-4">
//               <p>
//                 Bác sĩ, giảng viên, và IT không hoàn toàn thuộc giai cấp công
//                 nhân theo định nghĩa truyền thống của chủ nghĩa Mác – Lênin.
//               </p>
//               <p>
//                 Tuy nhiên, trong bối cảnh kinh tế tri thức, họ là bộ phận lao
//                 động trí thức gắn bó mật thiết với giai cấp công nhân, góp phần
//                 thúc đẩy sự phát triển xã hội và nền kinh tế.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </StorySection>
//   );
// };

// export default SectionFour;
