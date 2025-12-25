import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow = false }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-8",
        narrow ? "max-w-[720px]" : "max-w-[1200px]",
        className
      )}
    >
      {children}
    </div>
  );
}