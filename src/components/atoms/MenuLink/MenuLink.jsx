import React from "react";
import { MenuLinkUI } from "./MenuLinkUI";

export function MenuLink(props) {
  return <MenuLinkUI {...props}>{props.children}</MenuLinkUI>;
}
