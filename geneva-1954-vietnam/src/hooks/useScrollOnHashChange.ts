import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const useScrollOnHashChange = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.replace("#", ""); // Lấy phần hash từ URL
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]); // Kích hoạt mỗi khi URL thay đổi
};

export default useScrollOnHashChange;
