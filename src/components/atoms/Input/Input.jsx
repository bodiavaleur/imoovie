import React from "react";
import { InputUI, InputSearchUI } from "./InputUI";

export function Input(props) {
  return <InputUI {...props} />;
}

export function InputSearch(props) {
  return <InputSearchUI {...props} />;
}
