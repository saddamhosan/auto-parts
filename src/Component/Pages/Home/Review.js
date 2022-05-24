import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useQuery } from 'react-query';
import Rating from "react-rating";

const Review = () => {
    const {
      isLoading,
      error,
      data: reviews,
    } = useQuery("reviews", () =>
      fetch("https://pacific-hamlet-76531.herokuapp.com/review").then((res) => res.json())
    );
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    
    return (
      <div className="m-10">
        <h1 className="text-center text-3xl font-bold my-4 text-blue-500">
          Reviews
        </h1>
        <div className="md:grid grid-cols-3 gap-6 ">
          {reviews.slice(-3).map((review) => (
            <div
              className="shadow-xl p-3 rounded-xl border text-center"
              key={review._id}
            >
              <p className=" text-xl font-bold my-4 text-blue-500">
                {review.name}
              </p>
              <p>{review.description}</p>
              <p className='mt-4'>
                <Rating
                  readonly
                  initialRating={review.ratting}
                  emptySymbol={<AiOutlineStar color="orange" size={"20px"} />}
                  fullSymbol={<AiFillStar color="orange" size={"20px"} />}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Review;