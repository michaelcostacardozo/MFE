import css from "styled-jsx/css";

import { margins, breakpoints, variables } from "@/constants/styles";

export default css.global`
  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }

  @keyframes react-loading-skeleton {
    100% {
      transform: translateX(100%);
    }
  }

  .swiper-slide {
    display: flex;
  }

  .swiper-pagination-bullet {
    background: ${variables.gray} !important;
    border: none !important;
    width: 2.5rem !important;
    height: 0.25rem !important;
    border-radius: 0 !important;
    margin-right: 1rem !important;
    margin-left: 0 !important;
  }

  .swiper-pagination-bullet-active {
    background: ${variables.primary} !important;
  }

  .swiper-pagination {
    position: initial !important;
    display: flex !important;
    justify-content: center !important;
    margin-top: 1rem !important;
    margin-bottom: 2.5rem !important;
    background: transparent !important;
    transition: background 0.5s !important;
  }

  .react-loading-skeleton {
    --base-color: #ebebeb;
    --highlight-color: #f5f5f5;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block;

    background-color: var(--base-color);

    width: 100%;
    border-radius: 0.25rem;
    display: inline-flex;
    line-height: 1;

    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .react-loading-skeleton::after {
    content: " ";
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      var(--base-color),
      var(--highlight-color),
      var(--base-color)
    );
    transform: translateX(-100%);

    animation-name: react-loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .container,
  .container-fluid {
    margin-left: auto;
    margin-right: auto;
    padding-left: ${margins.mobile}px;
    padding-right: ${margins.mobile}px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}px) {
    .container,
    .container-fluid {
      padding-left: ${margins.desktop}px;
      padding-right: ${margins.desktop}px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1334px;
    }
  }

  @media (min-width: 1600px) {
    .container {
      max-width: 1366px;
    }
  }

  *:where(
      :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
    ) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input,
  textarea {
    -webkit-user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* remove default dot (•) sign */
  ::marker {
    content: initial;
  }

  /* fix the feature of 'hidden' attribute.
  display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
  - fix for the content editable attribute will work properly.
  - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;
  }

  .h-header__search-prefetch {
    visibility: hidden;
  }
`;
