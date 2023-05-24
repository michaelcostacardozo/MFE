export const imageLoader = ({ src, width }) => `${src}?width=${width}`;

export const commerceImageLoader = ({ src, width }) =>
  `${process.env.NEXT_PUBLIC_COMPOSER_URL}/api/images?source=${src}`;
