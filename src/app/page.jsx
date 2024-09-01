// import Image from "next/image";

export default function Home() {
  return (
    <>
      <main id="main-content" role="main" className="site_layout">
        <section id="home" aria-labelledby="home-heading">
          <h2 id="home-heading" className="md:text-5xl text-3xl pb-5 md:pb-10">
            Mountabu Agro Products
          </h2>
          <p className="">
            At Mountabu Agro Products, we are dedicated to providing
            high-quality, organic, and sustainable agricultural products. Our
            mission is to support healthy living by offering farm-fresh products
            directly from our fields to your table. Discover the natural
            goodness in every bite!
          </p>
          {/* <Image
            src="/farm-fresh.jpg"
            alt="Farm fresh produce"
            width={100}
            height={100}
            loading="lazy"
          /> */}
        </section>
      </main>
    </>
  );
}
