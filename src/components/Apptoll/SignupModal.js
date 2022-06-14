import React, { useState } from "react";
import "./SignupModal.css";
import { useFormik } from "formik";
import * as yup from "yup";
import instance from "./BaseUrl";
import Otp from "./Otp";

const SignupModal = () => {
  const [showOtpBox, setShowOtpBox] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      cpassword: "",
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .max(50, "Name is too big")
        .required("This field is required."),
      email: yup
        .string()
        .test("invalid email", (value) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        })
        .required("Required"),
      phoneNumber: yup.string().required("Required"),
      password: yup
        .string()
        .min(8, "minimun 8 character")
        .max(16, "maximum 16 character")
        .required("Required"),
      cpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Does not match with password")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        const res = await instance.post("/signup", values);
        console.log(res);
        if (res.data.success) {
          alert(res.data.message);
          formik.resetForm();
          document.querySelector("#exampleModalsignup").style.display = "none";
          setShowOtpBox(true);
        } else {
          alert(res.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  const [searchString, setSearchString] = useState();
  return (
    <div
      className="modal fade login_pagess"
      id="exampleModalsignup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered login" role="document">
        <div className="modal-content modal-body container">
          <div className="signup_card">
            <img src="assets/img/Group 8373.png" className="login_flogo" />

            <form className="sign-form" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <img src="img/Icon feather-user.png" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <p>{formik.errors.fullName}</p>
                ) : null}
              </div>
              <div className="form-group">
                <img src="img/Icon feather-mail.png" />
                <input
                  type="text"
                  name="email"
                  placeholder="Email "
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="form-group">
                <img src="img/Icon ionic-ios-call.png" />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p>{formik.errors.phoneNumber}</p>
                ) : null}
              </div>
              <div className="form-group">
                <img src="img/Icon feather-lock.png" />
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                <img
                  src="img/iconfinder_view-show_3671905.png"
                  className="Eye-icon"
                />
                {formik.touched.password && formik.errors.password ? (
                  <p>{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="form-group">
                <img src="img/Icon feather-lock.png" />
                <input
                  type="text"
                  name="cpassword"
                  placeholder="Confirm Password"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cpassword}
                  error={
                    formik.touched.cpassword && Boolean(formik.errors.cpassword)
                  }
                />
                <img
                  src="img/iconfinder_view-show_3671905.png"
                  className="Eye-icon"
                />
                {formik.touched.cpassword && formik.errors.cpassword ? (
                  <p>{formik.errors.cpassword}</p>
                ) : null}

                <div className="forget-pass">
                  <a href="#">Forget Password ?</a>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-default br-5" type="submit">
                  SIGN UP
                </button>
              </div>
              <p className="no-acc">
                Already Have An Account<a href="#">LogIn</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      {showOtpBox ? <Otp /> : null}
    </div>
  );
};

export default SignupModal;
