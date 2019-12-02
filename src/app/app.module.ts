import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/login.service';
import { TokenStorage } from './auth/token.storage';
import { Interceptor } from './auth/app.interceptor';
import { IndexComponent } from './layouts/index/index.component';
import { PapaParseModule} from 'ngx-papaparse';
// import { File } from '@ionic-native/file/ngx';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    PapaParseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    IndexComponent,
  ],
  providers: [
    AuthService,
    // File,
    // SocialSharing,
    TokenStorage,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
