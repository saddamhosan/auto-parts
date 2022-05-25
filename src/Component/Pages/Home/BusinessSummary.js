import React from 'react';
import { AiOutlineBranches } from "react-icons/ai";
import { GiFlyingFlag } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import bg from '../../../images/bg-busness.jpg';

const BusinessSummary = () => {
    return (
      <div className='relative mt-10 mb-20'>
        <img
          className="w-full h-[50vh] absolute -z-50 opacity-50"
          src={bg}
          alt=""
        />
        <h1 className="text-3xl text-center text-gray-600 font-bold pt-10">
          
          Millions Business Trust Us
        </h1>
        <p className="text-center text-xl  font-bold">
          Try to understand users expectation
        </p>
        <div className="flex justify-evenly text-center my-10">
          <div>
            <p className="text-5xl text-blue-500 flex justify-center">
              <GiFlyingFlag />
            </p>
            <h1 className="text-4xl font-bold my-2">72</h1>
            <p className="text-xl text-blue-500">Countries</p>
          </div>
          <div>
            <p className="text-5xl text-blue-500 flex justify-center">
              <AiOutlineBranches />
            </p>
            <h1 className="text-4xl font-bold my-2">162+</h1>
            <p className="text-xl text-blue-500">Branch</p>
          </div>
          <div>
            <p className="text-5xl text-blue-500 flex justify-center">
              <IoIosPeople />
            </p>
            <h1 className="text-4xl font-bold my-2">7230+</h1>
            <p className="text-xl text-blue-500">Happy Clients</p>
          </div>
          <div>
            <p className="text-5xl text-blue-500 flex justify-center">
              <VscFeedback />
            </p>
            <h1 className="text-4xl font-bold my-2">849+</h1>
            <p className="text-xl text-blue-500">Feedbacks</p>
          </div>
        </div>
      </div>
    );
};

export default BusinessSummary;