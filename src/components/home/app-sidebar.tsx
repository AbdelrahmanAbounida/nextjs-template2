"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./user-nav";
import { NavMenus } from "./nav-menus";
import { NavItems } from "@/constants/nav";
import Logo from "../logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="">
      <SidebarHeader className="bg-zinc-100 dark:bg-[#131315]">
        <SidebarMenu className="">
          <SidebarMenuItem>
            <SidebarMenuButton
              className=" !ring-0 hover:bg-zinc-200/60  "
              size="lg"
              asChild
            >
              <Logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-zinc-100 dark:bg-[#131315]">
        <NavMenus title="" items={NavItems.navMain} className="mt-2 pt-0" />
        <NavMenus
          title="Administration"
          items={NavItems.Administration}
          className=" pt-0"
        />
        <NavMenus
          title="Platform"
          items={NavItems.platform}
          className=" pt-0"
        />
        <NavMenus title="" items={NavItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-zinc-100 dark:bg-[#131315]">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
