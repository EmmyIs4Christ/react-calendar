import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h2>{params.detail}</h2>
      {/* <p>{params.date}</p> */}
    </div>
  );
};

export default Detail;
