"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => {
        return [
            { href: "/", label: "Home", icon: HiHome, active: pathname !== "/search"},
            { href: "/search", label: "Search", icon: HiSearch, active: pathname === "/search"},
        ];
    }, [pathname]);

  return (
    <div className="flex h-full">
        <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
            <Box>
                <div className="flex flex-col gap-y-4 px-5 py-4 ">
                    {routes.map((item) => (
                        <SidebarItem key={item.label} {...item} />
                    ))}
                </div>
            </Box>
            <Box className="overflow-y-auto h-full">
                <Library />
            </Box>
        </div>
        <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
  )
}

export default Sidebar;