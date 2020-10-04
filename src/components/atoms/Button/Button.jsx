import React from "react";
import { ButtonIconUI, ButtonLinkUI, ButtonUI } from "./ButtonUI";

export function Button({ children }) {
  return <ButtonUI>{children}</ButtonUI>;
}

export function ButtonIcon(props) {
  return <ButtonIconUI onClick={props.onClick}>{props.children}</ButtonIconUI>;
}

export function ButtonLink(props) {
  return <ButtonLinkUI {...props}>{props.children}</ButtonLinkUI>;
}
