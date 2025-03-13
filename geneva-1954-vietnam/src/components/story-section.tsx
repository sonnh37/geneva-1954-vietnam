import { motion } from "framer-motion";

interface StorySectionProps {
  children: React.ReactNode;
  bgImage: any;
  title: string;
  subtitle?: string;
  id: string;
}

const StorySection = ({
  children,
  bgImage,
  title,
  subtitle,
  id,
}: StorySectionProps) => (
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
    <div className="relative z-10 container flex justify-center flex-col items-center  mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-fit mb-16"
      >
        <h3 className="scroll-m-20 text-center text-white text-3xl font-semibold tracking-wide">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xl text-center text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);
export default StorySection;
