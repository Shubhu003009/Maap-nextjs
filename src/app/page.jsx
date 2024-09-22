import Button from "@/components/Button";
import ImageCarosel from "@/components/Carosel/ImageCarosel";

export default function Page() {
  return (
    <>
      <main className="" id="main-content" role="main">
        <section
          className="min-h-svh sm:min-h-max rounded-none relative site_padding_block site_padding_inline"
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

        <section className="bg-tertiary_light transition-all duration-200">
          <ImageCarosel />
        </section>

        <section id="testimonials" className="site_structure">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <h2 className="text-color_front text-3xl font-bold">
                What our happy client say
              </h2>
              <p className=" text-color_front mt-4 leading-relaxed">
                Veniam proident aute magna anim excepteur et ex consectetur
                velit ullamco veniam minim aute sit. Elit occaecat officia et
                laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12 [&>div]:transition-[outline] [&>div]:duration-200 text-color_front">
            <div className="p-6 rounded-lg outline outline-1 outline-outline_zinc_200 shadow-md hover:shadow-lg">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-extrabold">John Doe</h4>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Founder of Rubik
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="leading-relaxed text-para">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg outline outline-1 outline-outline_zinc_200 shadow-md hover:shadow-lg">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-extrabold">Mark Adair</h4>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Founder of Alpha
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="leading-relaxed text-para">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg outline outline-1 outline-outline_zinc_200 shadow-md hover:shadow-lg">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/profile_4.webp"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-extrabold">Simon Konecki</h4>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Founder of Labar
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="leading-relaxed text-para">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
