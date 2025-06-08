import {
  BookOpen,
  Bot,
  BuildingIcon,
  ChartNoAxesColumn,
  CirclePlay,
  CreditCardIcon,
  Github,
  KeyRoundIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
  SquareTerminal,
  UsersIcon,
} from "lucide-react";

export const NavItems = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Finetune",
      url: "/finetune",
      icon: SlidersHorizontalIcon,
    },
    {
      title: "Playground",
      url: "/playground",
      icon: CirclePlay,
    },
  ],
  Administration: [
    {
      title: "Members",
      url: "/members",
      icon: UsersIcon,
    },
    {
      title: "Workspaces",
      url: "/workspaces",
      icon: BuildingIcon,
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCardIcon,
    },
  ],
  platform: [
    {
      title: "Usage",
      url: "/usage",
      icon: ChartNoAxesColumn,
    },
    {
      title: "API Keys",
      url: "/api-keys",
      icon: KeyRoundIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
  navSecondary: [
    {
      title: "Documentation",
      url: "/documentation",
      icon: BookOpen,
    },
    {
      title: "Github",
      url: "/github",
      icon: Github,
    },
  ],
};
