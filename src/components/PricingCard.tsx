"use client";

import { HiCheck, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, features, isPopular = false }: PricingCardProps) => {
  return (
    <div
      className={`minimal-card p-8 flex flex-col h-full relative ${
        isPopular ? "border-brand-green/30" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-brand-green/10 text-brand-green px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
          Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-neutral-500 text-lg">₹</span>
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-neutral-500 text-xs ml-1">/session</span>
        </div>
      </div>

      <div className="space-y-4 mb-10 flex-1">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-neutral-400">
            <HiCheck className="text-brand-green mt-0.5 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Link href="/login" className="block w-full mt-auto">
        <button className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${
          isPopular 
            ? "bg-brand-green text-black hover:opacity-90" 
            : "bg-white/5 text-white border border-white/5 hover:bg-white/10"
        }`}>
          Select {title}
        </button>
      </Link>
    </div>
  );
};

export default PricingCard;
