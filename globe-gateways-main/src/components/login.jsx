import React from 'react'
import "../assets/css/login.css";
export default function login() {
  return (
    <>
      <div className="container-fluid">
        
          <div id="loginMainImage" className='col-sm-6'>
            <img src="http://picsum.photos/1080/1080" alt="" />
            <div className="blurEffect"></div>
          </div>
          <div id="loginFormContainer" className='col-sm-6'>
            <h1>Create an Account</h1>
            <p>Already have an account ? <a href="#">Login</a></p>
            <table cellPadding={"10%"}>
              <tr>
                <td><input type="text" name="fname" id="fname" placeholder='First Name' /></td>
                <td><input type="text" name="lname" id="lname" placeholder='Last Name' /></td>
              </tr>
              <tr >
                <td colSpan={2} ><input type="text" name="email" id="email" placeholder='Email' /></td>
              </tr>
              <tr >
                <td colSpan={2} ><input type="password" name="password" id="password" placeholder='Password' /></td>
              </tr>
              <tr>
                <td colSpan={2} ><input type="checkbox" name="terms" id="terms" /> I agree to the terms and conditions</td>
              </tr>
              <tr>
                <td colSpan={2} ><button type="submit" className='submit'>Create Account</button></td>
              </tr>
              <tr>
                <td colSpan={2} className='other'><div className="line"><i className='bi bi-people'></i></div></td>
              </tr>
            </table>
          </div>

      </div>
    </>
  )
}
