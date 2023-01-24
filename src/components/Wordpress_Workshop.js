import React from 'react';
import '../../src/assets/css/Workshop.css';

// // import photos
// import workshopPhoto1 from '../../src/assets/img/wordpressWorkshop/Workshop1.png';
//import photos of Workshop
import image1 from '../assets/img/wordpressWorkshop/image1.jpg'
import image2 from '../assets/img/wordpressWorkshop/image2.jpg'
import image3 from '../assets/img/wordpressWorkshop/image3.jpg'
import image4 from '../assets/img/wordpressWorkshop/image4.jpg'

import image6 from '../assets/img/wordpressWorkshop/image6.jpg'

import image8 from '../assets/img/wordpressWorkshop/image8.jpg'
import image9 from '../assets/img/wordpressWorkshop/image9.jpg'
import image10 from '../assets/img/wordpressWorkshop/image10.jpg'

import Workshop from '../assets/img/wordpressWorkshop/Workshop.jpg'

export default function Wordpress_Workshop() {
 /*=============== SHOW MODAL ===============*/
 const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
   modalContainer = document.getElementById(modalContent)

  if (openBtn && modalContainer) {
   openBtn.addEventListener('click', () => {
    modalContainer.classList.add('show-modal')
   })
  }
 }
 
 showModal('open-modal', 'modal-container')

 /*=============== CLOSE MODAL ===============*/
 const closeBtn = document.querySelectorAll('.close-modal')

 function closeModal() {
  const modalContainer = document.getElementById('modal-container')
  modalContainer.classList.remove('show-modal')
 }
 closeBtn.forEach(c => c.addEventListener('click', closeModal))
 // Gallery Section
 //getting all required elements
 const gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

 window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
   totalImg.textContent = gallery.length; //passing total img length to totalImg variable
   let newIndex = i; //passing i value to newIndex variable
   let clickedImgIndex; //creating new variable

   gallery[i].onclick = () => {
    clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
    function preview() {
     currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
     let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
     previewImg.src = imageURL; //passing user clicked img url in previewImg src
    }
    preview(); //calling above function

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
     prevBtn.style.display = "none";
    }
    if (newIndex >= gallery.length - 1) { //if index value is greater and equal to gallery length by -1 then hide nextBtn
     nextBtn.style.display = "none";
    }
    prevBtn.onclick = () => {
     newIndex--; //decrement index
     if (newIndex == 0) {
      preview();
      prevBtn.style.display = "none";
     } else {
      preview();
      nextBtn.style.display = "block";
     }
    }
    nextBtn.onclick = () => {
     newIndex++; //increment index
     if (newIndex >= gallery.length - 1) {
      preview();
      nextBtn.style.display = "none";
     } else {
      preview();
      prevBtn.style.display = "block";
     }
    }
    document.querySelector("body").style.overflow = "hidden";
    previewBox.classList.add("show");
    shadow.style.display = "block";
    closeIcon.onclick = () => {
     newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
     prevBtn.style.display = "block";
     nextBtn.style.display = "block";
     previewBox.classList.remove("show");
     shadow.style.display = "none";
     document.querySelector("body").style.overflow = "scroll";
    }
   }

  }

 }


 return (
  <>
   <section class="modal container">
    <button class="modal__button" id="open-modal">
     Open Modal
    </button>

    <div class="modal__container" id="modal-container">
     <div class="modal__content">
      <div class="modal__close close-modal" title="Close">
       <i class='bx bx-x'></i>
      </div>
      {/* Words for Workshop */}
      <div id="about-workshop">
       <h2>About Workshop</h2>
       <p>
        Lorem ipsum dolor sit amet, consectet
        est. Etiam maximus pretium augue, a elementum risus convallis quis. Integer a purus accumsan,


       </p>
      </div>
      {/* For single photo of Workshop */}
      <div id="workshop-photo">
       <h2>Workshop</h2>
       <img src={Workshop} alt="Workshop" class="modal__img" />

      </div>

      <div id="clear">
      </div>
      {/* Instructor Section */}
      <div id="instructor">
       <h2>Instructor</h2>
       <p>Lorem ipsum, dolor sitamet consectetur
        adipisicing
       </p>
      </div>
      {/* Gallery section */}
      <div id="gallerytop">
       <h2>Gallery</h2>
       <div class="wrapper">
        <div class="gallery">
         <div class="image"><span><img src="../assets/img/wordpressWorkshop/image1.jpg" alt="" /></span></div>
         <div class="image"><span><img src={image1} alt="" /></span></div>
         <div class="image"><span><img src={image2} alt="" /></span></div>
         <div class="image"><span><img src={image6} alt="" /></span></div>
         <div class="image"><span><img src={image8} alt="" /></span></div>
         <div class="image"><span><img src={image3} alt="" /></span></div>
         <div class="image"><span><img src={image10} alt="" /></span></div>
         <div class="image"><span><img src={image4} alt="" /></span></div>
         <div class="image"><span><img src={image9} alt="" /></span></div>
        </div>
       </div>
       <div class="preview-box">
        <div class="details">
         <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
         <span class="icon fas fa-times"></span>
        </div>
        <div class="image-box">
         <div class="slide prev"><i class="fas fa-angle-left"></i></div>
         <div class="slide next"><i class="fas fa-angle-right"></i></div>

        </div>
       </div>
       <div class="shadow"></div>
      </div>

     </div>
    </div>
   </section>
  </>
 )
}