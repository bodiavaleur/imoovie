import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonIcon, MenuItem } from "../../atoms";
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
          <MenuItem>Test</MenuItem>
          <MenuItem>Test</MenuItem>
          <MenuItem>Test</MenuItem>
          <MenuItem>Test</MenuItem>
          <MenuItem>Test</MenuItem>
        </MobileMenuUI>
      )}
    </>
  );
}