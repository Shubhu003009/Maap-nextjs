import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        id="main-content"
        role="main"
        className="min-h-screen site_layout lg:flex text-center"
      >
        <h1> Anaa jara meri 🚗 me baby guurl Najare dekhne lejau 😎</h1>
        {/* <section id="home" aria-labelledby="home-heading">
          <h2 id="home-heading">Welcome to Mountabu Agro Products</h2>
          <p>
            At Mountabu Agro Products, we are dedicated to providing
            high-quality, organic, and sustainable agricultural products. Our
            mission is to support healthy living by offering farm-fresh products
            directly from our fields to your table. Discover the natural
            goodness in every bite!
          </p>
          <Image
            src="/images/farm-fresh.jpg"
            alt="Farm fresh produce"
            width={100}
            height={100}
            loading="lazy"
          />
        </section> */}
      </main>
    </>
  );
}
