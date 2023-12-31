
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { database } from '../FirebaseConfig';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
    .then((userCredential) =>{
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error)
    });
  }
  return (
    <>
     <div class="wrapper d-flex flex-column min-vh-100 bg-light">

<header class="header header-sticky mb-4">
       <div class="container">

<section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

        <div class="d-flex justify-content-center py-4">
            <img src="assets/img/logo.png" alt=""/>
            <span class="d-none d-lg-block">Tanmay Hardware</span>
        </div>

        <div class="card mb-3">

          <div class="card-body">

            <div class="pt-4 pb-2">
              <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
            </div>

            <form class="row g-3 needs-validation" onSubmit={login} novalidate>

              <div class="col-12">
                <label for="yourUsername" class="form-label">Email</label>
                <div class="input-group has-validation">
                  <input type="email" name="email" class="form-control" id="yourEmail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  <div class="invalid-feedback">Please enter your email.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="yourPassword" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="yourPassword" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <div class="invalid-feedback">Please enter your password!</div>
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                  <label class="form-check-label" for="rememberMe">Remember me</label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary w-100" type="submit">Login</button>
              </div>
              <div class="col-12">
              <p className="small mb-0">Don't have account? <NavLink to="/Register">Create an account</NavLink></p>
              </div>
            </form>

          </div>
        </div>
        </div>
        </div>
        </div>
</section>
</div>
</header>
</div>

    </>
  )
}
