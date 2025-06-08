"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PlayCircle, Rocket, TimerReset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// TODO:: refine sidebar
// TODO:: Home page
// TODO:: finalize package , server (api in nextjs), sdk

export default function Home() {
  const router = useRouter();

  const currentTime = new Date();
  const isMorning = currentTime.getHours() < 12;

  return (
    <main className="w-full h-full">
      {/** Header */}
      <div className=" rounded-t-xl">
        <div className="pl-3 pt-2 flex items-center mb-3">
          <SidebarTrigger className="" />
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex-1">
              <h2 className="inline-block mr-2 text-lg font-medium leading-7 text-gray-800 dark:text-white">
                Good {isMorning ? "Morning" : "Evening"} Bro 👋
              </h2>
            </div>
            <span className="text-sm text-zinc-950/50 dark:text-white/50">
              Welcome back to your Ladder AI Dashboard
            </span>
          </div>
        </div>
        <Separator className="my-8 bg-zinc-300/30 dark:bg-white/50" />

        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="mt-8 md:mt-0 flex-1 min-w-[400px] w-full items-center justify-between gap-x-3">
            <div className="sm:flex flex-1 w-full items-center justify-between gap-x-3">
              <div className="flex-1 flex items-center space-x-2">
                <div className="items-center flex h-6 pl-1 pr-[10px] rounded-full bg-green-600/10 dark:bg-green-500/10 space-x-0.5">
                  <div className="flex items-center justify-center w-4 h-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-zinc-300/30 dark:bg-white/50" />
        <div className="mt-3 flex flex-col gap-0">
          <p className="text-lg font-semibold">AI Models</p>
          <p className="text-zinc-950/50 dark:text-white/40 text-sm">
            Latest Trained AI Models
          </p>
        </div>
      </div>
    </main>
  );
}

const WarningCard = () => {
  return (
    <div className="flex items-center rounded-2xl pl-6 pr-4 py-3 bg-orange-600/10 dark:bg-orange-500/10 mb-8 gap-x-4">
      <div className="h-10 w-10 rounded-full p-2 bg-orange-600 dark:bg-orange-500 flex items-center justify-center">
        <TimerReset className="text-white w-4 h-4" />
      </div>
      <div className="flex-1 space-y-3 sm:flex sm:space-y-0 space-x-0 sm:space-x-3">
        <div className="flex-1">
          <h3 className="font-medium text-zinc-950 dark:text-white">
            No AI Models have been trained yet
          </h3>
          <span className="text-sm text-zinc-950/50 dark:text-white/50">
            once you train an AI Model its training data, losses, metrics and
            required code to run it will be shown here.
          </span>
        </div>
      </div>
    </div>
  );
};
