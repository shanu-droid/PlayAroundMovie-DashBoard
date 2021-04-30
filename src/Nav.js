import React, {Fragment} from 'react';
import './Nav.css'


const Nav = () => {


    return (
      
        <div className="nav">
          <div className="row" >
           <div className="col-6" style={{textAlign:"left"}}>
            <h1 style={{color:"blue", paddingLeft:"40px"}}>User DashBoard</h1>
           </div>
            <div className="col-6" style={{paddingLeft:"200px"}}>

                 <div className="row">
                 <div className="col-3" style={{paddingLeft:"70px"}}><button className="signin_button" onClick={(event) =>  window.location.href='/signin'}>Signin</button></div>

                 <div className="col-3" style={{paddingLeft:"70px"}}><button className="signout_button" onClick={(event) =>  window.location.href='/'}>Signout</button></div>

                 <div className="col-5" style={{paddingLeft:"120px"}}>
                 <input className="form-control" placeholder="Type here to search......." style={{background:"#222", border:"1px solid blue",height:"35px", width:"250px", color:"white"}}></input>
                 </div>

                 <div className="col-1" ><img
                 className="nav_avatar"
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                 alt="Avatar Logo"></img></div>
                 </div>
            </div>
          </div>
        
    </div>
        
    )
}

export default Nav;