"use client";

import {
  Folder,
  MoreHorizontal,
  Share,
  Trash2,
  type LucideIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

export function NavMenus({
  items,
  title,
  className,
}: {
  title: string;
  className?: string;
  items: {
    title?: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const currentPath = usePathname();
  const segment = useSelectedLayoutSegment();

  const isActiveNav = (navLink: string) => {
    return currentPath === navLink || navLink.includes(segment!);
  };

  return (
    <SidebarGroup
      className={cn("group-data-[collapsible=icon]:hidden", className)}
    >
      {title && <SidebarGroupLabel className="">{title}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              className="!py-4 hover:bg-zinc-200/50 transition-all data-[active=true]/menu-button:text-primary data-[active=true]/menu-button:bg-zinc-200/50"
              asChild
              isActive={isActiveNav(item.url)}
            >
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
