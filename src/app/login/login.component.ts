import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {RouteInformation} from "../RouteInfo";
import {Router} from "@angular/router";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
    form = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private routes: RouteInformation,private router: Router) {
    };

    onFormSubmit(): void {
        this.routes.deleteRoutes();
        let login = this.form.get('login').value;
        let password = this.form.get('password').value;
        switch (login) {
            case 'admin': {
                this.router.navigate(['/table']);
                break;
            }
            case 'manager': {
                this.router.navigate(['/table']);
                break;
            }
            case 'user': {
                this.router.navigate(['/user']);
                break;
            }
        }
    }

    ngOnInit() {
        this.routes.setDefault();
    }
}
