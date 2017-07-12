import { Routes } from '@angular/router';

import { LoginComponent }   from './login/login.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import {ApplicationInfoComponent} from "./application-info/application-info.component";
import {ShopInfoComponent} from "./shop-info/shop-info.component";
import {AuthGuard} from "./auth-guard.guard";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        canActivate: [AuthGuard],
        component: UserComponent
    },
    {
        path: 'app-info',
        canActivate: [AuthGuard],
        component: ApplicationInfoComponent
    },
    {
        path: 'shop-info',
        canActivate: [AuthGuard],
        component: ShopInfoComponent
    },
    {
        path: 'table',
        canActivate: [AuthGuard],
        component: TableComponent
    },
    {
        path: 'typography',
        canActivate: [AuthGuard],
        component: TypographyComponent
    },
    {
        path: 'icons',

        component: IconsComponent
    },
    {
        path: 'maps',
        canActivate: [AuthGuard],
        component: MapsComponent
    },
    {
        path: 'notifications',
        canActivate: [AuthGuard],
        component: NotificationsComponent
    },
]
