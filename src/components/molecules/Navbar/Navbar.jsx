import React, { useState } from "react";
import { IconLink } from "../../atoms";
import { NavbarUI } from "./NavbarUI";
import { FaHome } from "react-icons/fa";

export function Navbar() {
  return (
    <NavbarUI>
      <IconLink to='/' icon={<FaHome />} label='Home' />
      <IconLink to='/' icon={<FaHome />} label='Home' />
      <IconLink to='/' icon={<FaHome />} label='Home' />
      <IconLink to='/' icon={<FaHome />} label='Home' />
    </NavbarUI>
  );
}
