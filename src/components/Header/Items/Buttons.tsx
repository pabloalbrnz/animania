import { ReactNode } from "react";

export function ButtonsWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4">
      {children}
    </div>
  );
}
