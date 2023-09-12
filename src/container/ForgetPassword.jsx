import React from "react";

import { useForm } from "react-hook-form";
const ForgetPassword = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <main>
        <section class="p-0 d-flex align-items-center position-relative overflow-hidden">
          <div class="container-fluid">
            <div class="row">
              {/* <!-- left --> */}
              <div class="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                <div class="p-3 p-lg-5">
                  {/* <!-- Title --> */}
                  <div class="text-center">
                    <h2 class="fw-bold">Welcome to our largest community</h2>
                    <p class="mb-0 h6 fw-light">
                      Let's learn something new today!
                    </p>
                  </div>
                  {/* <!-- SVG Image --> */}
                  <img src="assets/images/element/02.svg" class="mt-5" alt="" />
                  {/* <!-- Info --> */}
                  <div class="d-sm-flex mt-5 align-items-center justify-content-center">
                    <ul class="avatar-group mb-2 mb-sm-0">
                      <li class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/avatar/01.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/avatar/02.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/avatar/03.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li class="avatar avatar-sm">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/avatar/04.jpg"
                          alt="avatar"
                        />
                      </li>
                    </ul>
                    {/* <!-- Content --> */}
                    <p class="mb-0 h6 fw-light ms-0 ms-sm-3">
                      4k+ Students joined us, now it's your turn.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Right --> */}
              <div class="col-12 col-lg-6 d-flex justify-content-center">
                <div class="row my-5">
                  <div class="col-sm-10 col-xl-12 m-auto">
                    {/* <!-- Title --> */}
                    <h1 class="fs-2">Forgot Password?</h1>
                    <h5 class="fw-light mb-4">
                      To receive a new password, enter your email address below.
                    </h5>

                    {/* <!-- Form START --> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* <!-- Email --> */}
                      <div class="mb-4">
                        <label htmlFor="exampleInputEmail1" class="form-label">
                          Email address *
                        </label>
                        <div class="input-group input-group-lg">
                          <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i class="bi bi-envelope-fill"></i>
                          </span>
                          <input
                            type="email/number "
                            class="form-control border-0 bg-light rounded-end ps-1"
                            placeholder="E-mail / Mobile Number"
                            id="exampleInputEmail1"
                            {...register("email/mobile number",{required:true})}
                          />
                        </div>
                      </div>
                      {/* <!-- Button --> */}
                      <div class="align-items-center">
                        <div class="d-grid">
                          <button class="btn btn-primary mb-0" type="submit">
                            Reset password
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* <!-- Form END --> */}
                  </div>
                </div>
                {/* <!-- Row END --> */}
              </div>
            </div>
            {/* <!-- Row END --> */}
          </div>
        </section>
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}

      {/* <!-- Back to top --> */}
      <div class="back-top">
        <i class="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i>
      </div>
    </div>
  );
};

export default ForgetPassword;
