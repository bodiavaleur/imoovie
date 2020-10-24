import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonIcon, Link, MenuLink } from "../../atoms";
import { MobileMenuUI } from "./MobileMenuUI";

export function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <ButtonIcon onClick={handleOpenMenu}>
        {openMenu ? <AiOutlineClose /> : <FiMenu />}
      </ButtonIcon>
      {openMenu && (
        <MobileMenuUI>
          <MenuLink to='/search'>Search</MenuLink>
          <MenuLink to='/watchlist'>Watchlis</MenuLink>
          <MenuLink to='/favorites'>Favorites</MenuLink>
          <MenuLink to='/signout'>Signout</MenuLink>
        </MobileMenuUI>
      )}
    </>
  );
}
