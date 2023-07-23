import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="h-screen w-screen">{children}</div>;
}
