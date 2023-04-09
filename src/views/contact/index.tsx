import React from "react";

const Contact = () => {
  return (
    <div className="flex my-28 items-center justify-start bg-white">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-6xl font-semibold">Contact us</h1>
        {/* <h1 className="text-4xl font-medium">Contact us</h1> */}
        <p className="mt-3">
          Email us at support@panaverse.co or message us here:
        </p>
        <form action="#" className="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-slate-500 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-slate-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-slate-600 peer-focus:dark:text-slate-500">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-slate-500 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-slate-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-slate-600 peer-focus:dark:text-slate-500">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={5}
                // rows="5"
                className="peer block w-full appearance-none border-0 border-b border-slate-500 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-slate-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-slate-600 peer-focus:dark:text-slate-500">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
