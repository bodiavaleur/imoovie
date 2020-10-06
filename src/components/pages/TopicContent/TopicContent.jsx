import React from "react";
import { TopicContentUI } from "./TopicContentUI";
import { TopicTitle } from "../../molecules";
import { Poster } from "../../atoms";
import { DefaultTemplate } from "../../templates";

export function TopicContent() {
  return (
    <DefaultTemplate>
      <TopicTitle title='Featured' />
      <TopicContentUI>
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </TopicContentUI>
    </DefaultTemplate>
  );
}
