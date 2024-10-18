import React, { ReactNode } from 'react';
import { cn } from "@/_core/shad/lib/utils";

interface AsymmetricButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

const AsymmetricButton: React.FC<AsymmetricButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <div className="relative w-full flex items-center justify-center ml-[53px]">
    <a
      {...props}
      className={cn(
        "flex items-center justify-center h-[85px] w-[128px] rotate-[45deg] -skew-y-[45deg] bg-[#3B0078CC] hover:opacity-100 cursor-pointer",
        className
      )}
    >
      <span className="absolute w-full inset-0 flex items-center justify-center -rotate-[45deg] skew-y-[45deg]">
        <span className="w-full text-white text-sm text-center">
          {children}
        </span>
      </span>
    </a>
  </div>
);

export default AsymmetricButton;
