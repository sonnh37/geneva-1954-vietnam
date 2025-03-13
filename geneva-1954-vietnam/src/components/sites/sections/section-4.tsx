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
