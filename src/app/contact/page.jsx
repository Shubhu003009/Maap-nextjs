"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const contactUsSchema = z.object({
    email: z.string().trim().min(1, "Required").email(),
    firstname: z
      .string()
      .trim()
      .min(1, "Required")
      .min(2, "Alteast 2 characters")
      .max(15, "limit 15 characters")
      .regex(
        new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z]+$/),
        "Name should contain only alphabets"
      ),
    lastname: z
      .string()
      .trim()
      .min(1, "Required")
      .min(2, "Alteast 2 characters")
      .max(15, "limit 15 characters")
      .regex(
        new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z]+$/),
        "Name should contain only alphabets"
      ),
    message: z
      .string()
      .trim()
      .min(1, "Required")
      .min(5, "Alteast 5 characters")
      .max(150, "limit 200 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <main className="site_structure" id="main-content" role="main">
      <section className="min-h-svh max-w-lg mx-auto">
        <h1 className="uppercase text-3xl mb-6">Contact Us</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:shadow-shadow_sm md:p-8 md:rounded-md bg-primary_sky"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-primary_dark text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                {...register("firstname")}
                type="text"
                className="appearance-none block w-full text-gray-700 border border-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
              />
              {errors.firstname && (
                <span className="text-red-500 text-xs">
                  {errors.firstname.message}
                </span>
              )}
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-primary_dark text-xs font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                {...register("lastname")}
                type="text"
                className="appearance-none block w-full text-gray-700 border border-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="lastname"
              />
              {errors.lastname && (
                <span className="text-red-500 text-xs">
                  {errors.lastname.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-primary_dark text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                {...register("email")}
                type="email"
                className="appearance-none block w-full text-gray-700 border border-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-primary_dark text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                className="block w-full text-gray-700 border border-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-36 resize-none"
                id="message"
                placeholder="type your query..."
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              className="rounded-lg bg-[linear-gradient(to_right,_#828dff,_#7cddff)]  py-3 px-4 md:py-4 md:px-7 text-sm font-bold uppercase text-white shadow-sm shadow-sky-600/20 transition-all hover:shadow-md hover:shadow-sky-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              disabled={isSubmitting}
            >
              Send Form
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Page;
