'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
          <Link href={'#'}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Ourcourses">
            <div className="flex flex-col space-y-4 text-sm">

            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/Basicmusic">Basic Music Thoery</HoveredLink>
            <HoveredLink href="/seo">Advance Composition</HoveredLink>
            <HoveredLink href="/branding">Songwriting</HoveredLink>
            </div>

          </MenuItem>
          <Link href={'/contact'}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
          </Link>
      </Menu>
    </div>
  )
}

export default Navbar