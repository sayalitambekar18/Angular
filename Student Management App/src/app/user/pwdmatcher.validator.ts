import { AbstractControl, ValidatorFn } from "@angular/forms";

/*
  src is password 
   des is confirmpassword
*/
export function pwdMatcherValidator(src:string,
    des:string):ValidatorFn
{
    return function(control:AbstractControl):{}|null{
      let pwdcontrol = control.get('password')
      let cpwdcontrol = control.get('confirmpassword')
      if(pwdcontrol?.value!="" && cpwdcontrol?.value!="")
      {
          if(pwdcontrol?.value!=cpwdcontrol?.value){
            cpwdcontrol?.setErrors({'mustMatch':true})
          }
      }
        return null
    }
}