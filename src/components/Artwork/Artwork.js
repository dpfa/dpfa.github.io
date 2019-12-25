import React from 'react'
import './Artwork.scss'

function Artwork({title, dims, height, width, medium, media, year, image }) {
  console.log(title, dims, height, width, medium, media, year, image )
  return (
    <div className="artwork">
      <img href={`${process.env.PUBLIC_URL}/images/IMG_2790.JPG`} alt={title} height="100" width="100"/>
      <h4>{title}</h4>
    </div>
  );  
}

export default Artwork
