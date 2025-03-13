import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SectionSix = () => {
  const router = useRouter();
  const section3 = "/thumbnail.jpg";
  const bgImage = "https://baotiengdan.com/wp-content/uploads/2020/04/1-4.jpeg";
  const title = "IV. Câu hỏi thảo luận";
  const subtitle =
    "Vì sao Mỹ và chính quyền Ngô Đình Diệm phải thực hiện chính sách di cư sau Hiệp định Genève (1954-1975)?";
  const id = "section6";
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
            <p className="text-xl text-center text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* 1. Góc nhìn Mác-Lênin */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                1. Củng cố lực lượng chính trị và xã hội ở miền Nam
              </h3>
              <div className="text-white/80">
                <p className="mb-4">Giai cấp công nhân được xác định qua:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Củng cố lực lượng chính trị và xã hội ở miền Nam
                    <ul className="list-none pl-6 mt-2">
                      <li>
                        - Sau Hiệp định Genève, đất nước bị chia cắt tạm thời.
                      </li>
                      <li>
                        - Mỹ & chính quyền Ngô Đình Diệm lo sợ bầu cử sẽ giúp Hồ
                        Chí Minh và Đảng Lao động Việt Nam chiến thắng.
                      </li>
                      <li>
                        - Chính sách di cư nhằm tăng số lượng dân ủng hộ chính
                        quyền thân Mỹ ở miền Nam.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Làm suy yếu hậu phương miền Bắc
                    <ul className="list-none pl-6 mt-2">
                      <li>
                        - Mỹ muốn giảm nhân lực, làm gián đoạn sản xuất và kinh
                        tế miền Bắc.
                      </li>
                      <li>
                        - Một bộ phận dân cư bị lôi kéo hoặc ép buộc rời khỏi
                        vùng kiểm soát của chính quyền cách mạng.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Tuyên truyền chống cộng và gây tâm lý hoang mang
                    <ul className="list-none pl-6 mt-2">
                      <li>
                        - Mỹ & chính quyền Sài Gòn tung ra nhiều chiến dịch
                        tuyên truyền (ví dụ: “Chúa đã vào Nam”, “Di cư để tìm tự
                        do”).
                      </li>
                      <li>
                        - Thông tin sai lệch về chính quyền miền Bắc được lan
                        truyền nhằm khiến dân chúng lo sợ.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Chuẩn bị nền tảng cho chiến lược chống cộng lâu dài
                    <ul className="list-none pl-6 mt-2">
                      <li>
                        - Những người di cư (trí thức, Công giáo, tầng lớp thân
                        Pháp) trở thành lực lượng chính trị & quân sự quan
                        trọng.
                      </li>
                      <li>
                        - Họ đóng vai trò trong các chiến dịch đàn áp phong trào
                        cách mạng sau này.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Phân tích từng nghề */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                2. Kết quả của chính sách di cư
              </h3>
              <div className="text-white/80">
                <p className="mb-4">Giai cấp công nhân được xác định qua:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Hơn 1 triệu người di cư từ Bắc vào Nam (giai đoạn
                    1954-1955).
                  </li>
                  <li>
                    Chính quyền Ngô Đình Diệm định cư họ ở ven đô, đồng bằng
                    sông Cửu Long.
                  </li>
                  <li>
                    Dù có sự hỗ trợ của Mỹ, việc di cư ồ ạt gây ra nhiều khó
                    khăn về kinh tế - xã hội ở miền Nam.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
