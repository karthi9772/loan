import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Page = ({ data }) => {
  return (
    <div className="">
      {/* Header Section */}
      <section className="hero relative bg-gradient-to-r from-blue-600 to-teal-400 p-6 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold">{data.hero.heading}</h1>
            <p className="text-2xl mt-4">{data.hero.subheading}</p>
            <button className="mt-6 bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 text-lg">
              Get Loan →
            </button>
          </div>
          <img
            src={data.hero.image}
            alt={data.hero.heading}
            className="mt-6 md:mt-0 w-full md:w-1/2 h-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-8 px-4">
        <div className="md:flex md:items-center md:space-x-4">
          <img
            src={data.services.image}
            alt="Our Services"
            className="w-full md:w-1/2 scale-[60%]"
          />
          <div className="md:w-1/2 mt-6 md:mt-0 mr-8">
            <div className="w-fit">
              <h2 className="text-4xl font-bold ">{data.services.title}</h2>
              <hr className="h-[5px] bg-[#4D4D4D]  rounded-md mt-1" />
            </div>

            <p className="mt-4 text-xl">{data.services.description}</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us py-8 px-4 bg-gray-100">
        <div className="md:flex md:items-center md:space-x-4">
          <div className="md:w-1/2 mx-8">
            <div className="w-fit">
              <h2 className="text-4xl font-bold">{data.whyUs.title}</h2>
              <hr className="h-[5px] bg-[#4D4D4D]  rounded-md mt-2" />
            </div>
            <p className="mt-4 text-xl">{data.whyUs.description}</p>
          </div>
          <img
            src={data.whyUs.image}
            alt="Why Us"
            className="w-full md:w-1/2 scale-[60%]"
          />
        </div>
      </section>

      {/* Benefits & Features Section */}
      <section className="benefits py-8 px-4">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Benefits & Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {data.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] p-4 shadow rounded-lg text-center py-14"
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact py-8 px-4 bg-gradient-to-r text-white  from-blue-600 to-teal-400 max-w-xl md:mx-auto mx-2 rounded-md md:mt-12">
        <h2 className="text-center text-2xl font-bold mb-6">
          {data.contact.formTitle}
        </h2>
        <form className="max-w-lg mx-auto">
          {data.contact.fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
          <div className="flex justify-center mt-10">
            <button className="w-3/4 mx-auto px-4 bg-[#11AAA2] text-white p-2 hover:bg-teal-600 rounded-full font-bold">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* 4 loans Strip */}
      <div
        className="yearBack py-[50px] p-4 px-[30px]
         flex justify-around text-center max-sm:flex-col max-sm:items-center space-x-2 max-sm:p-4 max-sm:space-y-4 bg-gradient-to-r from-blue-500 to-blue-700 md:mt-28 mt-12 text-white"
      >
        <div className="">
          <img src="/personal.png" className="h-[100px]" />
          <p className="text-lg font-bold ">Personal Loan</p>
          {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
        </div>
        <div>
          <img src="business.png" className="h-[100px]" />
          <p className="text-lg font-bold">Business Loan</p>
          {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
        </div>
        <div>
          <img src="morgageloan.png" className="h-[100px]" />
          <p className="text-lg font-bold">Mortgage Loan</p>
          {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
        </div>
        <div>
          <img src="/homeloan.png" className="h-[100px]" />
          <p className="text-lg font-bold">Home Loan</p>
          {/* <p className='text-md font-normal'>Created to provide capital to small businesses. Evaluates business’ actual performance.</p> */}
        </div>
      </div>

      {/* financial problems */}
      <div className="bg-white p-4 px-[30px]  text-black flex justify-between max-sm:p-4 max-sm:flex-col md:py-28 w-[90%] mx-auto">
        <div className="">
          <h1 className="text-3xl font-semibold">
            Ready to solve your financial problem?
          </h1>
          <p className="text-lg font-normal md:w-[70%] md:mt-2">
            It’s free—prequalify without affecting your credit. It’s
            free—prequalify without affecting your credit!
          </p>
        </div>
        <button className="ring-2 ring-[#11AAA2] rounded-[30px] bg-[#11AAA2] flex justify-center text-lg font-normal md:w-fit h-fit mt-[30px] max-sm:w-[50%] text-white py-2 px-4">
          Get Your Loan Now
        </button>
      </div>

      {/* footer */}
      <div className="yearBack p-4 px-[30px] md:py-32 py-[50px] bg-gradient-to-b from-blue-800 to-blue-600 text-white">
        <div className="flex justify-center space-x-6 gap-5 mb-7">
          <FaInstagram size="30" />
          <FaFacebookF size="30" />
          <FaLinkedinIn size="30" />
          <FaXTwitter size="30" />
        </div>
        <p className="text-lg md:font-bold font-thin text-center mt-[20px]">
          Copyright © 2024 Vignesh.All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Page;
