import css from 'styled-jsx/css'

import { variables, breakpoints, headerHeight, textStyles } from '@/constants/styles'

export default css`
.h-header__ {
  display: flex;
  flex-direction: column;
}

.h-header {
  height: ${headerHeight.mobile}px;
  background: linear-gradient(180deg, ${variables.classic.black}cc, rgba(255, 255, 255, 0));
  backface-visibility: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  padding: 0;
  transition: all .2s ease-out;
}

.h-header.h-header__compressed {
  position: fixed !important;
}

.h-header.h-header__compressed,
.h-header:hover,
.h-header.h-header__dropdown-open {
  background-color: ${variables.classic.black}cc;
  backdrop-filter: blur(12.5px);
}

.h-header.h-header__sticky {
  position: sticky;
  background: unset;
  background-color: ${variables.black};
}

.h-header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.h-header__mobile-content {
  display: flex;
  color: ${variables.white};
  gap: 25px;
}

.h-header__desktop-content {
  display: none;
  flex: 1;
}

.h-header__search-input {
  width: 30rem;
  border: 1px solid white;
  padding: .5rem;
  border-radius: 1.5rem;
  color: white;
  text-indent: 2rem;
  z-index: 100;
  font-weight: ${textStyles.paragraphs.p2.regular.fontWeight};
  font-size: ${textStyles.paragraphs.p2.regular.fontSize}px;
  line-height: ${textStyles.paragraphs.p2.regular.lineHeight}px;
}

.h-header__cart-number {
  background: ${variables.primary};
  border-radius: 50%;
  bottom: 2rem;
  color: #fff;
  flex-direction: column;
  display: flex;
  font-size: .6rem;
  flex-wrap: nowrap;
  height: 1rem;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  right: 3.7rem;
  text-align: center;
  width: 1rem;
}

.h-header__desktop-icons {
  justify-content: flex-end;
  color: ${variables.white};
  position: relative;
}

.h-header__user-profile-name,
.h-header__login-text {
  font-weight: ${textStyles.paragraphs.p2.bold.fontWeight};
  font-size: ${textStyles.paragraphs.p2.bold.fontSize}px;
  line-height: ${textStyles.paragraphs.p2.bold.lineHeight}px;
  color: ${variables.white};
  cursor: pointer
}

@media (min-width: ${breakpoints.lg}px) {
  .h-header {
    justify-content: unset;
    height: ${headerHeight.desktop}px;
  }

  .h-header__container {
    padding-top: 2rem;
    align-items: flex-start;
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;
  }

  .h-header__mobile-content {
    display: none;
  }

  .h-header__desktop-content {
    display: flex;
    gap: 2rem;
  }

  .h-header__cart-number {
    bottom: 1.1rem;
    right: -0.4rem;
  }
  .h-header__login {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .h-header__desktop-search > svg {
    position: absolute;
  }

  .h-header__input-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
  }
}
`
