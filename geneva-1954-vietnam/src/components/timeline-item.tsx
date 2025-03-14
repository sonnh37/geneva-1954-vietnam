import { TimelineItemType } from "@/lib/data-process-stage";
import { motion } from "framer-motion";

const TimelineItem = ({ data }: { data: TimelineItemType }) => {
  let {
    date,
    text,
    link,
    category: { tag, color, bgColor },
  } = data;

  return (
    <div className="group relative my-[10px] flex w-1/2 justify-end pr-[22px] odd:justify-start odd:self-end odd:pl-[22px] odd:pr-0 sm:pr-[30px] sm:odd:pl-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex w-[400px] max-w-[95%] flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 px-4 py-[10px] text-center shadow-[0_0_2px_rgba(0,0,0,0.3)] after:absolute after:right-[-7.5px] after:top-[calc(50%-7.5px)] after:h-4 after:w-4 after:rotate-45 after:content-normal after:bg-white after:shadow-[1px_-1px_1px_rgba(0,0,0,0.2)] group-odd:items-center group-odd:text-center group-odd:after:left-[-7.5px] group-odd:after:right-auto group-odd:after:shadow-[-1px_1px_1px_rgba(0,0,0,0.2)] sm:max-w-[70%] md:items-end md:p-4 md:text-right md:group-odd:items-start md:group-odd:text-left"
      >
        <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-3xl font-semibold">
          {date}
        </p>
        <h3 className="scroll-m-20 text-2xl text-white/80 font-semibold tracking-tight">
          {text}
        </h3>
        <span className="absolute -right-8 top-[calc(50%-10px)] z-50 h-5 w-5 rounded-[50%] border-[3px] border-slate-400 bg-white group-odd:-left-8 group-odd:right-auto sm:-right-10 sm:group-odd:-left-10" />
      </motion.div>
    </div>
  );
};

export default TimelineItem;
