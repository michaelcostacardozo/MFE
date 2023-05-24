import React from "react";

import HeaderItemMenuDesktop from "@/components/Header/components/HeaderItemMenuDesktop";

import { HeaderMenuDesktopCategoriesProps } from "./types";

import styles from "./styles";

const HeaderMenuDesktopCategories: React.FC<
  HeaderMenuDesktopCategoriesProps
> = ({ menuCategories, headerLinks, activeCategory, setActiveCategory }) => {
  return (
    <>
      <div className="h-header__menu-content">
        <ul className="h-header__menu h-header__menu-categories">
          {menuCategories &&
            menuCategories?.map((category) => (
              <HeaderItemMenuDesktop
                key={category.name}
                category={category}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
        </ul>

        <ul className="h-header__menu h-header__menu-links">
          {headerLinks?.map((link) => (
            <HeaderItemMenuDesktop key={link.id} link={link} isLink />
          ))}
        </ul>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default HeaderMenuDesktopCategories;
