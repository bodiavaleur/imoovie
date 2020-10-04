import React, { useState } from "react";
import { IconLink } from "../../atoms";
import { NavbarUI } from "./NavbarUI";
import { FaHome } from "react-icons/fa";

export function Navbar() {
  return (
    <NavbarUI>
      <IconLink to='/' icon={<FaHome />} label='Search' />
      <IconLink to='/' icon={<FaHome />} label='Popular' />
      <IconLink to='/' icon={<FaHome />} label='Trending' />
      <IconLink to='/' icon={<FaHome />} label='Watchlist' />
      <IconLink to='/' icon={<FaHome />} label='Favorites' />
    </NavbarUI>
  );
}
