import React, { useEffect } from "react";
export default function Courses() {
  return (
    <>
      <section>
        <div class="container">
          <div class="row  d-flex flex-column justify-content-evenly">
            {/* <!-- Action box item --> */}
            <div class="col-lg-12 ">
              <div class=" rounded-3 p-5 w-100vw  d-flex flex-row justify-content-around ">
				<h1></h1>
                {/* <!-- Image --> */}
                <div class=" bottom-0 end-0 m-auto">
                  <img
                    src="assets/images/element/08.svg"
                    class="h-100px h-sm-200px"
                    alt=""
                  />
                </div>
                {/* <!-- Content --> */}
                  <div class="col-lg-6 m-auto">
                    <h3 class="mb-1">Earn a Certificate</h3>
                    <p class="mb-3 h5 fw-light lead">
                      Get the right professional certificate program for you.
                    </p>
                    <a href="#" class="btn btn-primary mb-0">
                      View Programs
                    </a>
                </div>
              </div>
            </div>

            {/* <!-- Action box item --> */}
            <div class="col-lg-12">
              <div class=" rounded-3 p-5 h-100 d-flex flex-row justify-content-around">
                {/* <!-- Image --> */}
                  <div class="col-lg-6 m-auto">
                    <h3 class="mb-1">Best Rated Courses</h3>
                    <p class="mb-3 h5 fw-light lead">
                      Enroll now in the most popular and best rated courses.
                    </p>
                    <a href="#" class="btn btn-warning mb-0">
                      View Courses
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
