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
import TimelineItem from "@/components/timeline-item";
import FeatureCard from "@/components/feature-card";
import { ArrowRight } from "lucide-react";
import VerticalTimeline from "@/components/process-stage";
import Timeline from "@/components/growth-timeline";
import { timelineData } from "@/lib/data-process-stage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SectionTwoOne = () => {
  const bgImage =
    "https://vnanet.vn/Data/Articles/2020/02/03/4428965/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_xay_dung_va_bao_ve_chinh_quyen_cach_mang_khang_chien_chong_thuc_dan_phap_thang_loi_1945_-_1954_stand.jpg";
  const title = "Lãnh đạo cuộc kháng chiến chống Mỹ cứu nước";
  const subtitle = "Miền Nam";

  return (
    <section
      id={"section2-1"}
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

      {/* Swiper */}
      <div className="h-full flex items-center justify-center w-full z-10">
        <div className="mx-auto w-full px-4 space-y-6">
          <div className="flex justify-center gap-x-96 flex-wrap ">
            <div>
              <Avatar className="size-16">
                <AvatarImage src="/vietnam.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <Avatar className="size-16">
                <AvatarImage
                  src="/united-states-of-america.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="relative my-10 flex flex-col after:absolute after:left-[calc(50%_-_2px)] after:h-full after:w-1 after:content-normal after:bg-slate-400">
            {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoOne;

{
  /* <FeatureCard
                icon={ArrowRight}
                title=""
                description="Lãnh đạo nhân dân và quân đội tiến hành đấu tranh chính trị kết hợp với đấu tranh vũ trang.
"
              />
              <FeatureCard
                icon={ArrowRight}
                title=""
                description={`Thực hiện chiến lược chiến tranh nhân dân, đánh bại các chiến lược chiến tranh của Mỹ như "Chiến tranh cục bộ", "Việt Nam hóa chiến tranh".

`}
              />
              <FeatureCard
                icon={ArrowRight}
                title=""
                description="Giải phóng hoàn toàn miền Nam qua các chiến dịch lớn: Tây Nguyên, Huế - Đà Nẵng, và đặc biệt là Chiến dịch Hồ Chí Minh lịch sử (4/1975).

"
              /> */
}
