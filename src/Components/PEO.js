import React from 'react'
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../css/style.css"
import "./PEO.css"

function PEO() {
  return (
    <>
    <div class="jumbotron-p jumbotron-fluid-p page-header position-relative " style={{marginBottom: "90px"}}>
        <div class="container text-center py-5">
            <h4 class="text-violet display-p1">Program Educational Objectives (PEOs)</h4>
        </div>
    </div>
    <div class="section-title text-center position-relative mb-4">
        <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Program Educational Objectives (PEOs)</h4>
    </div>
    <div class="container" data-aos="fade-up">
     
        <p class="mytext" style={{textAlign:"justify"}}><strong>PEO 1 : </strong>Graduates will acquire capability to apply their knowledge and skills to solve various kinds of computational engineering problems.</p>
        
        <p class="mytext" style={{textAlign:"justify"}}><strong>PEO 2 : </strong>Graduates will exhibit the ability to apply the acquired skills in various domains and multi-disciplinary areas, to function ethically and meet the ever-increasing technological and social challenges.</p>
        <p class="mytext" style={{textAlign:"justify"}}><strong>PEO 3 : </strong>To evolve as resourceful engineers catering to dynamic industrial needs and engage in life-long learning.</p>
        <p class="mytext" style={{textAlign:"justify"}}><strong>PEO 4 : </strong>Graduates will acquire soft skills to adapt and excel in diverse global environment.</p>
    </div>
    <br></br>
    </>
  )
}
export default PEO;