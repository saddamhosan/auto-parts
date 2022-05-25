import React from 'react';
import invoicing from "../../../images/cat-invoicing.jpg";
import delivery_options from "../../../images/delivery_options.jpg";
import procurement_solutions from '../../../images/procurement_solutions.jpg';
import product_support from "../../../images/product_support.jpg";

const Services = () => {
    return (
        <div>
            <h1 className="text-center text-3xl text-blue-500">
          Connect to a full range of services
        </h1>
        <div className="bg-blue-900 h-[3px] mx-16 my-4"></div>
        <div>
          <p className="text-center text-xl my-5">
            From fast delivery of products available on Singapore Factory to
            procurement solutions, find a range of helpful services to improve
            your productivity, saving you time and money.
          </p>
          <div
            className="md:grid grid-cols-4 gap-4 my-12
          "
          >
            <div className="border hover:border-blue-500 rounded-xl my-4">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={procurement_solutions}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Procurement Solutions
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                Get the support you need to make your procurement process as
                efficient as possible. 
              </p>
            </div>
            
            <div className="border hover:border-blue-500 rounded-xl my-4">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={product_support}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Product Support
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                Never get stuck again. We offer easy access to product support
                resources - online or by phone.
              </p>
            </div>
            <div className="border hover:border-blue-500 rounded-xl my-4">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={delivery_options}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Delivery Options
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                With a range of flexible delivery and collection options we make
                it easy for you to receive your order.
              </p>
            </div>
            <div className="border hover:border-blue-500 rounded-xl my-4">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={invoicing}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Invoicing and Payment
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                Stay in control of your spend & reduce your purchase to pay
                costs with our invoicing and payment services.
              </p>
            </div>
            
          </div>
        </div>
        </div>
    );
};

export default Services;