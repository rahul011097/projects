import {  useState } from "react";

const useForm =(ValidateForm)=>{
const[values,setValues]=useState({
    username:'',
    Email:'',
    password:'',
    confirmPassword:''
})
  
const [error,setError]=useState({});
const[isSubmitted,setIsSubmitted]=useState(false);


const inputHandler=(e)=>{
   
     setValues({...values,[e.target.name]:e.target.value})

   }

   const HandleSubmit =(e)=>{
    e.preventDefault();

    setError(ValidateForm(values)); 
    setIsSubmitted(true);
    }

   return {inputHandler , values,HandleSubmit,error,isSubmitted}
}
 
export default  useForm;