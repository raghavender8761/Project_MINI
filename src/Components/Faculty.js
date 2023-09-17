import './Faculty.css';
import usha from '../img/ushamam.jpg'
import sunitha from '../img/sunithamam.jpg'
import hod from '../img/hod.jpg'
function Faculty() {
  return (

<div>
<div class="wrap1">
  <div class="box">
    <div class="box-top">
      <img class="box-image" src={hod} alt=""/>
      <div class="title-flex">
        <h3 class="box-title">Dr. H.N.LAKSHMI</h3>
        <p class="user-follow-info">Professor</p>
      </div>
      <p class="description">Head of the Department</p>
    </div>
    
  </div>

<div class="wrap">
  <div class="box">
    <div class="box-top">
      <img class="box-image" src={usha} alt=""/>
      <div class="title-flex">
        <h3 class="box-title">Dr.R. Usha Rani</h3>
        <p class="user-follow-info">Professor</p>
      </div>
      <p class="description">CSE-AI&ML Coordinator</p>
    </div>
    <a href="/AIML/faculty" class="button">View All AI&ML Faculty</a>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src={sunitha} alt=""/>
      <div class="title-flex">
        <h3 class="box-title">Dr. Sunitha</h3>
        <p class="user-follow-info">Professor</p>
      </div>
      <p class="description">CSE-CS Co-ordinator</p>
    </div>
    <a href="/CS/faculty" class="button">View All CS Faculty</a>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src={hod} alt=""/>
      <div class="title-flex">
        <h3 class="box-title">Dr. N. Satyanarayana</h3>
        <p class="user-follow-info">Professor</p>
      </div>
      <p class="description">CSE-DS Co-ordinator</p>
    </div>
    <a href="/DS/faculty" class="button">View All DS Faculty</a>
  </div>
  
</div>
</div></div>
  );
}

export default Faculty;