import css from 'styled-jsx/css'

import { variables, textStyles, breakpoints, headerHeight } from '@/constants/styles'

export default css`
.h-header__menu-links {
  gap: 1.2rem;
}

@media (min-width: ${breakpoints.md}px) {
  .h-header__menu-link {
    padding-bottom: 0.9rem;
    border-bottom: 0.125rem solid transparent;
  }

  .h-header__menu-link:hover {
    border-bottom: 0.125rem solid ${variables.primary};
  }
}
`
