import React, { Dispatch } from "react";

import Image from "next/image";
import Link from "next/link";

import { imageLoader } from "@/utils/media";

import {
  HeaderMenuDesktopDropdownProps,
  DropdownItemProps,
  MenuItemProps,
} from "./types";

import styles from "./styles";

const DropdownItem: React.FC<DropdownItemProps> = ({
  icon,
  url,
  name,
  setActiveCategory,
}) => {
  return (
    <>
      <li
        className="h-header__menu-sub-item"
        onClick={() => setActiveCategory(null)}
      >
        {icon && icon?.url ? (
          <Image
            src={icon.url}
            alt={icon.alternativeText}
            width={icon.width}
            height={icon.height}
            loader={imageLoader}
          />
        ) : (
          <></>
        )}

        {url ? (
          <Link href={url} onClick={() => setActiveCategory(null)}>
            {name}
          </Link>
        ) : (
          <>{name}</>
        )}
      </li>

      <style jsx>{styles}</style>
    </>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  array,
  name,
  setActiveCategory,
}) => {
  return (
    <>
      <div className="h-header__menu-item">
        <h4 className="h-header__menu-item-title">{name}</h4>

        <div className="h-header__menu-sub-items">
          <ul className="h-header__menu-sub-items-list">
            {array.map((item) => (
              <DropdownItem
                key={item?.id}
                icon={item?.icon}
                name={item?.name}
                url={item?.url}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

const HeaderMenuDesktopDropdown: React.FC<HeaderMenuDesktopDropdownProps> = ({
  activeCategory,
  setActiveCategory,
  stickyHeader,
}) => {
  return (
    <>
      {activeCategory && activeCategory?.subCategories?.length ? (
        <div
          className={`h-header__menu-dropdown ${
            stickyHeader ? "h-header__menu-dropdown--sticky" : ""
          }`}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="h-header__menu-dropdown-container container">
            <MenuItem
              name={activeCategory.name}
              array={activeCategory.subCategories}
              setActiveCategory={setActiveCategory}
            />

            {activeCategory?.subSections?.length ? (
              activeCategory.subSections.map((subSection) => (
                <MenuItem
                  key={subSection.id}
                  name={subSection.title}
                  array={subSection.subSectionItems}
                  setActiveCategory={setActiveCategory}
                />
              ))
            ) : (
              <></>
            )}            
          </div>
        </div>
      ) : (
        <></>
      )}

      <style jsx>{styles}</style>
    </>
  );
};

export default HeaderMenuDesktopDropdown;
