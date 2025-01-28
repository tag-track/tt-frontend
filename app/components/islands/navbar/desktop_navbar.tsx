import {ReactNode} from "react";
import {
  Sidebar,
  SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarSeparator
} from "~/components/ui/sidebar";
import {Box} from "lucide-react";
import {Link} from "@remix-run/react";


export function DesktopNavbar(
  {
    children
  }:{
    children:ReactNode
  }
) {

  return(
    <div className={`
    w-full relative
    `}>
      <SidebarProvider>
        <Sidebar>

          <SidebarHeader>
            <div className={`flex flex-row justify-start items-center gap-2 p-2`}>
              <div className={`
              bg-primary
              rounded-lg p-1.5
              text-zinc-300
              `}>
                <Box size={28} strokeWidth={1.5} />
              </div>
              <div className={`flex flex-col justify-center gap-0`}>
                <span className={`font-bold text-base`}>Tag Track</span>
                <code className={`-mt-1 text-sm opacity-65`}>v0.0.1</code>
              </div>
            </div>
          </SidebarHeader>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to={"/"}>Dashboard</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to={"/search"}>Search</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to={"/create"}>Create</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>


        </Sidebar>
        {children}
      </SidebarProvider>
    </div>
  )
}