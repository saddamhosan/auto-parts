import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import Part from "./Part";

const Parts = () => {
  const {
    isLoading,
    error,
    data: parts,
  } = useQuery("parts", () =>
    fetch("https://pacific-hamlet-76531.herokuapp.com/parts").then((res) => res.json())
  );
  if (isLoading) return <Loading/>;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mx-10 my-10 font-serif">
      <h1 className="text-center text-2xl text-blue-600 font-bold">Parts</h1>
      <div className="md:grid grid-cols-3 gap-6">
          {
          parts.map(part=><Part key={part._id} part={part}/>)
          }
      </div>
    </div>
  );
};

export default Parts;
