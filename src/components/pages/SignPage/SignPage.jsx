import React from "react";
import { Logo } from "../../atoms";
import { UserForm } from "../../organisms";
import { DefaultTemplate } from "../../templates";
import { SignPageUI } from "./SignPageUI";

export function SignPage({ signUp, signIn }) {
  return (
    <DefaultTemplate>
      <SignPageUI>
        <Logo large />
        <UserForm signUp={signUp} signIn={signIn} />
      </SignPageUI>
    </DefaultTemplate>
  );
}
