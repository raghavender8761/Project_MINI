import React from 'react'
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../css/style.css"
import "./PSO.css"

function PSO() {
  return (
    <>
    <div class="jumbotron-ps jumbotron-fluid-ps page-header position-relative " style={{marginBottom: "90px"}}>
        <div class="container text-center py-5">
            <h4 class="text-violet display-p1">Program Specific Objectives (PSOs)</h4>
        </div>
    </div>
    <div class="section-title text-center position-relative mb-4">
        <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Program Specific Objectives (PSOs)</h4>
    </div>
    <div class="container" data-aos="fade-up">
     
        <p class="mytext" style={{textAlign:"justify"}}><strong>PSO 1 : </strong>An ability to analyse a problem, design algorithm, identify and define the computing requirements appropriate to its solution and implement the same.</p>
        
        <p class="mytext" style={{textAlign:"justify"}}><strong>PSO 2 : </strong>Design an algorithm, component, or process to meet desired needs, within realistic constraints through analytical, logical and problem solving skills</p>
        <p class="mytext" style={{textAlign:"justify"}}><strong>PSO 3 : </strong>Effectively integrate solutions using emerging areas into the user environment.</p>
        <p class="mytext" style={{textAlign:"justify"}}><strong>PSO 4 : </strong>Demonstrate an ability of analyzing the common business functions to design and develop appropriate solutions in various domains and multi-disciplinary areas.</p>
    </div>
    <br></br>
    </>
  )
}
export default PSO;