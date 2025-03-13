import StorySection from "@/components/story-section";
import useScrollOnHashChange from "@/hooks/useScrollOnHashChange";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SectionHero = () => {
  const router = useRouter();

  const bgImage =
    "https://vnanet.vn/Data/Articles/2020/01/09/4362936/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_xay_dung_cnxh_o_mien_bac_va_dau_tranh_chong_my_-_nguy_o_mien_nam_1954_%E2%80%93_1965___151645204_stand.jpg";
  const title = "Thống nhất đất nước (1945-1975)";
  const subtitle = "Chương 2 - Nhóm 5 - Môn VNR202";

  return (
    <section
      id={"hero"}
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
      
      <div className="h-full flex flex-col items-center justify-center w-full z-10">
        <div className="z-10 text-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection("section1")}
            className="inline-flex items-center gap-2 text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
          >
            Khám phá <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;
