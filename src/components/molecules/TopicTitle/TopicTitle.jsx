import React from "react";
import { Title, Link } from "../../atoms";
import { TopicTitleUI } from "./TopicTitleUI";

export function TopicTitle({ title, linkLabel, linkTo }) {
  return (
    <TopicTitleUI>
      <Title>{title}</Title>
      <Link to={linkTo}>{linkLabel}</Link>
    </TopicTitleUI>
  );
}
