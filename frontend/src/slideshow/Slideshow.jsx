import React from 'react'
import "./Slideshow.css"
import image1 from "../images/slideshow/1.png"
import image2 from "../images/slideshow/2.png"
import image3 from "../images/slideshow/3.jpg"

const Slideshow = () => {
  return (
    <div class="images">
    <img src={image1} class="one image" />
    <img src={image2} class="two image" />
    <img src={image3} class="three image" />
   
</div>
  )
}

export default Slideshow