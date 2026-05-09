"use client";

import { HiCheck, HiClock, HiMapPin, HiSparkles } from "react-icons/hi2";

interface Step {
  id: string;
  label: string;
  time?: string;
  isCompleted: boolean;
  isCurrent: boolean;
  icon: any;
}

interface TimelineTrackerProps {
  steps: Step[];
}

const TimelineTracker = ({ steps }: TimelineTrackerProps) => {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex gap-6">
          {/* Connector Line */}
          {index !== steps.length - 1 && (
            <div className={`absolute left-6 top-10 w-0.5 h-12 ${step.isCompleted ? "bg-accent" : "bg-border"}`}></div>
          )}

          {/* Icon Node */}
          <div className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            step.isCompleted ? "bg-accent text-white" : 
            step.isCurrent ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110" : 
            "bg-surface-muted text-muted/80"
          }`}>
            <step.icon className="text-xl" />
            {step.isCompleted && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white flex items-center justify-center">
                <HiCheck className="text-white text-xs" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pt-1">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${
              step.isCurrent ? "text-primary" : step.isCompleted ? "text-muted" : "text-muted/80"
            }`}>
              {step.label}
            </h4>
            {step.time && (
              <p className="text-xs text-muted/80 font-medium mt-1 uppercase tracking-tighter italic">
                {step.time}
              </p>
            )}
            {step.isCurrent && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Active now</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineTracker;
