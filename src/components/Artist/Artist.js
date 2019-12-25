import React from "react";
import "./Artist.scss";
import Artwork from "../Artwork/Artwork";

function Artist({ data }) {
  return (
    <div className="artworks">
      <h4>{data.name}</h4>
      <div className="row artworks">
          {data.artworks.map((artwork, i) => {
            console.log(artwork)
            return (
              <Artwork className="col-6" data={artwork}></Artwork>
            )
          })}
        </div>
      {/* <Artwork name={name} link={"/artwork/" + id} /> */}
    </div>
  );
}

export default Artist;
