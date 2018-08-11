import {Validator,FormControl ,NG_VALIDATORS,ValidatorFn,AbstractControl} from '@angular/forms'
export function checkEmailValidator(): ValidatorFn {
    return (ctrl: AbstractControl): {[key: string]: any} | null => {
      let retval=null;
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(ctrl.value)){
        retval= {emailNotVaild:"Illegal email"}
      }
      return retval;
    };
}