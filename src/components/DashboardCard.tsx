"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";

interface DashboardCardProps {
  title: string;
  desc: string;
  icon: IconType;
  href: string;
  color?: string;
}

const DashboardCard = ({ title, desc, icon: Icon, href, color = "brand-green" }: DashboardCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="minimal-card p-6 h-full flex flex-col gap-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center border border-white/5 bg-white/5 ${color === 'brand-green' ? 'text-brand-green' : 'text-white'}`}>
          <Icon className="text-xl" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white group-hover:text-brand-green transition-colors">{title}</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
        </div>
        <div className="mt-auto pt-4 flex justify-end">
          <HiOutlineChevronRight className="text-neutral-700 group-hover:text-white transition-all group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
