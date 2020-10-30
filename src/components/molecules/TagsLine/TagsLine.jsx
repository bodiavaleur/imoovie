import React from "react";
import { TagsLineUI } from "./TagsLineUI";

export function TagsLine(props) {
  return <TagsLineUI {...props}>{props.children}</TagsLineUI>;
}
