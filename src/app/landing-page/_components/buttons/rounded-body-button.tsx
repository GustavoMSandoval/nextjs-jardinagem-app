import React, { ReactNode } from 'react';
import { cn } from "@/_core/shad/lib/utils";

interface RoundedBodyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

const variantStyles = {
  primary: "bg-white",
  secondary: "bg-transparent text-primary-gradient border-2 border-primary",
} as const;

const RoundedBodyButton: React.FC<RoundedBodyButtonProps> = ({
  variant,
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "px-[30px] py-[10px] font-bold rounded-full";

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default RoundedBodyButton;
