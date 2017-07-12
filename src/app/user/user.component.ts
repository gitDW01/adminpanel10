import { Component, OnInit } from '@angular/core';
import {RouteInformation} from "../RouteInfo";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    constructor(private routes: RouteInformation){}
    ngOnInit(){
        this.routes.setRoutesAsUser();
        this.routes.changeNav('user');
    }
}
