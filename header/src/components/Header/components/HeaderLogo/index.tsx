import React from "react";

import Image from "next/image";

import { imageLoader } from "@/utils/media";

import { HeaderLogoProps } from "./types";

import styles from "./styles";

const HeaderLogo: React.FC<HeaderLogoProps> = ({ title, logo }) => {
  return (
    <>
      <div className="h-header__logo">
        {logo?.url ? (
          <Image
            src={logo?.url}
            alt={logo?.alternativeText}
            loader={imageLoader}
            width={logo?.width}
            height={logo?.height}
          />
        ) : (
          title
        )}
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default HeaderLogo;
