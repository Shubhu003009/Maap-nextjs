export default function Home() {
  return (
    <>
      <main className="site_layout" id="main-content" role="main">
        <section
          className="grid sm:grid-cols-2 gap-7 sm:gap-16"
          id="home"
          aria-labelledby="home-heading"
        >
          <div className="">
            <h1
              id="home-heading"
              className="sm:text-5xl text-sky-400 text-4xl pb-2 sm:pb-5"
            >
              Mountabu Agro Products
            </h1>
            <div>
              <p>
                At <span className="font-semibold">Mountabu Agro Products</span>
                ,
              </p>
              <p className="text-md sm:text-base">
                We are dedicated to providing high-quality, organic, and
                sustainable agricultural products. Our mission is to support
                healthy living by offering farm-fresh products directly from our
                fields to your table. Discover the natural goodness in every
                bite!
              </p>
            </div>
          </div>
          <img
            className="rounded-lg"
            src="/OPTIMIZED/products_rag.jpg"
            alt="product rag"
            width={400}
            height={400}
            loading="eager"
          />
        </section>
      </main>
    </>
  );
}
