"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between bg-white items-center py-4 px-8 md:px-12 lg:px-20 sticky top-0 z-50 text-gray-800">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/img/logo/primary.png"
          alt="Primary Logo"
          width={175}
          height={75}
          priority
        />
      </Link>

      {/* Navigation for Desktop */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/job" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Job Vacancy
              </NavigationMenuLink>
            </Link>
            <Link href="/accelelator" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Career Accelerator
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Buttons for Desktop */}
      <div className="hidden lg:flex gap-2">
        <Link
          href="https://chat.whatsapp.com/F9WXPrw5M1fDkdciySCJ6i"
          target="_blank"
        >
          <Button variant="brand">Komunitas Loker</Button>
        </Link>
        {/* <Button
          variant="outline"
          className="w-full border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-600"
        >
          Login
        </Button>
        <Button
          variant="default"
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Sign Up
        </Button> */}
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 lg:hidden">
          <Link
            href="/job"
            className="block py-2 text-sm font-medium text-gray-700 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Job Vacancy
          </Link>
          <Link
            href="/docs"
            className="block py-2 text-sm font-medium text-gray-700 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Tips & Trick
          </Link>
          <Link
            href="/docs"
            className="block py-2 text-sm font-medium text-gray-700 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Career Accelerator
          </Link>
          <div className="flex flex-col gap-2 w-full mt-4">
            <Button
              variant="outline"
              className="w-full border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-600"
            >
              Login
            </Button>
            <Button
              variant="default"
              className="w-full bg-blue-500 text-white hover:bg-blue-600"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
