"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./carousel.scss";

const ImageCarousel = () => {
  const carouselRef = useRef(null);
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);
  const images = [
    "/images/products_basket.webp",
    "/images/products_rag.jpg",
    "/images/products_seeds.webp",
    "/images/raisens.webp",
    "/images/wallnuts.jpg",
    "/images/cheekPeas.webp",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const firstImg = carousel.querySelectorAll("img")[0];
    const arrowIcons = [arrowLeftRef.current, arrowRightRef.current];

    let isDragStart = false,
      isDragging = false,
      prevPageX,
      prevScrollLeft,
      positionDiff;

    const updateArrowVisibility = () => {
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "grid";
      arrowIcons[1].style.display =
        carousel.scrollLeft === scrollWidth ? "none" : "grid";
    };

    const handleArrowClick = (direction) => {
      const firstImgWidth = firstImg.clientWidth + 14;
      carousel.scrollLeft +=
        direction === "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(updateArrowVisibility, 60);
    };

    const handleKeyboardNavigation = (e) => {
      if (e.key === "ArrowLeft") handleArrowClick("left");
      else if (e.key === "ArrowRight") handleArrowClick("right");
    };

    arrowIcons.forEach((icon, index) => {
      icon.addEventListener("click", () =>
        handleArrowClick(index === 0 ? "left" : "right")
      );
    });

    document.addEventListener("keydown", handleKeyboardNavigation);

    const autoSlide = () => {
      if (
        carousel.scrollLeft <= 0 ||
        carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth
      )
        return;

      positionDiff = Math.abs(positionDiff);
      const firstImgWidth = firstImg.clientWidth + 14;
      const valDifference = firstImgWidth - positionDiff;

      carousel.scrollLeft +=
        carousel.scrollLeft > prevScrollLeft
          ? positionDiff > firstImgWidth / 3
            ? valDifference
            : -positionDiff
          : positionDiff > firstImgWidth / 3
          ? -valDifference
          : positionDiff;
    };

    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      carousel.classList.add("dragging");

      const pageX = e.type === "touchmove" ? e.touches[0].pageX : e.pageX;
      positionDiff = pageX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
      updateArrowVisibility();
    };

    const dragStop = () => {
      isDragStart = false;
      carousel.classList.remove("dragging");
      if (!isDragging) return;
      isDragging = false;
      autoSlide();
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);

    return () => {
      arrowIcons.forEach((icon) => {
        icon.removeEventListener("click", handleArrowClick);
      });
      document.removeEventListener("keydown", handleKeyboardNavigation);
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("touchstart", dragStart);
      document.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("touchmove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("touchend", dragStop);
    };
  }, []);

  return (
    <>
      <div className="flex space-x-4 items-end justify-end">
        <div
          ref={arrowLeftRef}
          className="bg-white w-10 h-10 grid items-center justify-center rounded-xl rotate-90 shrink-0 cursor-pointer"
          role="button"
          id="left"
          aria-label="Scroll left"
          tabIndex="0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-[#333] inline"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          ref={arrowRightRef}
          className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-xl -rotate-90 shrink-0 cursor-pointer"
          role="button"
          aria-label="Scroll right"
          tabIndex="0"
          id="right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-[#fff] inline"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div
        className="wrapper mt-[3rem]"
        role="region"
        aria-label="Image Carousel"
      >
        <div className="carousel" ref={carouselRef} aria-live="polite">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              draggable="false"
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
