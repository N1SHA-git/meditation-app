"use client";

import { useState } from "react";

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative flex">
      <TabButton onClick={() => setActiveTab(0)} isActive={activeTab === 0}>
        STATS
      </TabButton>
      <TabButton
        onClick={() => setActiveTab(1)}
        isActive={activeTab === 1}
        disabled
      >
        ACHIEVEMENTS
      </TabButton>

      {/* Полоска */}
      <div
        className="absolute top-full left-0 h-1 bg-[#95CBCF] transition-all duration-200"
        style={{
          width: `${100 / 2}%`,
          transform: `translateX(${activeTab * 100}%)`,
        }}
      />
    </div>
  );
}

function TabButton({ children, onClick, disabled, isActive }) {
  return (
    <button
      className={
        "flex justify-center items-center min-w-64 py-3" +
        (disabled ? " cursor-not-allowed" : "") +
        (isActive ? " text-white" : " text-white/50")
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
