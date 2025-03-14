"use client";
import React, { useState } from "react";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { scrollToSection } from "@/lib/utils";


const TableOfContents: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contents = [
    {
      title: "Thống nhất đất nước (1945-1975)",
      id: "hero",
      icon: "",
    },
    {
      title: "I. Lãnh đạo cách mạng cả nước (1965 - 1975)",
      id: "section0",
      icon: "",
    },
    {
      title:
        "II. Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng thời kỳ 1954 - 1975",
      id: "section3",
      icon: "",
    },
    {
      title: "Câu hỏi thảo luận",
      id: "section6",
      icon: "",
    },
    {
      title: "Tổng kết",
      id: "section7",
      icon: "",
    },
    {
      title: "Lời cảm ơn",
      id: "thanks",
      icon: "❤️",
    },
  ];

  return (
    <div className="fixed left-4 top-4 md:left-8 md:top-8 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent cursor-pointer text-white border border-white/20"
          >
            <Menu className="size-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-65 sm:w-80 bg-black/30 backdrop-blur-md border border-white/20 ml-4 md:ml-8">
          {contents.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              className="group flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex-1">
                <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors line-clamp-2">
                  {item.title}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TableOfContents;
