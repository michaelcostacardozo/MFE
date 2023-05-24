import css from 'styled-jsx/css'

import { variables, textStyles, breakpoints } from '@/constants/styles'

export default css`
.h-header__menu-content {
  line-height: ${textStyles.paragraphs.p2.regular.lineHeight}px;
  font-size: ${textStyles.paragraphs.p2.regular.fontSize}px;
  font-weight: ${textStyles.paragraphs.p2.regular.fontWeight};
  color: ${variables.white};
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: flex-end;
}

.h-header__menu {
  display: flex;
  gap: 1.8rem;
  align-items: center;
}

.h-header__menu-links {
  gap: 1.8rem;
}

@media (min-width: ${breakpoints.md}px) {
  .h-header__menu-link {
    padding-bottom: 0.9rem;
    border-bottom: 2px solid transparent;
  }

  .h-header__menu-link:hover {
    border-bottom: 2px solid ${variables.primary};
  }
}
`
