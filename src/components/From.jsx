import React, { useEffect } from 'react'
import useForm from './useForm';
import ValidateForm from './ValidateForm';

const From = () => {


    const {inputHandler,values,HandleSubmit,error,isSubmitted}=useForm(ValidateForm)
    
    const finishSubmitted=()=>{
      console.log(values);
  }

  useEffect(()=>{
   if(Object.keys(error).length===0 && isSubmitted){
      finishSubmitted();
   }
  },[error])
  return (
    <div>
        <h1>Basic Form</h1>

        <form  onSubmit={HandleSubmit} >
            <div>
         <input type='text'
         placeholder='User Name' 
         name='username' 
         value={values.username}
          onChange={inputHandler}/>
         </div>
         {error.username &&  <div>{error.username}</div>}
         <div>
         <input type='text'
          placeholder='Email' 
          name='Email' 
          value={values.Email}
          onChange={inputHandler}/>
         </div>
         {error.Email &&  <div>{error.Email}</div>}
         <div>
         <input type='password' 
         placeholder='password' 
         name='password' 
         value={values.password}
          onChange={inputHandler} />
         </div>
         {error.password &&  <div>{error.password}</div>}
         <div>
         <input type='password' 
         placeholder='confirm Password' 
         name='confirmPassword' 
         value={values.confirmPassword}
          onChange={inputHandler} />
         </div>
         {error.confirmPassword &&  <div>{error.confirmPassword}</div>}
         <div>
         <button>SignUp</button>
         </div>
         <div>If you have already an account !  LogIn <a href=''>here</a></div>
         
        </form>

        {
            (Object.keys(error).length===0 && isSubmitted)?<div>Form is Submited successfully</div>:null
            
        }
    </div>

  )
}

export default From