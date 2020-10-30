import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonIcon, MenuLink } from "../../atoms";
import { MobileMenuUI } from "./MobileMenuUI";

export function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useSelector((state) => ({ user: state.user }));

  console.log("user :>> ", user);
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <ButtonIcon onClick={handleOpenMenu}>
        {openMenu ? <AiOutlineClose /> : <FiMenu />}
      </ButtonIcon>
      {openMenu && (
        <MobileMenuUI>
          <MenuLink to='/search'>Search</MenuLink>
          {user ? (
            <>
              <MenuLink to='/watchlist'>Watchlist</MenuLink>
              <MenuLink to='/favorites'>Favorites</MenuLink>
              <MenuLink to='/signout'>Signout</MenuLink>
            </>
          ) : (
            <>
              <MenuLink to='/signup'>Sign up</MenuLink>
              <MenuLink to='/signin'>Sign in</MenuLink>
            </>
          )}
        </MobileMenuUI>
      )}
    </>
  );
}
