import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isRight: boolean;
  image: string;
  height?: string;
}

const TimelineItem = ({
  year,
  title,
  description,
  isRight,
  image,
  height = undefined,
}: TimelineItemProps) => (
  <div className="relative w-full mb-16">
    <div className="md:flex gap-4 items-center justify-between">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`${isRight ? "md:order-2" : "md:order-1"}`}
      >
        <div
          className={`relative h-64 md:h-${
            height || "80"
          } rounded-xl overflow-hidden`}
        >
          <Image
            width={9999}
            height={9999}
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
          />
        </div>
      </motion.div>

      {/* Center Line and Dot Container */}
      <div className="hidden md:block relative w-[8%]">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`w-full md:w-[42%] ${isRight ? "md:order-1" : "md:order-2"}`}
      >
        <div
          className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20`}
        >
          <div className="text-white/60 mb-2">{year}</div>
          <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-white/80 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  </div>
);

export default TimelineItem;
