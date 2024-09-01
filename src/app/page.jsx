export default function Home() {
  return (
    <>
      <main className="site_layout" id="main-content" role="main">
        <section
          className="md:flex gap-24 text-center sm:text-left"
          id="home"
          aria-labelledby="home-heading"
        >
          <div>
            <h2
              id="home-heading"
              className="sm:text-5xl text-sky-400 text-4xl pb-5 md:pb-10"
            >
              Mountabu Agro Products
            </h2>
            <p className="mb-10 text-sm md:text-base">
              At <span className="font-bold">Mountabu Agro Products</span>, we
              are dedicated to providing high-quality, organic, and sustainable
              agricultural products. Our mission is to support healthy living by
              offering farm-fresh products directly from our fields to your
              table. Discover the natural goodness in every bite!
            </p>
          </div>
          <img
            className="rounded-lg"
            src="/OPTIMIZED/products_rag.jpg"
            alt="raisens"
            width={400}
            height={400}
            loading="eager"
          />
        </section>
      </main>
    </>
  );
}
