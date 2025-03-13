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
import { ArrowRight } from "lucide-react";

const SectionTwo = () => {
  const bgImage =
    "https://vnanet.vn/Data/Articles/2020/02/03/4428965/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_xay_dung_va_bao_ve_chinh_quyen_cach_mang_khang_chien_chong_thuc_dan_phap_thang_loi_1945_-_1954_stand.jpg";
  const title = "Lãnh đạo cuộc kháng chiến chống Mỹ cứu nước";
  const subtitle = undefined;

  return (
    <section
      id={"section2"}
      className="h-screen relative flex flex-col justify-between overflow-hidden snap-start"
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
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Keyboard,
            Mousewheel,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          
          scrollbar={{ draggable: true }}
          keyboard={{ enabled: true }} // Điều khiển bằng phím mũi tên
          mousewheel={{ forceToAxis: true }} // Điều khiển bằng cuộn chuột
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <h4 className="scroll-m-20 text-xl text-white font-semibold tracking-tight">
                Ở miền bắc, Mỹ đã:
              </h4>
              <div className="">
                <TimelineItem
                  year=""
                  title=""
                  description="Dùng không quân, hải quân đánh phá miền Bắc
Ý đồ đưa miền Bắc trở về thời kỳ đồ đá,
 ngăn chặn chi viện miền Nam
"
                  isRight={false}
                  image="https://images.kienthuc.net.vn/zoom/800/uploaded/lenam/2013_12_24/phantom_kienthuc_4702_trss.jpg"
                />
                <TimelineItem
                  year=""
                  title=""
                  description="5/8/1964 Mỹ dựng lên
 “sự kiện Vịnh Bắc Bộ” 
Bộ trưởng Quốc phòng Mỹ 
Robert S. McNamara

"
                  isRight={true}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSo9jHxGt45Fi0psKm2kW4HnAeY9Cef22fbIpw517jYkL50Lb11"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <h4 className="scroll-m-20 text-xl text-white font-semibold tracking-tight">
                Ở miền bắc, Việt Nam đã:
              </h4>
              <FeatureCard
                icon={ArrowRight}
                title="Chuyển hướng kinh tế "
                description="Từ kinh tế XHCN sang kinh tế thời chiến, Tổ chức mô hình HTX trang bị cơ khí nhỏ, Nhà máy CN lớn: sơ tán, chia nhỏ thành CN địa phương"
              />
              <FeatureCard
                icon={ArrowRight}
                title="Chống chiến tranh phá hoại"
                description="Tay cày, tay súng
Tay búa, tay súng , Bắn rơi 3.200 máy bay,
 140 tàu chiến
, 1/11/1968 Mỹ chấm dứt ném bom không điều kiện

"
              />
              <FeatureCard
                icon={ArrowRight}
                title="Chi viện miền Nam"
                description="“Ba sẵn sàng” 
của thanh niên
, “Thóc không thiếu 1 cân
Quân không thiếu 1 người”
, “Xe chưa qua, 
nhà không tiếc”
"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <TimelineItem
                    year=""
                    title=""
                    description="Thanh niên vui mừng nhận giấy trúng tuyển nhập ngũ

"
                    isRight={false}
                    image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHtPy9dZ7rtRUAfPdHt5fo7LTYtiiqDaK7eva3vL_ZYCGKL27h"
                  />
                </div>

                <div>
                  <TimelineItem
                    year=""
                    title="“Tay cày, tay súng”"
                    description="
"
                    isRight={false}
                    image="https://baotanglichsu.vn/DataFiles/Uploaded/image/data%20Hung/ky%20niem%2045%20nam%20vinh%20bac%20bo/3.jpg"
                  />
                </div>
                <div className="col-span-2">
                  {" "}
                  <TimelineItem
                    year=""
                    title="“Ba đảm đang”"
                    description="Đảm nhiệm sản xuất, công tác, thay thế cho nam giới đi chiến đấu.
Đảm nhiệm gia đình, khuyến khích chồng con yên tâm chiến đấu.
Đảm nhiệm phục vụ chiến đấu và sẵn sàng chiến đấu khi cần thiết.
"
                    isRight={false}
                    image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpIK03Gc-AQ88y51kACBmwD2G5KuI97ld4Y7SrNLRGVnClz5uN"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <h4 className="scroll-m-20 text-xl text-white font-semibold tracking-tight">
                Ở miền nam, Việt Nam đã:
              </h4>
              <FeatureCard
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
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionTwo;
