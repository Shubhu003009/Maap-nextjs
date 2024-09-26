import Image from "next/image";

const ImageCarousel = () => {
  const images = [
    { src: "/images/products_basket.webp", alt: "product baskets" },
    { src: "/images/products_rag.jpg", alt: "products rag" },
    { src: "/images/raisens.webp", alt: "raisens" },
    { src: "/images/wallnuts.jpg", alt: "wallnuts" },
    { src: "/images/cheekPeas.webp", alt: "cheekpeas" },
    // {
    //   src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    //   alt: "p1",
    // },
    // {
    //   src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    //   alt: "p2",
    // },
    // {
    //   src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    //   alt: "p3",
    // },
    // {
    //   src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    //   alt: "p4",
    // },
    // {
    //   src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    //   alt: "p5",
    // },
    // {
    //   src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    //   alt: "p6",
    // },
  ];

  return (
    <div className="site_structure">
      <div
        className="wrapper mt-[3rem]"
        role="region"
        aria-label="Image Carousel"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-3 items-center justify-items-center gap-5"
          aria-live="polite"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden m-w-[300px] shadow-lg rounded-xl"
            >
              <Image src={img.src} alt={img.alt} width={300} height={300} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
