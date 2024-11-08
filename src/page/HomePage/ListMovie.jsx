import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieService } from "../../service/movieService";
import MultipleRows from "./RSlick/MultipleRows";

export default function ListMovie() {
  // chuyển hướng trang
  let navigate = useNavigate();
  // usf
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    movieService
      .layDanhSachPhim()
      .then((result) => {
        console.log("result", result.data.content);
        setMovieArr(result.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <section classname="text-gray-600 body-font">
        <div classname="container px-5 py-24 mx-auto ">
          <MultipleRows movieArr={movieArr} navigate={navigate} />
        </div>
      </section>
    </div>
  );
}
