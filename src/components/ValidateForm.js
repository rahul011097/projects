export default function ValidateForm(values){
    let error = {}
     let emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!values.username){
        error.username = 'Please provide userName';
    }
   if(!values.Email){
    error.Email = 'Please provide Email';
   }
   else if(!emailRegex.test(values.Email)){
    error.Email ='Email address is invalid';
   }

   if(!values.password){
    error.password ='Please provide password';
   }else if(values.password.length<6){
    error.password='Password must be grater then  6 charectors'
   }

   if(!values.confirmPassword){
    error.confirmPassword = 'Please provide password'
   }
//    else if(!values.confirmPassword!==values.password){
//     error.confirmPassword='Password does not match'
//    }
   return error;
}