import { ElementType, useState } from "react";

interface InputProps {
  placeholder: string;
  icon: { Icon: ElementType; size: number };
}

export function Input(props: InputProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "px-2 py-1.5 bg-zinc-800 rounded border-[1px] border-zinc-200 gap-2" : ""
      } flex`}
    >
      <props.icon.Icon
        onClick={() => setIsOpen((prev) => !prev)}
        size={props.icon.size}
        className={`${isOpen ? "" : "hover:cursor-pointer"} text-gray-200`}
      />
      <input
        type="text"
        placeholder={props.placeholder}
        className={`transition-all ease-linear duration-400 ${
          isOpen ? "w-48" : "w-0"
        } bg-transparent focus:outline-none text-zinc-200`}
      />
    </div>
  );
}
