import React from "react";
import { useSelector } from "react-redux";
import { IconLink } from "../../atoms";
import { NavbarUI } from "./NavbarUI";
import {
  FaClock,
  FaSearch,
  FaStar,
  FaUserAlt,
  FaUserAltSlash,
} from "react-icons/fa";

export function Navbar() {
  const { user } = useSelector((state) => ({ user: state.user }));
  return (
    <NavbarUI>
      <IconLink to='/search' icon={<FaSearch />} label='Search' />
      {user ? (
        <>
          <IconLink to='/watchlist' icon={<FaClock />} label='Watchlist' />
          <IconLink to='/favorites' icon={<FaStar />} label='Favorites' />
          <IconLink to='/signout' icon={<FaUserAltSlash />} label='Signout' />
        </>
      ) : (
        <>
          <IconLink to='/signin' icon={<FaUserAlt />} label='Sign in' />
        </>
      )}
    </NavbarUI>
  );
}
