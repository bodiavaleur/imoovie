import React from "react";
import { Logo } from "../../atoms";
import { MobileMenu, Navbar } from "../../molecules/";
import { HeaderUI } from "./HeaderUI";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../../ui/breakpoints";

const { mobile, tablet } = breakpoints;

export function Header() {
  const isMobile = useMediaQuery({ query: `(${mobile})` });
  const isTablet = useMediaQuery({ query: `(${tablet})` });

  return (
    <HeaderUI>
      <Logo />

      {isMobile || isTablet ? <MobileMenu /> : <Navbar />}
    </HeaderUI>
  );
}
