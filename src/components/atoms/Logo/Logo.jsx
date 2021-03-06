import React from "react";
import { LogoUI } from "./LogoUI";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

export function Logo({ large }) {
  return (
    <Link to='/'>
      <LogoUI src={logo} alt='logo' large={large} />
    </Link>
  );
}
