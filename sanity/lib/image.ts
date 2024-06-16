// # Sanity Image #

import type { Image } from 'sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '../config/env';

const ImageBuilder = createImageUrlBuilder({
  projectId,
  dataset
});

const urlForImage = (source: Image) => {
  return ImageBuilder?.image(source).auto('format').fit('max').url()
}

export default urlForImage;
