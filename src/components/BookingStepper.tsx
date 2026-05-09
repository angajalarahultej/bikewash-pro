"use client";

interface Step {
  id: number;
  label: string;
}

interface BookingStepperProps {
  steps: Step[];
  currentStep: number;
}

const BookingStepper = ({ steps, currentStep }: BookingStepperProps) => {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-12">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center relative">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              step.id < currentStep ? "bg-accent text-white shadow-lg shadow-accent/20" : 
              step.id === currentStep ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110" : 
              "bg-surface-muted text-muted/80"
            }`}>
              {step.id < currentStep ? "✓" : step.id}
            </div>
            <span className={`absolute -bottom-6 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest ${
              step.id === currentStep ? "text-primary" : "text-muted/80"
            }`}>
              {step.label}
            </span>
          </div>
          
          {index !== steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-4 ${
              step.id < currentStep ? "bg-accent" : "bg-border"
            }`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingStepper;
