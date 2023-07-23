import { BiSearch, BiCaretDown, BiCaretUp } from "react-icons/bi";
import { HeaderItems } from "./Items";
import { useState } from "react";

export function Header() {
  const [isHover, setIsHover] = useState(false);
  return (
    <HeaderItems.Wrapper>
      <div className="flex gap-12 items-center">
        <HeaderItems.Brand name="Animania" />
        <HeaderItems.Buttons>
          <HeaderItems.Button label="home" isOpen={true} />
          <HeaderItems.Button label="animes" isOpen={false} />
          <HeaderItems.Button label="movies" isOpen={false} />
          <HeaderItems.Button label="popular" isOpen={false} />
          <HeaderItems.Button label="my list" isOpen={false} />
        </HeaderItems.Buttons>
      </div>
      <div className="flex gap-4 items-center">
        <HeaderItems.Input
          placeholder="Title, actors and genres"
          icon={{ Icon: BiSearch, size: 28 }}
        />
        <HeaderItems.Notifications amount={1} />
        <div className="text-zinc-200 flex gap-1 items-center">
          <HeaderItems.Avatar
          // onMouseEnter={() => setIsHover(true)}
          // onMouseLeave={() => setIsHover(false)}
          />
          {isHover ? (
            <BiCaretUp size={24} onClick={() => setIsHover(false)} />
          ) : (
            <BiCaretDown size={24} onClick={() => setIsHover(true)} />
          )}
        </div>
      </div>
    </HeaderItems.Wrapper>
  );
}
