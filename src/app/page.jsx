import Button from "@/components/Button";
import ImageCarosel from "@/components/Carosel/ImageCarosel";

export default function Page() {
  return (
    <>
      <main className="" id="main-content" role="main">
        <section
          className="rounded-none relative site_padding_block site_padding_inline"
          // className="rounded-none relative min-h-svh overflow-hidden content-start items-center grid grid-cols-4 md:grid-cols-custom_md site_lg:grid-cols-custom_lg gap-y-8 gap-x-5 md:gap-x-7"
          id="hero"
          aria-labelledby="hero-heading"
        >
          <div className="flex justify-center md:flex-nowrap flex-wrap items-center gap-y-8 gap-x-5 md:gap-x-7">
            <div className="col-start-1 -col-end-2 md:col-start-2 md:col-end-7 site_lg:col-start-3 site_lg:col-end-9 space-y-5 md:space-y-8">
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
              className="max-w-60 md:max-w-64 lg:max-w-xs col-start-2 -col-end-3 md:inline-block md:col-start-7 -md:col-end-1 site_lg:col-start-9 site_lg:-col-end-2"
              src="/images/girl_shopping.webp"
              alt="product rag"
              width={320}
              height={432}
            />
          </div>
        </section>

        <section className="site_layout site_padding_inline site_padding_block">
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
            <div className="flex space-x-4 items-end justify-end">
              <div className="bg-white w-10 h-10 grid items-center justify-center rounded-xl rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#333] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <div className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-xl -rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#fff] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-white shadow-md  hover:shadow-lg  transition-all">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-black  font-extrabold">John Doe</h4>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Founder of Rubik
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-black  leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md  hover:shadow-lg  transition-all">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-black  font-extrabold">Mark Adair</h4>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Founder of Alpha
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-black  leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md  hover:shadow-lg  transition-all">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/profile_4.webp"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-black  font-extrabold">Simon Konecki</h4>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Founder of Labar
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-black  leading-relaxed">
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
