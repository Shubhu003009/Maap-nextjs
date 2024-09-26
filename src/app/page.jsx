import Button from "@/components/Button";
import ImageCarosel from "@/components/Carosel/ImageCarosel";

export default function Page() {
  return (
    <>
      <main className="" id="main-content" role="main">
        <section
          className="sm:min-h-max rounded-none relative site_padding_block site_padding_inline"
          id="hero"
          aria-labelledby="hero-heading"
        >
          <div className="flex justify-center md:flex-nowrap flex-wrap items-center gap-y-8 gap-x-5 md:gap-x-7">
            <div className="space-y-5 md:space-y-8">
              <h1
                className="font-sans font-bold text-color_front ff_h1 max-w-[15ch]"
                id="hero-heading"
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
              className="max-w-60 md:max-w-64 lg:max-w-xs "
              src="/images/girl_shopping.webp"
              alt="product rag"
              width={320}
              height={432}
            />
          </div>
        </section>

        <section className="transition-colors duration-200">
          <ImageCarosel />
        </section>
      </main>
    </>
  );
}
