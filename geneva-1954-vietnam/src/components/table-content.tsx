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
      title: "Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân",
      id: "hero",
      icon: "🎯",
    },
    {
      title: "I. Quan điểm cơ bản của chủ nghĩa Mác-Lênin",
      id: "section1",
      icon: "📚",
    },
    {
      title:
        "II. Giai cấp công nhân và việc thực hiện sứ mệnh lịch sử hiện nay",
      id: "section2",
      icon: "⚡",
    },
    {
      title: "III. Sứ mệnh lịch sử của giai cấp công nhân Việt Nam",
      id: "section3",
      icon: "🌟",
    },
    {
      title: "IV. Câu hỏi thảo luận",
      id: "section4",
      icon: "💭",
    },
    {
      title: "Lời cảm ơn",
      id: "thanks",
      icon: "❤️",
    },
  ];

  return (
    <div className="fixed left-8 top-8 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent cursor-pointer text-white border border-white/20"
          >
            <Menu className="size-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-black/80 backdrop-blur-md border border-white/20">
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
