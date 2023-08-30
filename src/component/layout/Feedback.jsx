import React, { useEffect } from "react";
export default function Footer() {
  return (
    <>
     <section className="bg-light position-relative">
	{/* <!-- SVG Image --> */}
	<figure className="position-absolute start-0 bottom-0 mb-0">
		<img src="assets/images/element/10.svg" className="h-200px" alt="" />
	</figure>

	<div className="container">
		{/* <!-- Title --> */}
		<div className="row mb-4">
			<div className="col-lg-8 mx-auto text-center">
				<h2>Our Customer Feedback</h2>
				<p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
			</div>
		</div>

		{/* <!-- Feedback START --> */}
		<div className="row">
			{/* <!-- Slider START --> */}
			<div className="tiny-slider arrow-round arrow-creative arrow-dark arrow-hover">
				<div className="tiny-slider-inner" data-autoplay="true" data-edge="5" data-arrow="true" data-dots="false" data-items="4" data-items-xl="3" data-items-md="2" data-items-xs="2">

					{/* <!-- Feedback item --> */}
					<div>
						<div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							{/* <!-- Avatar --> */}
							<div className="avatar avatar-lg mb-3">
								<img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
							</div>
							{/* <!-- Title --> */}
							<h6 className="mb-2">Lori Stevens</h6>
							{/* <!-- Content --> */}
							<blockquote className="mt-1">
								<p>
									<span className="me-1 small"><i className="fas fa-quote-left"></i></span>
										Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span className="ms-1 small"><i className="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>

					{/* <!-- Feedback item --> */}
					<div>
						<div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							{/* <!-- Avatar --> */}
							<div className="avatar avatar-lg mb-3">
								<img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
							</div>
							{/* <!-- Title --> */}
							<h6 className="mb-2">Billy Vasquez</h6>
							{/* <!-- Content --> */}
							<blockquote className="mt-1">
								<p>
									<span className="me-1 small"><i className="fas fa-quote-left"></i></span>
									Its enjoyment	Moonlight newspaper up agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span className="ms-1 small"><i className="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>

					{/* <!-- Feedback item --> */}
					<div>
						<div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							{/* <!-- Avatar --> */}
							<div className="avatar avatar-lg mb-3">
								<img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
							</div>
							{/* <!-- Title --> */}
							<h6 className="mb-2">Carolyn Ortiz</h6>
							{/* <!-- Content --> */}
							<blockquote className="mt-1">
								<p>
									<span className="me-1 small"><i className="fas fa-quote-left"></i></span>
										Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span className="ms-1 small"><i className="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>

					{/* <!-- Feedback item --> */}
					<div>
						<div className="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							{/* <!-- Avatar --> */}
							<div className="avatar avatar-lg mb-3">
								<img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
							</div>
							{/* <!-- Title --> */}
							<h6 className="mb-2">Carolyn Ortiz</h6>
							{/* <!-- Content --> */}
							<blockquote className="mt-1">
								<p>
									<span className="me-1 small"><i className="fas fa-quote-left"></i></span>
										Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span className="ms-1 small"><i className="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</div>	
			{/* <!-- Slider START -->	 */}
		</div>
		{/* <!-- Feedback END --> */}
	</div>
</section>
    </>
  );
}
