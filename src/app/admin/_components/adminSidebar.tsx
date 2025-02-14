"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  User,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  ArrowLeftFromLine,
  PieChart,
} from "lucide-react";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    href: "/admin",
    icon: PieChart,
    label: "Dashboard",
  },
  {
    href: "/admin/user",
    icon: User,
    label: "User",
  },
  {
    href: "/admin/company",
    icon: Building2,
    label: "Company",
  },
  {
    href: "/admin/course",
    icon: GraduationCap,
    label: "Course",
  },
  {
    href: "/admin/job",
    icon: BriefcaseBusiness,
    label: "Job",
  },
  {
    href: "/admin/article",
    icon: BookOpen,
    label: "Article",
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto lg:w-[266px] border-r">
      <div className="flex flex-col">
        <div className="flex items-center text-lg font-semibold py-[22px] px-6">
          <Image
            src={"/img/logo/primary.png"}
            width={40}
            height={20}
            alt="Logo"
            className="mr-1"
          />
          <h1 className="font-bold text-blue-600">Cop</h1>
          <h1 className="text-yellow-500">tera.</h1>
          <h1 className="text-blue-600">Career</h1>
        </div>

        {sidebarItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) &&
              (item.href === "/admin" ? pathname === item.href : true)); // Periksa apakah path saat ini aktif
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-start gap-4 bg-transparent px-6 py-[14px] ${
                isActive ? "text-blue-600" : ""
              }`}
            >
              <item.icon className="w-5 h-5" />
              <p className="text-sm">{item.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col border-t">
        <Link
          href=""
          className="flex items-center justify-start gap-4 bg-transparent px-6 py-[14px]"
        >
          <ArrowLeftFromLine className="w-5 h-5" />
          <p className="text-sm">Collapsed View</p>
        </Link>
      </div>
    </section>
  );
};

export default AdminSidebar;
