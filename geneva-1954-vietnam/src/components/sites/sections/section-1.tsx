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

const SectionOne = () => {
  const bgImage =
    "https://baothanhhoa.vn/thumbnail/news/boi-canh-dat-nuoc-va-y-chi-khat-vong-thong-nhat-to-quoc-sau-hiep-dinh-gionevo-nam-1954-di2443d205d1073940t6434l9.jpg";
  const title = "Bối cảnh lịch sử";
  const subtitle = undefined;

  return (
    <section
      id={"section1"}
      className="h-screen relative flex flex-col justify-between overflow-hidden snap-start"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
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
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>

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
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          keyboard={{ enabled: true }} // Điều khiển bằng phím mũi tên
          mousewheel={{ forceToAxis: true }} // Điều khiển bằng cuộn chuột
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="max-w-6xl mx-auto px-4">
              <TimelineItem
                year="1. Bối cảnh hiện nay"
                title=""
                description="Sau Hiệp định Genève (1954), đất nước tạm thời bị chia cắt thành hai miền."
                isRight={false}
                image="https://ungdungmoi.edu.vn/wp-content/uploads/2018/01/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky70.jpg"
                height="120"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-6xl mx-auto px-4">
              <TimelineItem
                year=""
                title=""
                description="Mỹ không thực hiện tổng tuyển cử thống nhất đất nước, thay vào đó dựng lên chính quyền Ngô Đình Diệm ở miền Nam và tiến hành chiến tranh xâm lược.
"
                isRight={false}
                image="https://nghiencuuquocte.org/wp-content/uploads/2015/10/Diem-1956.jpg"
                height="120"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-6xl mx-auto px-4">
              <TimelineItem
                year=""
                title=""
                description="Từ năm 1965, Mỹ leo thang chiến tranh, trực tiếp đưa quân vào miền Nam và mở rộng chiến tranh ra miền Bắc.
"
                isRight={false}
                image="https://tse1.mm.bing.net/th?id=OIP._1bBca5ODM7JHvgJekYkWgHaEw&pid=Api"
                height="120"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionOne;
