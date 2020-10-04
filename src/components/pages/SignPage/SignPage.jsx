import React from "react";
import { Logo } from "../../atoms";
import { UserForm } from "../../organisms";
import { DefaultTemplate } from "../../templates";
import { SignPageUI } from "./SignPageUI";

export function SignPage() {
  return (
    <DefaultTemplate>
      <SignPageUI>
        <Logo large />
        <UserForm signUp />
      </SignPageUI>
    </DefaultTemplate>
  );
}
