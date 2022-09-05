import axios from "axios";
import React, { useState, useEffect } from "react";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => setMovies(response.data.results));
  }, [fetchUrl]);
  console.log(movies);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div id={"slider"}>
        {movies.map((item, id) => (
          <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Row;
