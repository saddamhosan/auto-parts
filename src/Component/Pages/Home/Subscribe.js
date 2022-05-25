import React from "react";
import subBanner from "../../../images/subscribe.jpg";

const Subscribe = () => {
  return (
    <div className="h-[60vh] mt-10 flex justify-center items-center">
      <img
        className="w-full h-[60vh] absolute -z-50 opacity-50"
        src={subBanner}
        alt=""
      />

      <div className="font-serif">
        <h1 className="text-center text-4xl font-bold my-3">
          <span className="text-cyan-400">#4</span> SUBSCRIBE
        </h1>
        <p className="text-center text-2xl font-bold my-3">
          TO GET <span className="text-cyan-400">WEEKLY</span> OFFER
        </p>

        <input
          className="text-2xl p-2 w-10/12 mx-auto block md:w-2/3 md:inline "
          type="email"
          placeholder="Your email address"
          required
        />
        <button className="mt-4 block mx-auto md:inline text-2xl p-2 bg-cyan-400 font-semibold">
          subscribe
        </button>
        <p className="text-center text-lg font-bold my-3">
          *YOU CAN UNSUBSCRIBE ANYTIME
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
