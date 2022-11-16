import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";
import { min } from "rxjs";

export function ageRangeValidator
    (control:AbstractControl): {} |null
{
    if(control!=undefined && control.value!="")
    {
       if(control.value<18 || control.value>45)
     {
        return {'ageRange':true,'min':18,'max':45}
     }
    }
      return null
}

export function ageRangeValidator2(min:number,max:number): ValidatorFn
{
return function(control:AbstractControl):{} |null {
    
    if(control!=undefined && control.value!="") 
    {
        if(control.value<min || control.value>max)
        {
            return{'ageRange':true,'min':min,'max':max}
        }
    }

     return null;
}
}