import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, AuthConfig, OAuthModuleConfig, OAuthService } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { DisableDoubleClickDirective } from './disable-double-click.directive';
import { CountUpDirective } from './count-up.directive';
import { ContactComponent } from './contact/contact.component';
import { CollectionComponent } from './collection/collection.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProfileComponent } from './profile/profile.component';
import { VideosComponent } from './videos/videos.component';
import { BookComponent } from './book/book.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TestimonalComponent } from './home/testimonal/testimonal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    HomeComponent,
    AboutUsComponent,
    DisableDoubleClickDirective,
    CountUpDirective,
    ContactComponent,
    CollectionComponent,
    BlogComponent,
    BlogsComponent,
    ProfileComponent,
    VideosComponent,
    BookComponent,
    TestimonalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MdbCarouselModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule
   ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
