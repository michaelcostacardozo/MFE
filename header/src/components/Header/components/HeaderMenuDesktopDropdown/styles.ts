import css from "styled-jsx/css";

import {
  variables,
  textStyles,
  headerHeight,
  margins,
} from "@/constants/styles";

export default css`
  .h-header__menu-dropdown {
    align-items: stretch;
    justify-content: space-between;
    background-color: ${variables.classic.black}cc;
    backdrop-filter: blur(12.5px);
    backface-visibility: hidden;
    display: flex;
    padding: 1rem 0 2.3rem 0;
    width: 100%;
    z-index: 100;
    color: ${variables.white};
    position: fixed;
    left: 0;
    right: 0;
    top: ${headerHeight.desktop}px;
    gap: 24rem;
    justify-content: center;
    height: auto;
  }

  .h-header__menu-dropdown--sticky {
    position: absolute;
  }

  .h-header__menu-dropdown-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    align-content: space-between;
  }

  .h-header__menu-item {
    max-height: fit-content;
  }

  .h-header__menu-sub-items-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 25rem;
    align-content: space-between;
    align-items: stretch;
  }

  .h-header__menu-item-title {
    line-height: ${textStyles.paragraphs.p1.bold.lineHeight}px;
    font-size: ${textStyles.paragraphs.p1.bold.fontSize}px;
    font-weight: ${textStyles.paragraphs.p1.bold.fontWeight};
    padding-bottom: 1.3rem;
    padding-top: 1.3rem;
  }

  .h-header__menu-sub-item {
    line-height: ${textStyles.paragraphs.p2.regular.lineHeight}px;
    font-size: ${textStyles.paragraphs.p2.regular.fontSize}px;
    font-weight: ${textStyles.paragraphs.p2.regular.fontWeight};
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-right: 2rem;
  }

  .h-header__menu-sub-items {
    width: max-content;
  }
`;
