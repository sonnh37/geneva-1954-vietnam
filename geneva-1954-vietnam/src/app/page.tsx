import ChatbotAssistant from "@/components/chatbot-ai";
import LoadingComponent from "@/components/loading-page";
import StorytellingPage from "@/components/story-telling";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <StorytellingPage />
      {/* <HistoricalMissionPage /> */}
      <ChatbotAssistant />
    </Suspense>
  );
}
