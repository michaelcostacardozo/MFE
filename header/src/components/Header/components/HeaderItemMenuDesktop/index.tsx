import React from "react";

import Link from "next/link";

import { HeaderItemMenuDesktopProps } from "./types";

import styles from "./styles";

const HeaderItemMenuDesktop: React.FC<HeaderItemMenuDesktopProps> = ({
  category,
  link,
  isLink,
  setActiveCategory,
}) => {
  if (isLink) {
    if (!link.url) {
      return (
        <>
          <li className="h-header__menu-link" style={{ color: link.fontColor }}>
            {link.text}
          </li>

          <style jsx>{styles}</style>
        </>
      );
    }

    return (
      <>
        <li className="h-header__menu-link" style={{ color: link.fontColor }}>
          <Link href={link.url}>{link.text}</Link>
        </li>

        <style jsx>{styles}</style>
      </>
    );
  }

  return (
    <>
      <li
        className="h-header__menu-link"
        onMouseEnter={() => setActiveCategory(category)}
        onMouseLeave={(event) => {
          const relatedTarget = event.relatedTarget as Element;

          if (!relatedTarget.classList.contains("h-header__menu-dropdown")) {
            setActiveCategory(null);
          }
        }}
      >
        <Link href={category?.url}>{category?.name}</Link>
      </li>

      <style jsx>{styles}</style>
    </>
  );
};

export default HeaderItemMenuDesktop;
