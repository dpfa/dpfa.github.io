import React from 'react'
import './Artwork.scss'

function Artwork({data}) {
  console.log(data)
  let imgString = `/images/${data.image}`
  return (
    <div className="col-6 artwork">
      <img src={imgString}  alt={data.title} height="100" width="100"/>
      <h6>{data.title}</h6>
      <p>{data.medium} - ${data.price}</p>
    </div>
  );  
}

export default Artwork
