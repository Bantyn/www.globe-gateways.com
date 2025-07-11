import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../assets/css/login.css";

export default function SignupPage() {
  const imageRef = useRef(null);
  const blurRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
    tl
      .fromTo(imageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
      .fromTo(blurRef.current, { opacity: 0 }, { opacity: 1 }, "<")
      .fromTo(formRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.5");
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div id="loginMainImage" className="col-sm-6" ref={imageRef}>
          <img src="http://picsum.photos/1080/1080" alt="" />
          <div className="blurEffect" ref={blurRef}></div>
        </div>
        <div id="loginFormContainer" className="col-sm-6" ref={formRef}>
          <div className="form-container">
            <div className="signinPage">
              <h1>Create an Account</h1>
              <p>
                Already have an account?{" "}
                <a href="/login" id="loginLink">Login</a>
              </p>
              <table cellPadding={"10%"}>
                <tr>
                  <td>
                    <input type="text" name="fname" id="fname" placeholder="First Name" />
                  </td>
                  <td>
                    <input type="text" name="lname" id="lname" placeholder="Last Name" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input type="text" name="email" id="email" placeholder="Email" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input type="password" name="password" id="password" placeholder="Password" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input type="checkbox" name="terms" id="terms" />
                    &nbsp;I agree to the terms and conditions
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button type="submit" className="submit">Create Account</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="other">
                    <fieldset>
                      <legend style={{ fontFamily: "var(--sub-heading-font)" }}>
                        <i className="bi bi-people"></i> Or sign in with
                      </legend>
                      <button type="button" className="google">
                        <i className="bi bi-google"></i>&nbsp; Google
                      </button>
                      <button type="button" className="facebook">
                        <i className="bi bi-facebook"></i>&nbsp; Facebook
                      </button>
                    </fieldset>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}