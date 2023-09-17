import React from 'react'
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../css/style.css"
import img1 from "../img/hod.jpg"
import img2 from "../img/aiml_logo.png"
import img3 from "../img/data-science.jpg"
import img4 from "../img/CS.jpg"
import Faculty from './Faculty'
import NavBar from './NavBar'
function Main() {

    const mystyle = {
        width: "100%",  
        maxWidth: "600px"
      };
  return (
    <>
    
    
     
    <div class="jumbotron jumbotron-fluid position-relative " style={{marginBottom: "90px"}}>
        <div class="container text-center my-5 py-5">
            <h2 class="text-violet display-1 mb-5">Welcome To</h2>
            <h1 class="text-white mt-4 mb-4">Department Of</h1>
            <h3 class="text-violet display-1 mb-5">Emerging Technologies</h3>
            
            </div>
        </div>
        
        <div class="container" data-aos="fade-up">

<div class="section-title">
<div class="section-title text-center position-relative mb-5">
                <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Message From Head of the Department</h4>
            </div>
    <h3>Dr. H.N Lakshmi(HOD, Proffesor)</h3>

</div>

<div class="d-flex flex-column justify-content-center">
<div class="d-flex justify-content-center"><img src={img1} class="img-fluid" alt="" /></div>
<br></br>
<div class="d-flex justify-content-center"><p style={{textAlign:"justify"}}>True to its vision of “In pursuit of Excellence”, CVR College of Engineering was the first college in the State to introduce M.Tech programs in Artificial Intelligence and Data Sciences, well before AICTE could recognize them as emerging areas. Continuing the trend, CVR College pioneered a new B.Tech course in Computer Science and Information Technology (CSIT) in the year 2019, the brainchild of our Chairman. CVR was the only college in Telangana to do so at that time. The new course brought the best of both CSE and IT together providing CSIT graduates more opportunities than the graduates of CSE and IT courses. The emerging areas included in the new program have been identified by the national level committee as part of National Perspective Plan for Engineering Education and accepted by AICTE. Also, the courses provide employment and research opportunities in these areas. The department was renamed as Department of Emerging Technologies (ET) in 2022 and now also includes the UG programmes in AIML, Data Science and Cyber Security.

The program is designed with an intent to educate the engineering students on the emerging areas of Artificial Intelligence (AI), Machine Learning (ML), Internet of Things (IoT) and Data Sciences (DS) by introducing them as core courses. The program also educates the students with the related courses like statistics, R Programming, Big Data Analytics & Platforms, etc. Further, each student can choose from various streams in their professional electives that includes cutting edge technologies like Cyber Security (CS), Blockchain technologies, NoSQL Databases, Social Media Analytics, Neural Networks & Fuzzy Systems, Deep Learning and many more.

The Department has 8 laboratory units consisting of 258 systems, catering to the B. Tech curriculum. The systems use standard licensed software as a college policy including open source.</p></div>
  
  
  
</div>

</div>
<br></br>

        
            <div class="section-title text-center position-relative mb-5">
                <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">DEPARTMENT DETAILS</h4>
            </div>


<div class="row pt-3 mx-0 justify-content-center">
                        <div class="col-3 px-0">
                            <div class="bg-success text-center p-4">
                                <h1 class="text-white" data-toggle="counter-up">123</h1>
                                <h6 class="text-uppercase text-white">Available<span class="d-block">Subjects</span></h6>
                            </div>
                        </div>
                <div class="col-3 px-0">
                    <div class="bg-primary text-center p-4">
                            <h1 class="text-white" data-toggle="counter-up">4</h1>
                            <h6 class="text-uppercase text-white">Courses<span class="d-block">Offered</span></h6>
                    </div>
                </div>            
            </div>
            <div class="row pt-3 mx-0 justify-content-center">
                    <div class="col-3 px-0">
                        <div class="bg-secondary text-center p-4">
                        <h1 class="text-white" data-toggle="counter-up">123</h1>
                        <h6 class="text-uppercase text-white">Skilled<span class="d-block">Instructors</span></h6>
                    </div>
                </div>
                <div class="col-3 px-0">
                    <div class="bg-warning text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">1234</h1>
                    <h6 class="text-uppercase text-white">Happy<span class="d-block">Students</span></h6>
                </div>
            </div>
        </div>
        <br></br>
        <div class="container-fluid px-0 py-5">
        <div class="row mx-0 justify-content-center pt-5">
            <div class="col-lg-6">
                <div class="section-title text-center position-relative mb-4">
                    <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h4>
                    <h1>The Courses which we offer are:</h1>
                </div>
            </div>

            
        </div>
       
        <div class="row pt-3 mx-0 justify-content-center">
                    <div class="col-3 px-0">
                        <div class="bg-warning text-center p-4">
                        <img src={img2} class="img-fluid" alt="" />
                        <h6 class="text-uppercase text-white">CSE-AI&ML</h6>
                    </div>
                </div>
                <div class="col-3 px-0">
                    <div class="bg-warning text-center p-4">
                    <img src={img3} class="img-fluid" alt="" />
                    <h6 class="text-uppercase text-white">CSE-DS</h6>
                </div>
                </div>
                <div class="col-3 px-0">
                    <div class="bg-warning text-center p-4">
                    <img src={img4} class="img-fluid" alt="" />
                    <h6 class="text-uppercase text-white">CSE-CS</h6>
                </div>
            </div>
            </div> 
    </div>
    <br></br>
    <div class="container-fluid py-5" style={{marginBottom:"0px"}}>
        <div class="container py-5" style={{marginBottom:"0px"}}>
            <div class="section-title text-center position-relative mb-5">
                <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Instructors</h4>
            </div>
        </div>
        <Faculty />    
    </div>
    
    
    


    
    <a href="#" class="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>



    
    
    </>
  )
}

export default Main