import React from "react";
import { IconLink } from "../../atoms";
import { NavbarUI } from "./NavbarUI";
import { FaClock, FaSearch, FaStar, FaUserAltSlash } from "react-icons/fa";

export function Navbar() {
  return (
    <NavbarUI>
      <IconLink to='/search' icon={<FaSearch />} label='Search' />
      <IconLink to='/watchlist' icon={<FaClock />} label='Watchlist' />
      <IconLink to='/favorites' icon={<FaStar />} label='Favorites' />
      <IconLink to='/signout' icon={<FaUserAltSlash />} label='Signout' />
    </NavbarUI>
  );
}
