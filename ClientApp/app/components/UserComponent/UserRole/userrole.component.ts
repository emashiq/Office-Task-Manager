import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component(
    {
        selector:'user-role',
        templateUrl:'userrole.component.html'
    }
)
export class UserRoleComponent{
    form: FormGroup;
    userAccountRoles:UserAccountRoles;
    constructor(private formBuilder: FormBuilder){
    }
    ngOnInit() {
        this.userAccountRoles=new UserAccountRoles();
        
        this.form = this.formBuilder.group({
            'Name': [null, [Validators.required]],
            'Id': [null],
          });
      }
    onSubmit(formData:any){
       
        console.log(formData.form._value as UserAccountRoles);
    }
}
class UserAccountRoles
{
    Id:number;
    Name:string;
}