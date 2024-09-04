import Button from "@/components/Button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="site_padding" id="main-content" role="main">
        <section
          className="overflow-hidden items-center hero grid grid-cols-custom md:grid-cols-custom_md xl:grid-cols-custom_lg gap-y-16 gap-x-5 md:gap-x-7 content-start"
          id="home"
          aria-labelledby="home-heading"
        >
          <div className="col-start-2 -col-end-2 md:col-end-5 xl:col-end-8 space-y-6 md:space-y-8">
            <h1
              className="text-sky-400/90 font-sans ff_h1 font-extrabold"
              id="home-heading"
            >
              Mountabu Agro Products
            </h1>
            <div className="md:text-lg ff_para text-para">
              <p>
                At Mountabu Agro Products We are dedicated to providing&nbsp;
                <em className="font-semibold">farm-fresh</em>
                &nbsp;, organic, and sustainable agricultural foods.
              </p>
            </div>
            <Link className="inline-block" href="/contact-us">
              <Button>Contact Now</Button>
            </Link>
          </div>

          {/* <picture className="col-start-2 -col-end-1 md:col-start-5 -md:col-end-1 xl:col-start-8 xl:-col-end-2 rounded-s-[20px] lg:rounded-[20px]">
            <source
              media="(width < 768px)"
              srcSet="/OPTIMIZED/products_basket.webp"
              type="image/svg+xml"
            />
          </picture> */}

          <img
            className="col-start-2 -col-end-1 md:col-start-5 -md:col-end-1 xl:col-start-8 xl:-col-end-2 rounded-s-[20px] lg:rounded-[20px]"
            src="/OPTIMIZED/products_rag.jpg"
            alt="product rag"
            width={1920}
            height={1639}
          />

          <div className="orange_block bg-primary_sky relative left-24 -top-28 hidden xl:block xl:-col-start-2 xl:-col-end-1 xl:h-[240px] rounded-s-[20px]"></div>
        </section>
      </main>
    </>
  );
}
