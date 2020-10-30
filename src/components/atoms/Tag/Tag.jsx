import React from "react";
import { TagUI } from "./TagUI";

export function Tag(props) {
  return <TagUI {...props}>{props.children}</TagUI>;
}
