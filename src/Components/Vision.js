import React from 'react'
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../css/style.css"
import "./Vision.css"

function Vision() {
  return (
    <>
    <div class="jumbotron-v jumbotron-fluid-v page-header position-relative " style={{marginBottom: "90px"}}>
        <div class="container text-center py-5">
            <h1 class="text-violet display-1">Vision And Mission</h1>
        </div>
    </div>
    <div class="section-title text-center position-relative mb-4">
        <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Vision</h4>
    </div>
    <div class="container" data-aos="fade-up">
    <div class="d-flex justify-content-center"> 
        <p class="mytext" style={{textAlign:"justify"}}>To evolve as a Center of Excellence in emerging areas, impart quality education to produce ethical, motivated and skilled professionals to meet the ever-increasing technological & social challenges</p>
    </div>
    </div>
    <div class="section-title text-center position-relative mb-4">
        <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Mission</h4>
    </div>
            
    <div class="container" data-aos="fade-up">
    <div class="d-flex justify-content-center"> 
    <dl class="mytext" style={{textAlign:"justify"}}>
        <dt><b>M1:</b></dt>
        <dd>To impart students with self-discipline, hard work, all-round personality development and creative problem-solving approach.</dd>
        <dt><b>M2:</b></dt>
        <dd>To provide quality-education by using the latest infrastructure and nurturing collaborative culture.</dd>
        <dt><b>M3:</b></dt>
        <dd>To provide students an opportunity to learn both foundational and experimental components in emerging areas..</dd>
        <dt><b>M4:</b></dt>
        <dd>To promote and nurture the spirit of innovation and entrepreneurship in our students.</dd>
        <dt><b>M5:</b></dt>
        <dd>To emerge as a Center of Excellence through Research, Consultancy and Development Activities.</dd>
        
    </dl>
    </div>
    </div>

  </>
  )
}

export default Vision