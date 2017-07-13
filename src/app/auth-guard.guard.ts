import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AutenticationService} from "./autentication.service";
import {RouteInformation} from "./RouteInfo";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private autenticationService: AutenticationService, private routes: RouteInformation) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let login = this.autenticationService.getUserUsername();
        switch (login) {
            case 'admin': {
                this.routes.setRoutesAsAdmin();
                break;
            }
            case 'manager': {
                this.routes.setRoutesAsManager();
                break;
            }
            case 'user': {
                this.routes.setRoutesAsUser();
                break;
            }
        }

      return this.autenticationService.getUserLoggedIn();
    }
}
