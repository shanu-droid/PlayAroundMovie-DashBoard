import React , {useState} from "react"

const Signup = () => {
   const [values, setValues] = useState({
       name:"",
       email:"",
       password:""
   })

   const {name, email, password} = values
   

   const handelChange = name => event => {
       setValues({...values, error: false, [name] : event.target.value})
   }
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false});
    }
    return (
            <div className="row">
                <div className="col-md-4 offset-sm-4 text-left">
                  <form>
                      <div className="form-group" >
                      <label className="text-light">Name</label>
                      <input className="form-control" onChange={handelChange("name")} type="text" value={name}/>
                      </div>

                      <div className="form-group" >
                      <label className="text-light">Email</label>
                      <input className="form-control" onChange={handelChange("email")} type="email" value={email}/>
                      </div>

                      <div className="form-group" >
                      <label className="text-light">Password</label>
                      <input className="form-control" onChange={handelChange("password")} type="password" value={password}/>
                      </div>
                      <div className="py-3">
                          <button onClick={onSubmit} className="btn btn-info btn-block offset-sm-4" >Submit</button>
                      </div>
                      
                  </form>
                </div>
            </div>
        )
    }
export default Signup;