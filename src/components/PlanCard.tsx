"use client";

import { HiCheck } from "react-icons/hi2";
import Link from "next/link";

interface PlanCardProps {
  title: string;
  price: number;
  washes: number;
  features: string[];
  isPopular?: boolean;
  savingsPerWash?: number;
}

const PlanCard = ({ title, price, washes, features, isPopular = false, savingsPerWash }: PlanCardProps) => {
  return (
    <div
      style={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        lineHeight: "1.6",
        background: "#ffffff",
        border: `1px solid ${isPopular ? "rgba(96,165,250,0.4)" : "#e5e7eb"}`,
        borderRadius: "1.5rem",
        boxShadow: isPopular
          ? "0 8px 30px -5px rgba(96,165,250,0.15)"
          : "0 4px 6px -1px rgba(0,0,0,0.05)",
        position: "relative",
        minWidth: 0,
        overflowWrap: "break-word",
        wordWrap: "break-word",
      }}
    >
      {isPopular && (
        <div
          style={{
            position: "absolute",
            top: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#60a5fa",
            color: "white",
            padding: "4px 16px",
            borderRadius: "999px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Best Value
        </div>
      )}

      {/* Header */}
      <div style={{ paddingBottom: "8px", borderBottom: "1px solid #e5e7eb" }}>
        <h3 style={{ marginBottom: "4px" }}>{title}</h3>
        <p style={{ fontSize: "12px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
          {washes} Professional Washes / Month
        </p>
      </div>

      {/* Price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
        <span style={{ fontSize: "18px", color: "#6b7280" }}>₹</span>
        <span style={{ fontSize: "48px", fontWeight: 700, color: "#111111", lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: "14px", color: "#6b7280", marginLeft: "4px" }}>/month</span>
      </div>

      {savingsPerWash && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 12px",
            background: "rgba(16,185,129,0.1)",
            color: "#10b981",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 700,
            alignSelf: "flex-start",
          }}
        >
          <span>✨</span>
          Save ₹{savingsPerWash} per wash
        </div>
      )}

      {/* Features */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Includes
          </span>
          <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {features.map((feature, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <HiCheck style={{ color: "#10b981", marginTop: "2px", flexShrink: 0, fontSize: "18px" }} />
              <span style={{ fontSize: "15px", color: "#374151", fontWeight: 500 }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/checkout" style={{ display: "block", width: "100%", marginTop: "8px" }}>
        <button
          style={{
            width: "100%",
            padding: "14px 24px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "15px",
            fontFamily: "Times New Roman, Times, serif",
            cursor: "pointer",
            transition: "all 0.2s ease",
            background: isPopular ? "#111111" : "transparent",
            color: isPopular ? "#ffffff" : "#111111",
            border: isPopular ? "none" : "2px solid #e5e7eb",
          }}
        >
          Select {title}
        </button>
      </Link>

      <p style={{ fontSize: "11px", textAlign: "center", color: "#9ca3af", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        No long-term commitment. Cancel anytime.
      </p>
    </div>
  );
};

export default PlanCard;
