import React, { useEffect } from "react";
export default function Footer() {

	return (
		<>
<footer>
		<div class="container">
			{/* <!-- Row START --> */}
			<div class="row g-4 justify-content-between pt-5">

				{/* <!-- Widget 1 START --> */}
				<div class="col-md-5 col-lg-4">
					{/* <!-- logo --> */}
					<a class="me-0" href="index-2.html">
						<img class="light-mode-item h-40px" src="assets/images/logo.svg" alt="logo"/>
						<img class="dark-mode-item h-40px" src="assets/images/logo-light.svg" alt="logo"/>
					</a>

					<p class="my-3">Eduport education theme, built specifically for the education centers which is
						dedicated to teaching and involve learners.</p>
					{/* <!-- Newsletter --> */}
					<form class="row row-cols-lg-auto g-2">
						<div class="col-12">
							<input type="email" class="form-control" placeholder="Enter your email address"/>
						</div>
						<div class="col-12">
							<button type="submit" class="btn btn-dark m-0">Subscribe</button>
						</div>
					</form>
				</div>
				{/* <!-- Widget 1 END --> */}

				{/* <!-- Widget 2 START --> */}
				<div class="col-md-7 col-lg-6">
					<div class="row g-4 g-lg-5">
						{/* <!-- Link block --> */}
						<div class="col-6 col-sm-4">
							<ul class="nav flex-column">
								<li class="nav-item"><a class="nav-link pt-0" href="#">Blog</a></li>
								<li class="nav-item"><a class="nav-link" href="#">About</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Contact us</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Privacy Policy</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Documentation</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Sitemap</a></li>
							</ul>
						</div>

						{/* <!-- Link block --> */}
						<div class="col-6 col-sm-4">
							<ul class="nav flex-column">
								<li class="nav-item"><a class="nav-link pt-0" href="#">Become instructor</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Download</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Services</a></li>
							</ul>
						</div>

						{/* <!-- Link block --> */}
						<div class="col-6 col-sm-4">
							<ul class="nav flex-column">
								<li class="nav-item"><a class="nav-link pt-0" href="#"><i
											class="fab fa-facebook-square text-facebook me-2"></i>Facebook</a></li>
								<li class="nav-item"><a class="nav-link" href="#"><i
											class="fab fa-instagram-square text-instagram-gradient me-2"></i>Instagram</a>
								</li>
								<li class="nav-item"><a class="nav-link" href="#"><i
											class="fab fa-twitter-square text-twitter me-2"></i>Twitter</a></li>
								<li class="nav-item"><a class="nav-link" href="#"><i
											class="fab fa-linkedin text-linkedin me-2"></i>Linkedin</a></li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- Widget 2 END --> */}

			</div>
            {/* <!-- Row END --> */}

			<hr/> 
            {/* <!-- Divider --> */}

			{/* <!-- Bottom footer --> */}
			<div class="row">
				<div class="col-12">
					<div class="d-md-flex justify-content-between align-items-center pt-2 pb-4 text-center">
						{/* <!-- copyright text --> */}
						<div class="text-primary-hover"> Copyrights <a href="https://www.webestica.com/" target="_blank"
								class="text-reset">©2023 Webestica</a>. All rights reserved. </div>
						{/* <!-- copyright links--> */}
						<div class="nav justify-content-center mt-3 mt-md-0">
							<ul class="list-inline mb-0">
								<li class="list-inline-item"><a class="nav-link" href="#">Terms of use</a></li>
								<li class="list-inline-item"><a class="nav-link" href="#">Privacy policy</a></li>
								<li class="list-inline-item pe-0"><a class="nav-link" href="#">Cookies</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </>
	);
}