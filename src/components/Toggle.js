import { useState } from "react";
import "./Toggle.css";
const Toggle = () => {

  let[showForm,UpdateShowForm]= useState(true);
  const formSubmitted=(event)=>
  {
       event.preventDefault();
       UpdateShowForm(true);
  }
  const formRestored=()=>
  {
    UpdateShowForm(false);
  }
  return (
    <div>
    { showForm && <button className="btn btn-primary mx-auto" type="button" onClick={formRestored}>Create Student</button>}
    { !showForm && <form className="col-md-6 mx-auto" onSubmit={formSubmitted}>
      <div className="container">
        <center>
          {" "}
          <h3 style={{color:'green' , textTransform: 'uppercase'}}> Student Registeration Form</h3>{" "}
        </center>
        <label> Firstname </label>
        <input type="text" name="firstname" placeholder="Firstname" size="12"/>
        <label> Middlename: </label>
        <input
          type="text"
          name="middlename"
          placeholder="Middlename"
          size="15"
        />
        <label> Lastname: </label>
        <input type="text" name="lastname" placeholder="Lastname" size="15" />
        <div>
          <label>Course :</label>

          <select>
            <option value="Course">Course</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
          </select>
        </div>
        <div>
          <label>Gender :</label>
          <br></br>
          <input type="radio" value="Male" name="gender"/> Male
          <input type="radio" value="Female" name="gender"/>
          Female
          <input type="radio" value="Other" name="gender"/>
         
        
          Other
        </div>
        <label>Phone :</label>
        <input
          type="text"
          name="country code"
          placeholder="Country Code"
          value="+91"
          size="2"
        />
        <input type="text" name="phone" placeholder="phone no." size="10"/>
        
        
        Current Address :
        <textarea
          cols="80"
          rows="5"
          placeholder="Current Address"
          value="address"
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email"/>
        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw"/>
          {" "}
        
        <label for="psw-repeat">
          <b>Re-type Password</b>
        </label>
        <input type="password" placeholder="Retype Password" name="psw-repeat"/>
          {" "}
      
        <button type="submit" className="registerbtn">
          Register
        </button>
      </div>
    </form> }
    </div>
  );
};
export default Toggle;
