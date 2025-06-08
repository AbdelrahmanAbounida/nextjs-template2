import { AppSidebar } from "@/components/home/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen ">
      <SidebarProvider className="!bg-zinc-100 dark:bg-[#131315]">
        <AppSidebar />
        <SidebarInset>
          <div className="w-full h-full ">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
