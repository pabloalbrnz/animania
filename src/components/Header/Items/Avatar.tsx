import { tailwindColors } from "@/util/colors";
import * as Avatar from "@radix-ui/react-avatar";

interface HeaderAvatarProps {
  image?: string;
}

const colorNames = Object.keys(tailwindColors.backgroundColors);
const randomColorName =
  colorNames[Math.floor(Math.random() * colorNames.length)];

export function HeaderAvatar(props: HeaderAvatarProps) {
  return (
    <Avatar.Root
      className={`${tailwindColors.backgroundColors[randomColorName]["500"]} inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-sm align-middle`}
    >
      <Avatar.Image src={props.image} alt="User Avatar" />
      <Avatar.Fallback className="font-bold text-zinc-200">AU</Avatar.Fallback>
    </Avatar.Root>
  );
}
