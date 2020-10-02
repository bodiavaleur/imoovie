import React from "react";
import { ButtonIconUI, ButtonLinkUI, ButtonUI } from "./ButtonUI";

export function Button({ children }) {
  return <ButtonUI>{children}</ButtonUI>;
}

export function ButtonIcon(props) {
  return <ButtonIconUI onClick={props.onClick}>{props.children}</ButtonIconUI>;
}

export function ButtonLink({ children, to }) {
  return <ButtonLinkUI to={to}>{children}</ButtonLinkUI>;
}
