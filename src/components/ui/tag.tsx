import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-sage/10 px-3 py-1 font-mono text-xs text-sage",
        className
      )}
    >
      {children}
    </span>
  );
}