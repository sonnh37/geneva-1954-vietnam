"use client";
import { Dialog } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import FeatureCard from "./feature-card";
import TimelineItem from "./time-line-item";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
interface ImageWithText {
  src: string;
  caption: string;
}

interface FloatingOrbProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  images: ImageWithText[];
  index: number;
}

const FloatingOrb: React.FC<FloatingOrbProps> = ({
  icon: Icon,
  title,
  description,
  images,
  index,
}) => {
  const randomDelay = Math.random() * 2;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                delay: randomDelay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-md rounded-full p-8 border border-white/20">
                <div className="w-64 h-64 flex flex-col items-center justify-center text-center gap-4">
                  <motion.div
                    className="p-4 bg-white/20 rounded-full"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-white/100 text-sm">{description}</p>
                </div>
              </div>
            </motion.div>

            {/* Glowing effect */}
            <div className="absolute inset-0 blur-3xl bg-white/5 rounded-full z-0" />
          </motion.div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-7xl overflow-hidden  h-[90vh] flex justify-center items-center border-0 p-0">
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Keyboard, Mousewheel]}
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            className="w-full h-full bg-transparent"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="flex bg-transparen flex-col w-[100vh] h-[100vh] items-center"
              >
                <Image
                  width={1000}
                  height={1000}
                  src={img.src}
                  alt={`Slide ${idx}`}
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-3xl z-50 text-white bg-black/50 p-2 rounded">
                  {img.caption}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </DialogContent>
      </Dialog>
    </>
  );
};

interface ImageWithText {
  src: string;
  caption: string;
}

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  images: ImageWithText[];
}

interface FloatingOrbsFeaturesProps {
  features: Feature[];
}

const FloatingOrbsFeatures: React.FC<FloatingOrbsFeaturesProps> = ({
  features,
}) => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FloatingOrb key={index} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FloatingOrbsFeatures;
