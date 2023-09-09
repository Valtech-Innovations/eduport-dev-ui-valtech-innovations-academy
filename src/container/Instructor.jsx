import React, { useEffect } from "react";
export default function Instructor() {
  return (
    <>
      <section className="bg-light position-relative">
    <div className="container">
          {/* <!-- Title --> */}
          <div className="row mb-4">
            <div className="col-lg-8 text-left">
            <button className="btn btn-sm btn-dark mb-0 rounded-pill">Instructor</button>
              <h3>Get trained by the best software engineers working in the top companies acreoss the globe</h3>
              <p className="mb-0 text-dark fw-bold ">
                Our instructor are experienced software engineers with a wealth of industry exprience. They will a weath of 
                industry exprience. They will provide you with in-depth knowledge and succeed in the field of software engineering.
              </p>
            </div>
          </div>

          {/* <!-- Instructor START --> */}
          <div className="row">
            {/* <!-- Slider START --> */}
            <div className="tiny-slider arrow-round arrow-creative arrow-dark arrow-hover">
              <div
                className="tiny-slider-inner d-flex flex-row justify-content-between mx-2 px-1"
                data-autoplay="true"
                data-edge="5"
                data-arrow="true"
                data-dots="false"
                data-items="4"
                data-items-xl="3"
                data-items-md="2"
                data-items-xs="2"
              >
                {/* <!-- Instructor item --> */}
                <div>
                  <div className="mt-1 ">
                    {/* <!-- Avatar --> */}
                    <div className="mb-2 ">
                      <img
                        className="avatar-img"
                        src="assets/images/avatar/07.jpg"
                        alt="avatar"
                      />
                    </div>
                    {/* <!-- Title --> */}
                    <h6 className="mb-2 text-center">Rishab Garg</h6>
                    <p className="mb-1 text-center">Software Engineer</p>
                    {/* <!-- Content --> */}
                     <p className="text-center">
                         Google
                      </p>
                    </div>
                </div>

                {/* <!-- Instructor item --> */}
                <div>
                <div className=".mt-0 ">
                    {/* <!-- Avatar --> */}
                    <div className="mb-2 mt-0 ">
                      <img
                        className="avatar-img"
                        src="assets/images/avatar/09.jpg"
                        alt="avatar"
                      />
                    </div>
                    {/* <!-- Title --> */}
                    <h6 className="mb-2 text-center">Pratik Kumar</h6>
                    <p className="mb-1 text-center">Software Engineer</p>
                    {/* <!-- Content --> */}
                    <p className="text-center">
                         Microsoft 
                         </p>
                    </div>
                </div>

                {/* <!-- Instructor item --> */}
                <div>
                <div className="mt-0 ">
                    {/* <!-- Avatar --> */}
                    <div className="mb-2 mt-0 ">
                      <img
                        className="avatar-img"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    {/* <!-- Title --> */}
                    <h6 className="mb-2 text-center">Anirudh Pudhir</h6>
                    <p className="mb-1 text-center">Software Development Engineer</p>
                    {/* <!-- Content --> */}
                      <p className="text-center">
                        Zeta
                      </p>
                  </div>
                </div>
                 {/* <!-- Instructor item --> */}
                 <div>
                <div className="">
                    {/* <!-- Avatar --> */}
                    <div className="mb-2">
                      <img
                        className="avatar-img"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    {/* <!-- Title --> */}
                    <h6 className="mb-2 text-center">Ravi Kumar</h6>
                    <p className="mb-1 text-center">Software Development Engineer</p>
                    {/* <!-- Content --> */}
                      <p className="text-center">
                         Amazon US
                      </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider START -->	 */}
          </div>
          {/* <!-- Instructor END --> */}
        </div>
       </section>
 </>
  );
}
