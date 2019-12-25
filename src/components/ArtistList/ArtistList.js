import React from "react";
import Artist from "../Artist/Artist";

function ArtistList({match, data}) {
console.log('call artistList')
  console.log(match, data)
  return (
    <div className="artist-list">
      <div className="row artists">
          {data.map((artist, i) => {
            return (
              <Artist className="col-6 artist-listed" data={artist} key={i}></Artist>
            )
          })}
        </div>
    </div>
  );
}

export default ArtistList;
