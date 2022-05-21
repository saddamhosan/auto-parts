import React from "react";
import { useQuery } from "react-query";
import Part from "./Part";

const Parts = () => {
  const {
    isLoading,
    error,
    data: parts,
  } = useQuery("parts", () =>
    fetch("http://localhost:4000/parts").then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>Parts</h1>
      <div className="grid grid-cols-3 gap-6">
          {
          parts.map(part=><Part key={part._id} part={part}/>)
          }
      </div>
    </div>
  );
};

export default Parts;
