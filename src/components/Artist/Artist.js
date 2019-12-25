import React from "react";
import "./Artist.scss";
import Artwork from "../Artwork/Artwork";

function Artist({data}) {
  console.log(data)
  return (
    <div className="col-12 artist">
      <h4>{data.name}</h4>
      <div className="row artworks">
          {data.artworks.map((artwork, i) => {
            return (
              <Artwork className="col-6" data={artwork} key={i}></Artwork>
            )
          })}
        </div>
      {/* <Artwork name={name} link={"/artwork/" + id} /> */}
    </div>
  );
}

export default Artist;
