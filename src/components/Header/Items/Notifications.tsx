import { BiBell } from "react-icons/bi";

interface NotificationsButtonProps {
  amount?: number;
}

export function NotificationsButton(props: NotificationsButtonProps) {
  return (
    <div
      className={`text-zinc-200 transition-all ease-linear hover:text-zinc-400 cursor-pointer ${
        props.amount &&
        `transition-all ease-linear after:content-[''] after:text-zinc-200 after:text-xs after:bg-red-500 after:w-3 after:h-3 after:rounded-full after:absolute after:-mt-[1.825rem] after:ml-[0.95rem]`
      }`}
    >
      <BiBell size={28} />
    </div>
  );
}
