import React from 'react';
import { Helmet } from 'react-helmet-async';
import me from '../../../images/myIMG.jpg';

const Portfolio = () => {
    return (
      <div>
        <Helmet>
          <title>Portfolio - AutoParts</title>
        </Helmet>
        <div class=" bg-base-200 min-h-[80vh]">
          <div class=" md:flex lg:flex-row-reverse">
            <div class="avatar md:w-1/2 flex justify-center items-center">
              <div class="w-60 rounded-full">
                <img src={me} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center md:w-1/2 px-10 mt-10">
              <div>
                <h1 class="text-3xl font-bold">Saddam Hossain</h1>
                <p className="text-2xl font-bold py-1">Web Developer</p>
                <p className="text-xl font-semibold">
                  Email:contact.saddamhosan@gmail.com
                </p>
                <p className="text-xl font-semibold">
                  Education:Vocational Completed -2014
                </p>
                <p className="text-xl font-semibold">
                  Technologies:React, Tailwind CSS, React Router, React Hook
                  Form, Firebase Authentication, Nodejs, Express Js, MongoDB,
                  Heroku, Firebase Hosting, stripe, payment Gateway, React
                  Bootstrap, React Spinners, Firebase, Netlify.
                </p>
                <p className="text-xl font-semibold ">
                  My practice Project:
                  <br />-{" "}
                  <a
                    className="text-blue-500"
                    target={"_blank"}
                    href="https://automobile-d99a2.web.app/"
                    rel="noreferrer"
                  >
                    AutoParts
                  </a>
                  <br />-{" "}
                  <a
                    className="text-blue-500"
                    target={"_blank"}
                    href="https://electronics-warehouse-970bd.web.app/"
                    rel="noreferrer"
                  >
                    Electronics Warehouse
                  </a>
                  <br />-{" "}
                  <a
                    className="text-blue-500"
                    target={"_blank"}
                    href="https://tourist-guide-ae9d0.web.app/"
                    rel="noreferrer"
                  >
                    Tourist Guide
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;