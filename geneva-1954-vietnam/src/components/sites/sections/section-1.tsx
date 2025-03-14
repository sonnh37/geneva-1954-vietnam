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
import { TimelineDemo } from "@/components/history-context";

const SectionOne = () => {
  const bgImage =
    "https://tse2.mm.bing.net/th?id=OIP.c8KuSTS7m4y2XKOSyNP37wHaF_&pid=Api";
  const title = "Bối cảnh lịch sử";
  const subtitle = undefined;

  return (
    <TimelineDemo/>
  );
};

export default SectionOne;
