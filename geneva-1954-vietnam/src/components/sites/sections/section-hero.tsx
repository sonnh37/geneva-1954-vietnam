import { Button } from "@/components/ui/button";
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
            className="space-y-2"
          >
            <h1 className="scroll-m-20 text-white text-4xl font-extrabold tracking-wide lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg tracking-wide text-muted-foreground">
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
          <Button
            onClick={() => scrollToSection("section0")}
            variant={"destructive"}
            size={"lg"}
          >
            Khám phá <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;
