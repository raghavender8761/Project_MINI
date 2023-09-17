import React from 'react'
import "../../lib/owlcarousel/assets/owl.carousel.min.css"
import "../../css/style.css"
import "./AIML.css"
import "./FAC.css"
function AIML_Faculty() {
  return (
    <>
    <div class="jumbotron-a jumbotron-fluid-a page-header position-relative " style={{marginBottom: "50px"}}>
        <div class="container text-center py-5">
            <h1 class="text-violet display-1"><a href="/AIML">CSE-AI&ML</a>/Faculty</h1>
        </div>
    </div>
    <div class="section-title text-center position-relative mb-5">
                <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">LIST OF AI&ML FACULTY</h4>
            </div>
    <div className='container  '>
    <div class="d-flex flex-column justify-content-center">
    <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Designation</th>
      <th>Subjects</th>
      <th>Papers</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>DR. H.N. LAKSHMI</td>
      <td>H.O.D</td>
      <td>AIML,CS,DS</td>
      <td>www.arxiv.org/etautomation.docx</td>
     </tr>
    <tr>
      <td>2</td>
      <td>Dr. R. USHARANI</td>
      <td>AIML COORDINATOR</td>
      <td>AIML,CS,DS</td>
      <td>www.arxiv.org/etautomation.docx</td>
      </tr>
    <tr >
      <td>3</td>
      <td>Dr. JAGADEESHWARA RAO</td>
      <td>PROFESSOR</td>
      <td>SE&DEVOPS</td>
      <td>www.arxiv.org/etautomation.docx</td>
     </tr> 
    <tr>
      <td>4</td>
      <td>Dr. SOUMYA</td>
      <td>PROFESSOR</td>
      <td>JAVA</td>
      <td>www.arxiv.org/etautomation.docx</td>
    </tr>  
    
  </tbody>
</table>
</div>
</div>
    </>
  )
}

export default AIML_Faculty