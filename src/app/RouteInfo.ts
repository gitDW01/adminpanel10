import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
/**
 * Created by Konstantin on 09.07.2017.
 */
export class RouteInfo {
    path: string;
    title: string;
    icon: string;
    styleClass: string;
}

@Injectable()
export class RouteInformation {
    ROUTES: RouteInfo[] = [
        /* { path: 'login', title: 'Login',  icon: 'ti-clipboard', styleClass: '' },
         { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', styleClass: '' },
         { path: 'typography', title: 'Typography',  icon:'ti-text', styleClass: '' },
         { path: 'maps', title: 'Maps',  icon:'ti-map', styleClass: '' },
         { path: 'notifications', title: 'Notifications',  icon:'ti-bell', styleClass: '' },*/
        {path: 'login', title: 'Вход', icon: 'ti-clipboard', styleClass: ''},
        {path: 'icons', title: 'Иконки', icon: 'ti-pencil-alt2', styleClass: ''},
    ];

    // Observable navItem source
    private _source = new BehaviorSubject<string>('login');
    // Observable navItem stream
    change = this._source.asObservable();
    // service command
    changeNav(navigation) {
        this._source.next(navigation);
    }

    setDefault() {
        this.deleteRoutes();
        this.ROUTES.push({path: 'login', title: 'Вход', icon: 'ti-clipboard', styleClass: ''})
        this.ROUTES.push({path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', styleClass: ''})
    }

    getRoutes(): RouteInfo[] {
        return this.ROUTES;
    }

    addRoutes(path, title, icon, styleClass) {
        this.ROUTES.push({path: path, title: title, icon: icon, styleClass: styleClass})
    }

    deleteRoute(title) {
        let index = this.ROUTES.findIndex(obj => obj.title == title);
        this.ROUTES.splice(index, 1);
    }

    deleteRoutes() {
        this.ROUTES.splice(0, this.ROUTES.length);
    }

    setRoutesAsAdmin() {
        this.deleteRoutes();
        this.ROUTES.push({path: 'table', title: 'Table List', icon: 'ti-view-list-alt', styleClass: ''});
    }

    setRoutesAsManager() {
        this.deleteRoutes();
        this.ROUTES.push({path: 'table', title: 'Table List', icon: 'ti-view-list-alt', styleClass: ''})
    }

    setRoutesAsUser() {
        this.deleteRoutes();
        this.ROUTES.push({path: 'app-info', title: 'Информация о приложении', icon: 'ti-user', styleClass: ''});
        this.ROUTES.push({path: 'shop-info', title: 'Информация о магазине', icon: 'ti-user', styleClass: ''});
        this.ROUTES.push({path: 'news', title: 'Новости', icon: 'ti-announcement', styleClass: ''});
    }

}
