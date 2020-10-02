import React from "react";
import { ContentContainerUI } from "./ContentContainerUI";

export function ContentContainer({ children, image }) {
  return <ContentContainerUI image={image}>{children}</ContentContainerUI>;
}
