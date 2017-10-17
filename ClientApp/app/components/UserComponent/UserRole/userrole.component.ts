import { Component,OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MasterService } from "../../service/master.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

class UserAccountRoles {
    id: number;
    name: string;
}
@Component(
    {
        providers:[MasterService],
        selector:'user-role',
        templateUrl:'userrole.component.html'
    }
)
export class UserRoleComponent implements OnInit{
    form: FormGroup;
    userAccountRoles: UserAccountRoles;
    constructor(private formBuilder: FormBuilder, private masterService: MasterService<UserAccountRoles>, private router: Router) {
    }
    ngOnInit() {
        this.userAccountRoles=new UserAccountRoles();
        
        this.form = this.formBuilder.group({
            'name': [null, [Validators.required]],
            'id': [null],
          });
      }
    onSubmit() {
        let id: any;
        this.masterService.AppURL = 'api/UserAccountRoles';
        this.masterService.create(this.userAccountRoles).subscribe(x => id = x);
        this.userAccountRoles.id = id;
        this.router.navigate(['/user-role-list']);
    }
    get name() { return this.form.get('name'); }
}
@Component(
    {
        providers: [MasterService],
        selector: 'user-role-list',
        templateUrl: 'userrolelist.component.html'
    }
)
export class UserListComponent implements OnInit {
    
    userAcccountList: UserAccountRoles[];
    constructor(private masterService: MasterService<UserAccountRoles>, private route: ActivatedRoute) {
        this.masterService.AppURL = 'api/UserAccountRoles';
        this.route.paramMap
            .switchMap((params: ParamMap) => this.masterService.Get())
            .subscribe(x => this.userAcccountList = x);
    }
    ngOnInit() {
    }
}
@Component(
    {
        providers: [MasterService],
        selector: 'user-role',
        templateUrl: 'userrole.component.html'
    }
)
export class UserRoleUpdateComponent implements OnInit {
    form: FormGroup;
    userAccountRoles: UserAccountRoles;
    id: any;
    constructor(private formBuilder: FormBuilder, private masterService: MasterService<UserAccountRoles>, private route: ActivatedRoute) {
        this.userAccountRoles = new UserAccountRoles();
        this.masterService.AppURL = 'api/UserAccountRoles';

        this.route.params.subscribe(x => this.id = x['id']);
       
        this.form = this.formBuilder.group({
            'name': [null, [Validators.required]],
            'id': [],
        });
        this.masterService.GetById(this.id)
            .subscribe(x => this.userAccountRoles=x);
    }
    ngOnInit(): void {
       
    }
    onSubmit() {
        let id: any;
        this.masterService.AppURL = 'api/UserAccountRoles';
        this.masterService.create(this.userAccountRoles).subscribe(x => id = x);
        this.userAccountRoles.id = id;
    }
    get name() { return this.form.get('name'); }
}