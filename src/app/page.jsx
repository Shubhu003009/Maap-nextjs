import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="site_layout" id="main-content" role="main">
        <section
          className="min-h-svh grid grid-cols-custom md:grid-cols-custom_md gap-5 md:gap-7 content-start"
          id="home"
          aria-labelledby="home-heading"
        >
          <div className="hero col-start-2 -col-end-2 md:col-end-5 space-y-4">
            <h1
              className="text-sky-400/90 font-sans md:text-5xl text-4xl font-extrabold"
              id="home-heading"
            >
              Mountabu Agro Products
            </h1>
            <div className="md:text-lg text-base text-para">
              <p>
                At Mountabu Agro Products We are dedicated to providing&nbsp;
                <em className="font-semibold">
                  farm-fresh, organic, and sustainable
                </em>
                &nbsp;agricultural foods.
              </p>
            </div>
            <Link className="inline-block" href="/contact-us">
              <Button>Contact Now</Button>
            </Link>
          </div>
          <img
            className="col-start-2 -col-end-1 md:col-start-5 -md:col-end-1 rounded-s-3xl lg:rounded-3xl"
            src="/OPTIMIZED/products_rag.jpg"
            alt="product rag"
            width={1920}
            height={1639}
            loading="eager"
          />
          {/* <div className="grey_block hidden lg:block md:w-[255px] md:h-[240px] bg-gray-300 rounded-[20px]"></div> */}
        </section>
      </main>
    </>
  );
}
