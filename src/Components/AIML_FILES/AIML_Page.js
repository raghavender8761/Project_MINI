import React from 'react'
import "../../lib/owlcarousel/assets/owl.carousel.min.css"
import "../../css/style.css"
import "./AIML.css"
import ushamam from "../../img/ushamam.jpg"
function AIML_Page() {
  return (
    <>
    <div class="jumbotron-a jumbotron-fluid-a page-header position-relative " style={{marginBottom: "50px"}}>
        <div class="container text-center py-5">
            <h1 class="text-violet display-1">CSE-AI&ML</h1>
        </div>
        <div class="container text-center py-5">
            <h6 class="text-violet">Computer Science Engineering-Artificial Intelligence and Machine Learning</h6>
        </div>

    </div>
    <marquee class="css1">Welcome To Department Of EMERGING TECHNOLOGIES - <strong>CSE-AI&ML</strong></marquee>
    <div class="container-xxl py-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                        <h5 class="mb-3"><a href="/AIML/faculty">Skilled Instructors</a></h5>
                        <br></br>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-desktop text-primary mb-4"></i>
                        <h5 class="mb-3"><a href="/AIML/Infrastructure">Infrastructure</a></h5>
                        <br></br>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <i class="fa fa-3x fa-book text-primary mb-4"></i>
                        <h5 class="mb-3"><a href="/AIML/Course_Outcomes">Course Structure and Outcomes</a></h5>
                        <p></p>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="service-item text-center pt-3">
                    <div class="p-4" >
                        <i class="fa fa-3x fa- fa-trophy text-primary mb-4"></i>
                        <h5 class="mb-3"><a href="/AIML/student_achievement">Student Achievements</a></h5>
                        <br></br>
                    </div>
                </div>
             </div>
            </div>
        </div>
    </div>
    <div class="section-title text-center position-relative mb-4">
        <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Message From Co-Ordinator</h4>
    </div>
    <div class="container">
    <div class="d-flex flex-column justify-content-center">
<div class="d-flex justify-content-center"><img src={ushamam} class="myimg" alt="" /></div>
<br></br>
<div class="d-flex justify-content-center"><p style={{textAlign:"justify"}}>True to its vision of “In pursuit of Excellence”, CVR College of Engineering was the first college in the State to introduce M.Tech programs in Artificial Intelligence and Data Sciences, well before AICTE could recognize them as emerging areas. Continuing the trend, CVR College pioneered a new B.Tech course as Computer Science and Information Technology (CSIT) in the year 2019, the brainchild of our Chairman. CVR was the only college in Telangana to do so at that time. The new course brought the best of both CSE and IT together providing CSIT graduates more opportunities than the graduates of CSE and IT courses. The emerging areas included in the new program have been identified by the national level committee as part of National Perspective Plan for Engineering Education and accepted by AICTE. Also, the courses provide employment and research opportunities in these areas. The department was renamed as Department of Emerging Technologies (ET) in 2022 and now also includes the UG programmes in AIML, Data Science and Cyber Security.

The program is designed with an intent to educate the engineering students on the emerging areas of Artificial Intelligence (AI), Machine Learning (ML), Internet of Things (IoT) and Data Sciences (DS) by introducing them as core courses. The program also educates the students with the related courses like statistics, R Programming, Big Data Analytics & Platforms, etc. Further, each student can choose from various streams in their professional electives that includes cutting edge technologies like Cyber Security (CS), Blockchain technologies, NoSQL Databases, Social Media Analytics, Neural Networks & Fuzzy Systems, Deep Learning and many more.

The Department has 8 laboratory units consisting of 258 systems, catering to the B. Tech curriculum. The systems use standard licensed software as a college policy including open source.</p></div>
  
  
  
</div>

</div>

<div class="section-title text-center position-relative mb-4">
        <h4 class="d-inline-block position-relative text-secondary text-uppercase pb-2">Faculty Strength</h4>
    </div>
    
    <div class="container">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <h5 class="mb-3">12 <br></br><br></br>Professors</h5>
                    </div>
                </div>
        </div>
    <div class="container">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <h5 class="mb-3">23 <br></br><br></br>Associate Professors</h5>
                    </div>
                </div>
        </div>
    
   
    <div class="container">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <h5 class="mb-3">3 <br></br><br></br>Sr.Assistant Professors</h5>
                    </div>
                </div>
        </div>
    
   
    <div class="container">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <h5 class="mb-3">5 <br></br><br></br>Assistant Professors</h5>
                    </div>
                </div>
        </div>
    
      <br></br>
    </>
  )
}

export default AIML_Page