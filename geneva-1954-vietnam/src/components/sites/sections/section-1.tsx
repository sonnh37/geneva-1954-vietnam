import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import Image from "next/image";
import { title } from "process";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const data = [
  {
    title: "1965",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-2xl font-normal mb-4">
          8/3/1965, Mỹ chính thức đưa quân vào Việt Nam: lính thủy đánh bộ Mỹ đổ
          bộ vào Đà Nẵng, mở đầu chiến lược "Chiến tranh cục bộ".
        </p>
        <div>
          <p className="text-neutral-200 text-xl md:text-2xl font-normal mb-4">
            Hội nghị lần thứ 11 (3-1965) và Hội nghị lần thứ 12 (12-1965) của
            Ban Chấp hành Trung ương Đảng đã phát động cuộc kháng chiến chống
            Mỹ.
          </p>

          <div className="ml-6">
            <p className="text-neutral-200 text-xl md:text-xl font-normal mb-4">
              <strong>+ Quyết tâm chiến lược:</strong> “Chiến tranh cục bộ” của
              Mỹ là cuộc chiến tranh xâm lược thực dân mới, bế tắc và đầy mâu
              thuẫn. Trung ương Đảng khẳng định đủ điều kiện và sức mạnh để đánh
              và thắng Mỹ.
            </p>

            <p className="text-neutral-200 text-xl md:text-xl font-normal mb-4">
              <strong>+ Mục tiêu chiến lược:</strong> Đánh bại đế quốc Mỹ trong
              mọi tình huống, bảo vệ miền Bắc, giải phóng miền Nam, hoàn thành
              cách mạng dân tộc dân chủ nhân dân và tiến tới thống nhất đất
              nước.
            </p>

            <p className="text-neutral-200 text-xl md:text-xl font-normal mb-4">
              <strong>+ Phương châm chiến lược:</strong> Đánh lâu dài, dựa vào
              sức mình là chính, càng đánh càng mạnh. Tập trung lực lượng hai
              miền mở các cuộc tiến công lớn, tranh thủ thời cơ giành thắng lợi
              quyết định.
            </p>

            <p className="text-neutral-200 text-xl md:text-xl font-normal mb-4">
              <strong>+ Tư tưởng chỉ đạo:</strong> <br />
              <div className="ml-6 mt-2">
                <p className="text-neutral-200 text-xl md:text-xl font-normal mb-4">
                  <strong>- Miền Nam:</strong> Giữ vững và phát triển thế tiến
                  công, kiên quyết tiến công liên tục. Kết hợp đấu tranh quân sự
                  với chính trị, thực hiện ba mũi giáp công, đấu tranh trên cả
                  ba vùng chiến lược. Đấu tranh quân sự giữ vai trò quyết định
                  trực tiếp.
                </p>
                <p className="text-neutral-200 text-xl md:text-xl font-normal mb-4">
                  <strong>- Miền Bắc:</strong> Vừa xây dựng kinh tế, quốc phòng
                  vững mạnh, vừa tiến hành chiến tranh nhân dân chống chiến
                  tranh phá hoại của Mỹ. Động viên cao nhất sức người, sức của
                  chi viện miền Nam, chuẩn bị đánh bại địch nếu chiến tranh lan
                  rộng.
                </p>
              </div>
            </p>

            <p className="text-neutral-200 text-xl md:text-xl font-normal mb-4">
              <strong>Quan hệ và nhiệm vụ cách mạng hai miền:</strong> Miền Nam
              là tiền tuyến lớn, miền Bắc là hậu phương lớn. Bảo vệ miền Bắc và
              giải phóng miền Nam là hai nhiệm vụ gắn bó mật thiết. Cả nước cùng
              quyết tâm “Tất cả để đánh thắng giặc Mỹ xâm lược”.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://ungdungmoi.edu.vn/wp-content/uploads/2018/01/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky70.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://nghiencuuquocte.org/wp-content/uploads/2015/10/Diem-1956.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://tse1.mm.bing.net/th?id=OIP._1bBca5ODM7JHvgJekYkWgHaEw&pid=Api"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://image.viettimes.vn/w800/Uploaded/2025/ernccrvnb/2015_03_10/danang02_1032015.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "1968",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-2xl font-normal mb-4">
          Cuộc tổng tiến công và nổi dậy Mậu Thân 1968 là một đòn tiến công
          chiến lược đánh vào tận hang ổ kẻ thù.
        </p>
        <p className="text-neutral-200 text-xl md:text-2xl font-normal mb-4">
          {"=>"} Thất bại chiến lược có tính chất bước ngoặt, khởi đầu quá trình
          đi đến thất bại hoàn toàn của Mỹ và Việt Nam Cộng hòa.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_ptOcZ-TPvk?si=dLo03zsRErJUqN4z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://file3.qdnd.vn/data/images/0/2022/01/04/tvtuongvy/mau%20than%201968.jpg?dpi=150&quality=100&w=870"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "1969",
    content: (
      <div>
        <p className="text-neutral-200 text-xs md:text-2xl font-normal mb-4">
          Mỹ thực hiện chiến lược "Việt Nam hóa chiến tranh": Rút quân dần, trao
          vai trò chiến đấu cho quân đội Việt Nam Cộng hòa.
        </p>
        <p className="text-neutral-200 text-xs md:text-2xl font-normal mb-4">
          Chủ tịch Hồ Chí Minh qua đời (2/9/1969): Gây xúc động lớn đối với nhân
          dân Việt Nam và bạn bè quốc tế.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vietnampropaganda.png/640px-Vietnampropaganda.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-190 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <div>
            <Image
              src="https://image.baophapluat.vn/w840/Uploaded/2025/vngtsu/2024_08_30/anh-3-1715.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://image.baophapluat.vn/w840/Uploaded/2025/vngtsu/2024_08_30/anh-2-298.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-130 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "1975",
    content: <div></div>,
  },
];
const SectionOne = () => {
  return (
    <section id={"section1"} className="min-h-screen relative snap-start">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${"/context.webp"})`,
          filter: "brightness(0.3)",
        }}
      />
      <div className="relative z-10 container flex justify-center flex-col items-center  mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-fit"
        >
          <h3 className="scroll-m-20 text-center text-white text-3xl font-semibold tracking-wide">
            Bối cảnh lịch sử
          </h3>
        </motion.div>
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
