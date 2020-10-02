import React from "react";
import { IconLinkUI } from "./IconLinkUI";

export function IconLink({ icon, label, to }) {
  return (
    <IconLinkUI to={to}>
      {icon}
      {label}
    </IconLinkUI>
  );
}
