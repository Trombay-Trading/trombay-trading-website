'use client';

import Image from 'next/image';
import { useState } from 'react';

const FALLBACK = '/img/featured_1.png';

interface CoverImageProps {
  src?: string;
  alt: string;
  sizes: string;
  className?: string;
}

export default function CoverImage({ src, alt, sizes, className = 'object-cover' }: CoverImageProps) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK);

  return (
    <Image
      src={imgSrc}
      fill
      className={className}
      alt={alt}
      sizes={sizes}
      onError={() => setImgSrc(FALLBACK)}
    />
  );
}
