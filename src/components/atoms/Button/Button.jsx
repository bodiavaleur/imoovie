import React from "react";
import { ButtonIconUI, ButtonLinkUI, ButtonUI } from "./ButtonUI";

export function Button(props) {
  return <ButtonUI {...props}>{props.children}</ButtonUI>;
}

export function ButtonIcon(props) {
  return <ButtonIconUI {...props}>{props.children}</ButtonIconUI>;
}

export function ButtonLink(props) {
  return <ButtonLinkUI {...props}>{props.children}</ButtonLinkUI>;
}
