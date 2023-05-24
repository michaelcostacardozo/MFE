import css from 'styled-jsx/css'

import { variables, textStyles } from '@/constants/styles'

export default css`
.h-header__logo {
  line-height: ${textStyles.principal.h3.medium.lineHeight}px;
  font-size: ${textStyles.principal.h3.medium.fontSize}px;
  font-weight: ${textStyles.principal.h3.medium.fontWeight};
  color: ${variables.white};
}

.h-header__logo::first-letter {
  color: ${variables.primary};
}
`
