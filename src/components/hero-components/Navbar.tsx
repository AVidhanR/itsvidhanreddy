"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import "@/app/globals.css";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="dark:text-white text-black">
          Home
        </Link>
        <Link href="/about" className="dark:text-white text-black">
          About
        </Link>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4 navbar-responsive">
            <ProductItem
              title="Quote Generator"
              href="https://github.com/AVidhanR/QuoteGenerator"
              src="https://github.com/user-attachments/assets/9c7def77-1d0c-426d-acf1-63385e934948"
              description="This is a simple quote generator that generates a random quote from a list of quotes."
            />
            <ProductItem
              title="Data Visualization"
              href="https://github.com/AVidhanR/DataVisualization"
              src="https://github.com/AVidhanR/DataVisualization/assets/116101537/4e0ced96-6619-4598-a945-95a3dffbd207"
              description="Data Visualization using streamlit and python."
            />
            <button className="mr-52">
              <Link href={"/projects"} className="dark:text-white text-black">
                View All Projects &gt;
              </Link>
            </button>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contacts">
          <div className="flex flex-col space-y-4 text-md">
            <HoveredLink href="https://github.com/AVidhanR" className="">
              GitHub
            </HoveredLink>
            <HoveredLink href="https://linkedin.com/in/AVidhanR">
              LinkedIn
            </HoveredLink>
            <HoveredLink href="https://instagram.com/itsvidhanreddy">
              Instagram
            </HoveredLink>
            <HoveredLink href="https://linktr.ee/itsvidhanreddy">
              Link Tree
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
