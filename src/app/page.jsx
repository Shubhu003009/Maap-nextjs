import Button from "@/components/Button";

export default function Page() {
  return (
    <>
      <main className="site_padding" id="main-content" role="main">
        <section
          className="relative overflow-hidden content-start items-center grid grid-cols-custom md:grid-cols-custom_md site_lg:grid-cols-custom_lg gap-y-8 gap-x-5 md:gap-x-7"
          id="home"
          aria-labelledby="home-heading"
        >
          <div className="col-start-2 -col-end-1 md:col-start-2 md:col-end-7 site_lg:col-start-3 site_lg:col-end-9 space-y-5 md:space-y-8">
            <h1
              className="font-lora text-color_front ff_h1 max-w-[15ch]"
              id="home-heading"
            >
              Mountabu Agro Products
            </h1>
            <div className="md:text-lg ff_para text-para">
              <p>
                At mountabu agro products, We are dedicated to providing
                farm-fresh, organic, and sustainable agricultural foods.
              </p>
            </div>
            <Button href={"/contact"}>Contact Now</Button>
          </div>

          <img
            className="max-w-60 md:max-w-64 lg:max-w-xs hidden md:inline-block md:col-start-7 -md:col-end-1 site_lg:col-start-9 site_lg:-col-end-2"
            src="/images/girl_shopping.webp"
            alt="product rag"
            // width={1920}
            // height={1639}
          />

          <div className="orange_block bg-[linear-gradient(to_right,_#828dff,_#7cddff)] hidden site_lg:inline-block site_lg:-col-start-2 site_lg:-col-end-1 site_lg:h-[240px] rounded-s-[20px]"></div>
        </section>
      </main>
    </>
  );
}
