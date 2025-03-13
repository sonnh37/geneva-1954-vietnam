import ChatbotAssistant from "@/components/chatbot-ai";
import HistoricalMissionPage from "@/components/content-01";
import LoadingComponent from "@/components/loading-page";
import StorytellingPage from "@/components/sites/story-telling";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <StorytellingPage />
      <ChatbotAssistant />
    </Suspense>
  );
}
