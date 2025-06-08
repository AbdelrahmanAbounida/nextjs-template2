import { cn } from "@/lib/utils";
import { Command } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center justify-center w-full !gap-1 ",
        className
      )}
    >
      <div className="flex aspect-square size-8  items-center justify-center rounded-lg  text-sidebar-primary-foreground">
        {/* <Command className="size-4" /> */}
        <Image
          src="/leiter.png"
          alt="logo"
          width={29}
          height={29}
          className=""
          // className="h-8 w-8"
        />
      </div>
      <div className="grid flex-1  text-sm leading-tight">
        <span className="truncate  font-semibold text-[16px]">Ladder AI</span>
        <span className="truncate text-[11px] text-muted-foreground/80">
          Finetune LLM Easily
        </span>
      </div>
    </Link>
  );
};

export default Logo;
