import React from "react";
import { ContentContainerUI } from "./ContentContainerUI";

export function ContentContainer(props) {
  return <ContentContainerUI {...props}>{props.children}</ContentContainerUI>;
}
