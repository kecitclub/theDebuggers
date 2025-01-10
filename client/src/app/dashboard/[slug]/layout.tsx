import type { Metadata } from "next";
import { AppSidebar } from "@/components/Dashboard/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { clientAdmin } from "@/constant/dashboardConstant";
import { notFound } from "next/navigation";
import BreadcrumbComponent from "@/components/Dashboard/breadcumb";

export const metadata: Metadata = {
  title: "Eak Kadam",
  description: "A steps toward the betterment",
};
export default async function Layout({
  children,
  params,
}: {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}) {
  const { slug } = await params;
  const validSlug = await clientAdmin.find((i) => i.slug == slug);
  if (!validSlug) {
    notFound();
  }

  return (
    <SidebarProvider>
      <AppSidebar role={slug} />
      <SidebarInset>
        <header className="flex h-6 pl-2  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2  pr-2 rounded-lg">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbComponent />
          </div>
        </header>
        <main className="p-2 rounded-lg ">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
