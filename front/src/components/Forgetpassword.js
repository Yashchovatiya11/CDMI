import { useState } from 'react';
import '../components/Css/Forget.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Forgetpassword() {

  let [email, setemail] = useState('');
  let [otp, setotp] = useState('');
  let [password, setpassword] = useState('');
  let [error, setError] = useState('');

  let [authmode, setauthmode] = useState("otp")

  const changeAuthMode = () => {
    setauthmode(authmode === "otp" ? "c_otp" : "otp")


    axios.post('http://localhost:5000/forget_password', {
      email: email

    }).then(function (response) {

      console.log(response);

      if (response.data.status == "success") {
        // navigate("")
        alert("successfully set otp in your register email adress")
        if (authmode === "c_otp") {
          setauthmode(authmode === "c_otp" ? "new-otp" : "otp")
        }
      }
      else {
        alert("Check your email addresss")
      }
    }).catch(function (error) {
      // handle error
      console.log(error);
    })

  }


  const changeAuthMode1 = () => {


    axios.post('http://localhost:5000/check_otp', {
      email: email,
      otp: otp,
      password : password

    }).then(function (response) {

      console.log(response);

      if (response.data.status == "password change successfully") {
        // navigate("")
        alert("successfully changed your password")
      }
      else {
        alert("Check your otp")
      }
    }).catch(function (error) {
      // handle error
      console.log(error);
    })

  }

  if (authmode === "otp") {

    return (
      <>
        <div className='card1'>
          <div class="card text-center" className='card' >
            <div class="card-header h5 text-white bg-primary">Forget Password </div>
            <div class="card-body px-5">
              <p class="card-text py-2">
              </p>
              <div class="form-outline">
                <label class="form-label" for="typeEmail">Enter Your Email Address </label>
                <input type="email" id="typeEmail" onChange={(e) => { setemail(e.target.value) }} placeholder='Enter your email' class="form-control my-3" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={changeAuthMode} >Submit</button>

              <div class="d-flex justify-content-between mt-4">
                <Link to='/login'><a class="l1" href="#">Login</a></Link>
                <Link to='/signup'><a class="l1" href="#">Register</a></Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }


  // if (authmode === "new-otp") {
  //   return (
  //     <>
  //       <div className='card1'>
  //         <div className="card text-center"  >
  //           <div className="card-header h5 text-white bg-primary">Chage Password</div>
  //           <div className="card-body px-5">
  //             <p className="card-text py-2">
  //             </p>
  //             <div class="form-outline">
  //               <label class="form-label" for="typeEmail">Conform Otp </label>
  //               <input type="email" id="typeEmail" onChange={(e) => { setotp(e.target.value) }} placeholder='Enter Otp' class="form-control my-3" />
  //             </div>
  //             <div className="form-outline">
  //               <label className="form-label" for="typeEmail">Enter New Password </label>
  //               <input type="password" onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter New Password' className="form-control my-3" />
  //             </div>
  //             {/* <div className="form-outline">
  //               <label className="form-label" for="typeEmail">Enter Repeat Password </label>
  //               <input type="password" placeholder='Enter Repeat Password' className="form-control my-3" />
  //             </div> */}
  //             <button type="submit" className="btn btn-primary" onClick={changeAuthMode1} >Submit</button>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

  return (
        <>
          <div className='card1'>
            <div className="card text-center"  >
              <div className="card-header h5 text-white bg-primary">Chage Password</div>
              <div className="card-body px-5">
                <p className="card-text py-2">
                </p>
                <div class="form-outline">
                  <label class="form-label" for="typeEmail">Your Email Address </label>
                  <input type="email" id="typeEmail" onChange={(e) => { setemail(e.target.value) }} placeholder='Enter Otp' class="form-control my-3" />
                </div>
                <div class="form-outline">
                  <label class="form-label" for="typeEmail">Conform Otp </label>
                  <input type="text" onChange={(e) => { setotp(e.target.value) }} placeholder='Enter Otp' class="form-control my-3" />
                </div>
                <div className="form-outline">
                  <label className="form-label" for="typeEmail">Enter New Password </label>
                  <input type="password" onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter New Password' className="form-control my-3" />
                </div>
                {/* <div className="form-outline">
                  <label className="form-label" for="typeEmail">Enter Repeat Password </label>
                  <input type="password" placeholder='Enter Repeat Password' className="form-control my-3" />
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={changeAuthMode1} >Submit</button>
              </div>
            </div>
          </div>
        </>
      )
}


export default Forgetpassword;