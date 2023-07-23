// import { Link } from "react-router-dom";

import { StringFunctions } from "@functions/strings";

interface ButtonProps {
  //   link: string;
  label: string;
  isOpen: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <a
      className={`text-gray-200 text-sm transition-all ease-linear hover:text-gray-400 ${
        props.isOpen && "font-medium hover:text-gray-200 cursor-default"
      }`}
      href=""
    >
      {StringFunctions.capitalizeAll(props.label)}
    </a>
  );
  //    <Link to={props.link}>{props.label}</Link>;
}
