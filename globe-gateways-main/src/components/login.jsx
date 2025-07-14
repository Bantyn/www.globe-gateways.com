import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../assets/css/login.css";

export default function LoginPage() {
  const imageRef = useRef(null);
  const blurRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
    tl
      .fromTo(imageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
      .fromTo(blurRef.current, { opacity: 0 }, { opacity: 1 }, "<") // "<" means same time
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
            <div id="loginPage">
              <h1>Welcome Back</h1>
              <p>
                Don't have an account?{" "}
                <a href="/sign" id="signupLink">Sign Up</a>
              </p>
              <table cellPadding="10%">
  <tbody>
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
        <button type="submit" className="submit">Login</button>
      </td>
    </tr>
    <tr>
      <td colSpan={2} className="other">
        <fieldset>
          <legend style={{ fontFamily: "var(--sub-heading-font)" }}>
            <i className="bi bi-people"></i> Or login with
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
  </tbody>
</table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}