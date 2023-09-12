import React, { useEffect } from "react";
export default function Courses() {
  return (
    <>
      <section>
        <div class="container">
          <div class="row  d-flex flex-column justify-content-evenly">
            {/* <!-- Action box item --> */}
            <div class="col-lg-12 ">
            <h2 class="text-center">Courses We Offer</h2>
            <hr/>
              <div class=" rounded-3 p-5 w-100vw  d-flex flex-row justify-content-around ">
                {/* <!-- Image --> */}
                <div class=" bottom-0 end-0 m-auto ">
                  <img
                    src="assets/images/element/08.svg"
                    class="h-100px h-sm-200px img-fluid"
                    alt=""
                  />
                </div>
                {/* <!-- Content --> */}
                  <div class="col-lg-6 m-auto">
                    <h3 class="mb-1">Full Stack With Javascript (MERN Stack)</h3>
                    <p class="mb-3 h5 fw-light lead">
                      A Comprehensive programing coursen that takes you though fontend, backend , and  database technology<br/>
                                        Work on live project with constant guidence from experienced engineers & your program mentor.
                                        This course ensures that you grasp that core principles of programming and get the right know 
                                        how to be a complete all-rounder.
                                                                                
                    </p>
                    <a href="#" class="btn btn-primary mb-0">
                     Explore Course
                    </a>
                </div>
              </div>
            </div>

            {/* <!-- Action box item --> */}
            <div class="col-lg-12">
              <div class=" rounded-3 p-5 h-100 d-flex flex-row justify-content-around">
                {/* <!-- Image --> */}
                  <div class="col-lg-6 m-auto">
                    <h3 class="mb-1">Full Stack With Python</h3>
                    <p class="mb-3 h5 fw-light lead">
                      This python program takes you through the integral fuction of creating & maintaining 
                      the most popular backend technology.<br/>
                      We open up the doors to understanding backend programming with real-world examples and 
                      competitive coding chanllenges. 
                    </p>
                    <a href="#" class="btn btn-warning mb-0">
                    Explore Course
                    </a>
                  </div>
                {/* <!-- Content --> */}
                <div class="col-lg-6 bottom-0 end-0 me-3">
                  <img
                    src="assets/images/element/15.svg"
                    class="h-100px h-sm-200px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- =======================
Action box END --> */}
    </>
  );
}
