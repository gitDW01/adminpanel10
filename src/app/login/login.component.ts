import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {RouteInformation} from "../RouteInfo";
import {Router} from "@angular/router";
import {AutenticationService} from "../autentication.service";

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

    constructor(private routes: RouteInformation, private router: Router, private autenticationService: AutenticationService) {
    };

    onFormSubmit(): void {
        this.routes.deleteRoutes();
        let login = this.form.get('login').value;
        let password = this.form.get('password').value;

        switch (login) {
            case 'admin': {
                this.router.navigate(['/table']);
                this.autenticationService.setUserUsername('admin');
                break;
            }
            case 'manager': {
                this.router.navigate(['/table']);
                this.autenticationService.setUserUsername('manager');
                break;
            }
            case 'user': {
                this.router.navigate(['/app-info']);
                this.autenticationService.setUserUsername('user');
                break;
            }
            default: {
                this.router.navigate(['/app-info']);
                this.autenticationService.setUserUsername('user');
                break;
            }
        }
    }

    ngOnInit() {
        this.routes.setDefault();
    }
}
