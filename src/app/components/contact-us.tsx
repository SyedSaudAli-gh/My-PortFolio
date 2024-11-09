import React from "react";

function ContactUs() {
  return (
   
     <section className="text-black body-font" id="Contact-us">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base underline">
       feel free to Contact
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          
            <label htmlFor="name" className="leading-7 text-lg text-black">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Full Name"
              className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          
        </div>
        <div className="p-2 w-1/2">
         
            <label htmlFor="email" className="leading-7 text-lg text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc123@gmail.com"
              className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        
        </div>
        <div className="p-2 w-full">
         
            <label htmlFor="email" className="leading-7 text-lg text-black">
              Subject:
            </label>
            <input
              type="email"
              id="email"
              name="text"
              placeholder="Enter Your Subject Topic"
              className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        
        </div>
        <div className="p-2 w-full">
         
            <label
              htmlFor="message"
              className="leading-7 text-lg text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Please Enter Your Message"
              className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto rounded text-center text-[20px] px-5 py-2 text-black bg-[#faa000] hover:bg-[#fc4440] hover:text-white hover:border-2 border-solid border-black duration-500">
           Send Message
          </button>
        </div>
   
      </div>
    </div>
  </div>
</section>

  
  );
}

export default ContactUs;
