import Button from "@/components/Button";

export default function Page() {
  return (
    <>
      <main className="site_padding" id="main-content" role="main">
        <section
          className="overflow-hidden min-h-svh items-center grid grid-cols-custom md:grid-cols-custom_md xl:grid-cols-custom_lg gap-y-8 gap-x-5 md:gap-x-7 content-start"
          id="home"
          aria-labelledby="home-heading"
        >
          <div className="col-start-2 -col-end-2 md:col-end-5 xl:col-end-8 space-y-5 md:space-y-8">
            <h1 className="font-lora ff_h1" id="home-heading">
              Mountabu Agro Products
            </h1>
            <div className="md:text-lg ff_para text-para">
              <p>
                At mountabu agro products, We are dedicated to providing
                farm-fresh, organic, and sustainable agricultural foods.
              </p>
            </div>
            <Button href={"/contact-us"}>Contact Now</Button>
          </div>

          <img
            className="col-start-2 -col-end-1 md:col-start-5 -md:col-end-1 xl:col-start-8 xl:-col-end-2 rounded-s-[20px] lg:rounded-[20px]"
            src="/images/products_rag.jpg"
            alt="product rag"
            width={1920}
            height={1639}
          />

          <div className="orange_block bg-[linear-gradient(to_right,_#828dff,_#7cddff)] relative left-24 -top-28 hidden xl:block xl:-col-start-2 xl:-col-end-1 xl:h-[240px] rounded-s-[20px]"></div>
        </section>
      </main>
    </>
  );
}
