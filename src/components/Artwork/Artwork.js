import React from "react";
import "./Artwork.scss";

function Artwork({ data }) {
  console.log(data);
  let imgString = `/images/${data.image}`;
  let url = `${process.env.PUBLIC_URL}/images/${data.image}`;
  return (
    <div className="col-lg-6 col-sm-12 artwork">
      <a href={url}>
        <img src={imgString} alt={data.title} height="auto" width="100%" />
      </a>
      <h6>{data.title}</h6>
      <i>
        {data.medium}
      </i>
      <p>
        {data.price === 'SOLD' ? 'SOLD' : '$' + data.price}
      </p>
      <hr/>
    </div>
  );
}

export default Artwork;
