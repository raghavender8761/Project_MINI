import React from 'react'
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../css/style.css"
function NavBar() {
  return (
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="/" class="navbar-brand ml-lg-3">
                <h1 class="m-0 text-uppercase text-primary">ET Department</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-right px-lg-3" id="navbarCollapse">
                <div class="navbar-nav mx-auto py-0">
                    <a href="/" class="nav-item nav-link">Home</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">About Us</a>
                        <div class="dropdown-menu m-0">
                            <a href="/About/V&M" class="dropdown-item">Vision and Mission</a>
                            <a href="/About/peo" class="dropdown-item">PEOs</a>
                            <a href="/About/pso" class="dropdown-item">PSOs</a>
                        </div>
                    </div>
                    <a href="/AIML" class="nav-item nav-link">CSE-AI&ML</a>
                    <a href="/DS" class="nav-item nav-link">CSE-DS</a>
                    <a href="/CS" class="nav-item nav-link">CSE-CS</a>
                    
                    <a href="/Contact" class="nav-item nav-link ">Contact</a>
                    <a href="/Developers" class="nav-item nav-link ">Developers</a>
                </div>
                <a href="https://www.cvr.ac.in" class="btn btn-primary py-2 px-4 d-none d-lg-block">CVR College Of Engineering</a>
            </div>
        </nav>
    </div>
  )
}

export default NavBar