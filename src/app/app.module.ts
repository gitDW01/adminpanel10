import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './navigation/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApplicationInfoComponent } from './application-info/application-info.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import {AuthGuard} from "./auth-guard.guard";
import {AutenticationService} from "./autentication.service";
import { NewsComponent } from './news/news.component';
import { SalesComponent } from './sales/sales.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BasketComponent } from './basket/basket.component';
import { NewsModalComponent } from './modals/news-modal/news-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ApplicationInfoComponent,
    ShopInfoComponent,
    NewsComponent,
    SalesComponent,
    GalleryComponent,
    BasketComponent,
    NewsModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AutenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
