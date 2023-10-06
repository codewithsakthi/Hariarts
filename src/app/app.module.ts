import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
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
import { StoriesComponent } from './stories/stories.component';
import { MomentsComponent } from './moments/moments.component';
import { LightboxModule } from 'ngx-lightbox';
import { AlbumComponent } from './stories/album/album.component';
import { ReceptionComponent } from './stories/reception/reception.component';
import { KasiComponent } from './stories/kasi/kasi.component';
import { MuhurtComponent } from './stories/muhurt/muhurt.component';
import { OonjalComponent } from './stories/oonjal/oonjal.component';
import { NalanguComponent } from './stories/nalangu/nalangu.component';
import { SangeethComponent } from './stories/sangeeth/sangeeth.component';
import { MehndiComponent } from './stories/mehndi/mehndi.component';
import { HaldiComponent } from './stories/haldi/haldi.component';
import { MaternityComponent } from './stories/maternity/maternity.component';
import { MaalaiComponent } from './stories/maalai/maalai.component';
import { ReelsComponent } from './videos/reels/reels.component';
import { CineteaseComponent } from './videos/cinetease/cinetease.component';
import { CinehighComponent } from './videos/cinehigh/cinehigh.component';
import { Header1Component } from './header1/header1.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { PackagesComponent } from './packages/packages.component';
import { TradComponent } from './videos/trad/trad.component';
import { TradhighComponent } from './videos/tradhigh/tradhigh.component';
import { CommonModule } from '@angular/common';
import { ChunkPipe } from '../app/packages/chunk.pipe';
import { InviteComponent } from './videos/invite/invite.component';
import { SavedateComponent } from './videos/savedate/savedate.component';
import { PrepostComponent } from './videos/prepost/prepost.component';
import { StorytellingComponent } from './videos/storytelling/storytelling.component';
import { VlogComponent } from './vlog/vlog.component';
import { MeenakshiComponent } from './vlog/meenakshi/meenakshi.component';
import { AzhagarComponent } from './vlog/azhagar/azhagar.component';
import { VandiyurComponent } from './vlog/vandiyur/vandiyur.component';
import { KoodalComponent } from './vlog/koodal/koodal.component';
import { KrishnanComponent } from './vlog/krishnan/krishnan.component';
import { KamakshiComponent } from './vlog/kamakshi/kamakshi.component';
import { VenkatachalapathiComponent } from './vlog/venkatachalapathi/venkatachalapathi.component';
import { BalagiComponent } from './vlog/balagi/balagi.component';
import { NavaratriComponent } from './vlog/navaratri/navaratri.component';
import { OtherComponent } from './vlog/other/other.component'; // Import your custom pipe

import {MatExpansionModule} from '@angular/material/expansion';



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
    StoriesComponent,
    MomentsComponent,
    AlbumComponent,
    ReceptionComponent,
    KasiComponent,
    MuhurtComponent,
    OonjalComponent,
    NalanguComponent,
    SangeethComponent,
    MehndiComponent,
    HaldiComponent,
    MaternityComponent,
    MaalaiComponent,
    ReelsComponent,
    CineteaseComponent,
    CinehighComponent,
    Header1Component,
    PackagesComponent,
    TradComponent,
    TradhighComponent,
    ChunkPipe,
    InviteComponent,
    SavedateComponent,
    PrepostComponent,
    StorytellingComponent,
    VlogComponent,
    MeenakshiComponent,
    AzhagarComponent,
    VandiyurComponent,
    KoodalComponent,
    KrishnanComponent,
    KamakshiComponent,
    VenkatachalapathiComponent,
    BalagiComponent,
    NavaratriComponent,
    OtherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MdbCarouselModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    LightboxModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    CommonModule,
    HammerModule,
    MatExpansionModule
   ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
