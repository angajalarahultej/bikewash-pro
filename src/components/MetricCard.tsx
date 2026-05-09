"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: IconType;
  description?: string;
  trend?: {
    value: string;
    isUp: boolean;
  };
  color?: "primary" | "secondary" | "accent";
}

const MetricCard = ({ 
  label, 
  value, 
  icon: Icon, 
  description, 
  trend,
  color = "primary" 
}: MetricCardProps) => {
  const colorMap = {
    primary: "bg-primary/5 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };

  return (
    <div className="global-stat-card">
      <div className="flex items-center justify-between">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${colorMap[color]}`}>
          <Icon className="text-2xl" />
        </div>
        {trend && (
          <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
            trend.isUp ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
          }`}>
            {trend.isUp ? "↑" : "↓"} {trend.value}
          </div>
        )}
      </div>

      <div>
        <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-1">{label}</h4>
        <div className="text-3xl font-bold text-primary">{value}</div>
        {description && (
          <p className="text-xs text-muted/80 mt-2 font-medium">{description}</p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
