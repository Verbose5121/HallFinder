// import {React, useEffect} from 'react'
// import IMAGES from './photos/Images';
// // import 'Carousel.css'



// function Carousel() {
//     useEffect(() => {
//         //TODO: Change to community data 
//         document.title = 'BankView Community Hall';
//       }, []);

//       const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })
//     return (
// <> 
//     <section aria-label="pictures">

//     <div className="carousel" data-carousel>

//     <button className="carousel-button prev" data-carousel-button= "prev">&#8656;</button>
//     <button className="carousel-button next" data-carousel-button="next">&#8658;</button>

//     <ul data-slides>

//     <li className="slide" data-active>
//         <img src={IMAGES.image1} alt=" Main building" />
//     </li>
//     <li className="slide">
        
//         <img src={IMAGES.image5} alt="Kitchen" />
//     </li>

//     <li className="slide">
//         <img src={IMAGES.image6} alt="Board room" />
//     </li>
//     <li className="slide">
//         <img src={IMAGES.image7} alt="Board room" />    
//     </li>
//         </ul>
//         </div>
//         </section>
//         <h2>Rates and Booking Information.</h2>
//         <h3>Main Hall</h3>
//         <p>
//             * Sunday-Friday: $75/hour (2-hour minimum)<br/>
//             * Saturday: $100/hour (4-hour minimum)<br/>
//             * Saturday 12 hours: $1000 flat Rates<br/>
//             * Saturday 18 hours (7am - 1am): $1000<br/>
//         </p>
//         <h3>Boardroom</h3>
//         <p>
//             * $30/hr (Mon - Fri evenings only)<br/>
//             * Weekends may be available upon request<br/>
//             * Please contact our Office for more Information
//         </p>
// </>


//   )
// }

// export default Carousel