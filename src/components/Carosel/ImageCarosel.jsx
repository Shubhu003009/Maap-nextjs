"use client";

import "./emblacss.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  { src: "/images/products_basket.webp", alt: "1" },
  { src: "/images/products_rag.jpg", alt: "2" },
  { src: "/images/products_seeds.webp", alt: "3" },
  { src: "/images/raisens.webp", alt: "4" },
  { src: "/images/wallnuts.jpg", alt: "5" },
  { src: "/images/cheekPeas.webp", alt: "6" },
];

const ImageCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="site_structure">
      <div
        ref={emblaRef}
        className="mt-[3rem] embla"
        role="region"
        aria-label="Image Carousel"
      >
        <div
          className="embla__container grid grid-cols-1 sm:grid-cols-3 items-center justify-items-center gap-5"
          aria-live="polite"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="embla__slide h-[300px] max-w-[300px] overflow-hidden shadow-lg rounded-xl"
            >
              <Image
                className="w-full bg-cover"
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
