import React from "react";
import { LinkUI } from "./LinkUI";

export function Link({ to, children }) {
  return <LinkUI to={to}>{children}</LinkUI>;
}
