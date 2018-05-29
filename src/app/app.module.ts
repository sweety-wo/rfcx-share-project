import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {NavbarComponent} from './common/component/navbar/navbar.component';
import {FooterComponent} from './common/component/footer/footer.component';
import {LinkPreviewService} from './common/services/link/link-preview.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LinkPreviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
