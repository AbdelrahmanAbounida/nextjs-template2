import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className={cn(className)}>
      {/* <img className="" src="/logo2.png" width={150} height={150} /> */}

      <p className="text-primary text-5xl font-mont font-bold">Virion</p> 
    </Link>
  );
};

export default Logo;
