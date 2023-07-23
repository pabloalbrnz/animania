import { ReactNode, useEffect, useState } from "react";

export function Wrapper({ children }: { children: ReactNode }) {
  const [headerColor, setHeaderColor] = useState(
    "bg-gradient-to-b from-stone-950 to-transparent"
  );

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setHeaderColor("bg-gradient-to-b from-stone-950 to-stone-950")
      : setHeaderColor(
          "bg-gradient-to-b from-stone-950 to-transparent"
        );
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <div
      className={`h-16 w-full transition-all ease-linear duration-500 fixed ${headerColor} flex items-center px-12 gap-4 justify-between`}
    >
      {children}
    </div>
  );
}
