import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import './Signin.css'
import './App.css'


const Signin = () => {

  return (
    <div className="Login">
       <form>
       <div className="form-inner">
           <h2 style={{fontSize:"40px", paddingTop:"10px"}}>Login Here!</h2>
           
           <div className="form-group" style={{paddingTop:"40px"}}>
                <div className="row">
                    <div className="col-4" style={{textAlign:"right"}}>
                    <label htmlFor="name" >Name</label>
                    </div>
                    <div className="col-8" style={{textAlign:"left"}}>
                    <input type="text" name="name" id="name" />
                    </div>
                </div>
                <div className="form-group" style={{paddingTop:"20px"}}>
                <div className="row">
                <div className="col-4" style={{textAlign:"right"}}>
                <label htmlFor="email">Email</label>
                </div>
                <div className="col-8" style={{textAlign:"left"}}>
                <input type="email" name="email" id="email"/>
                </div>
                </div>
                
                </div>

                <div className="form-group" style={{paddingTop:"10px"}}>
                <div className="row">
                <div className="col-4" style={{textAlign:"right"}}>
                <label htmlFor="password" >Password</label>
                </div>
                <div className="col-8" style={{textAlign:"left"}}>
                <input type="password" name="password" id="password" />
                </div>
                 </div>
                
                </div>
                
           </div>
           <button className="submit_button">Login</button>
       </div>
      </form>
       
    </div>
  )
}

export default Signin
