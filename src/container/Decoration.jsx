import React, { useEffect } from "react";
export default function Decoration() {

	return (
		<>
      <div className="container position-relative">
				<div className="row justify-content-between align-items-center my-5">

					<div className="col-lg-5 position-relative">
						{/* <!-- SVG decoration --> */}
						<figure className="position-absolute top-0 start-0 translate-middle mt-n5">
							<svg width="29px" height="29px">
								<path className="fill-orange"
									d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z">
								</path>
							</svg>
						</figure>

						{/* <!-- Title --> */}
						<h2 className="h1">Study whenever you want, from any place in the world.</h2>
					</div>

					<div className="col-lg-5 position-relative mt-4 mt-lg-0">
						{/* <!-- Image --> */}
						<img src="assets/images/about/04.jpg" className="border border-5 border-white rounded-2" alt=""/>
						<div className="position-absolute top-50 start-50 translate-middle">
							{/* <!-- Video link --> */}
							<a href="https://www.youtube.com/embed/tXHviS-4ygo"
								className="btn text-danger btn-round btn-white-shadow btn-lg mb-0" data-glightbox
								data-gallery="video-tour">
								<i className="fas fa-play"></i>
							</a>
						</div>
					</div>
				</div>
                </div>
        </>
        );
    }