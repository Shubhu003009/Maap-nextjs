import ClientButton from "@/components/ClientButton";

const Page = () => {
  return (
    <div className="site_layout">
      <div className="grid place-content-center px-5">
        <form className="w-full max-w-lg" noValidate>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="firstname"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                pattern="[A-Za-z]{1,50}"
                title="First name should only contain letters and be up to 50 characters long."
                required
              />
              <p
                className="text-red-500 text-xs italic hidden"
                id="first-name-error"
              >
                Please enter a valid first name.
              </p>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="lastname"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                pattern="[A-Za-z]{1,50}"
                title="Last name should only contain letters and be up to 50 characters long."
                required
              />
              <p
                className="text-red-500 valid: text-xs italic hidden"
                id="last-name-error"
              >
                Please enter a valid last name.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="email"
                id="email"
                type="email"
                placeholder="you@example.com"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
                title="Please enter a valid email address."
                required
              />
              <p
                className="text-red-500 text-xs italic hidden"
                id="email-error"
              >
                Please enter a valid email address.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                name="message"
                id="message"
                placeholder="Your message here..."
                pattern="^.{10,500}$"
                title="Please enter a message between 10 and 500 characters."
                minLength="10"
                maxLength="500"
                required
              ></textarea>
              <p
                className="text-red-500 text-xs italic hidden"
                id="message-error"
              >
                Please enter a message between 10 and 500 characters.
              </p>
            </div>
          </div>

          <div className="text-center">
            <ClientButton>Send</ClientButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
