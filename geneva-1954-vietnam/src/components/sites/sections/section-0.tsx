import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SectionZero = () => {
  const router = useRouter();
  const bgImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrGRYjxd84FsQNl2p3JI_PpnXVxZsnK9_FA&s";
  const title = "I. Lãnh đạo cách mạng cả nước (1965 - 1975)";
  const id = "section0";
  return (
    <section
      id={id}
      className="min-h-screen relative flex items-center justify-center overflow-hidden snap-start"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.3)",
        }}
      />
      <div className="relative z-10 container flex justify-center  mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-fit mb-16"
        >
          <h2 className="scroll-m-20 text-white border-b pb-2 text-4xl font-semibold tracking-wide first:mt-0">
            {title}
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionZero;
