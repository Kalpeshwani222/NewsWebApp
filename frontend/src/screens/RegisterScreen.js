import React,{useState,useEffect} from 'react'
import Loading from '../component/Loading';
import ErrorMessage from '../component/ErrorMessage';
import { history, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from '../actions/userAction';
import Navbar from '../component/Navbar';

const RegisterScreen = () => {
 const history = useHistory();
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
  const[password,setPassword] = useState("");

  // const[error,setError] = useState(false);
  // const[loading,setLoading] = useState(false);


  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;


   useEffect(() =>{
    if(userInfo){
      history.push('/')
    }
  },[history,userInfo])


  const submitHandler = async(e) =>{
    e.preventDefault();
    
    dispatch(register(name,email,phone,password));
   
  }

  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      history.push("/entertainment")
    }
  },[])

  return (
<>
    <Navbar />
 <div
        style={{ margin: "10rem", padding: "10px", border: "solid 1px black" }}
      >
        <div style={{ margin: "10px" }}>Register Page</div>
        {loading && <Loading/>}

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={submitHandler}>

        <input type="text" 
        value={name}
      onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder='Enter Name'
         />
        <br />
        <br />

        <input
         type="email"
          name="email"
           value={email} 
             onChange={(e) =>setEmail(e.target.value)}
           />
        <br />
        <br />

        <input type="number"
         name="phone" 
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
          />
        <br />
        <br />


        <input type="password"
         name="password" 
         value={password}
         onChange= {(e) => setPassword(e.target.value)}
          />
        <br />
        <br />

       <button type="submit" className="btn btn-primary">
                Submit
              </button>

        </form>
        
      
      </div>
      </>
  )
}

export default RegisterScreen