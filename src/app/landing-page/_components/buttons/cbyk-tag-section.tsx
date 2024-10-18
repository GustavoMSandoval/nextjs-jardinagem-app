interface CbykTagSectionProps {
  filled?: boolean;
}

export default function CbykTagSection({ filled }: CbykTagSectionProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className={`h-2 w-[14px] ${filled ? "bg-primary" : "border-2 border-input"} rounded-full`}></div>
      <p className="font-semibold text-sm text-muted-foreground">CBYK.ai</p>
    </div>
  );
}