import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { database } from '../FirebaseConfig';
import { NavLink } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(database, email, password)
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
              <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
            </div>

            <form class="row g-3 needs-validation"  onSubmit={register} novalidate>
              <div class="col-12">
                <label for="yourName" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="yourName" required/>
                <div class="invalid-feedback">Please, enter your name!</div>
              </div>

              <div class="col-12">
                <label for="yourEmail" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" id="yourEmail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <div class="invalid-feedback">Please enter a valid Email adddress!</div>
              </div>

              <div class="col-12">
                <label for="yourPassword" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="yourPassword" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <div class="invalid-feedback">Please enter your password!</div>
              </div>

              <div class="col-12">
                <button class="btn btn-primary w-100" type="submit">Create Account</button>
              </div>
              <div class="col-12">
                <p class="small mb-0">Already have an account? <NavLink to ="Login">Log in</NavLink></p>
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