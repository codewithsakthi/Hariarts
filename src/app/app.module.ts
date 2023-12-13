import { NzCardModule } from 'ng-zorro-antd/card';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { PaginatorModule } from 'primeng/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, AuthConfig, OAuthModuleConfig, OAuthService } from 'angular-oauth2-oidc';
import {QueryParamChangedGuard} from './querychanged'
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

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
import { ImageModule } from 'primeng/image'; 
import { ToastModule } from 'primeng/toast';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HinduComponent } from './portfolio/GrandEvent/hindu/hindu.component';
import { SaurashtraComponent } from './portfolio/GrandEvent/saurashtra/saurashtra.component';
import { ChristianComponent } from './portfolio/GrandEvent/christian/christian.component';
import { MuslimComponent } from './portfolio/GrandEvent/muslim/muslim.component';
import { EngagementComponent } from './portfolio/SmallEvent/engagement/engagement.component';
import { BabyShowerComponent } from './portfolio/SmallEvent/baby-shower/baby-shower.component';
import { NamingComponent } from './portfolio/SmallEvent/naming/naming.component';
import { BirthdayComponent } from './portfolio/SmallEvent/birthday/birthday.component';
import { HalfSareeComponent } from './portfolio/SmallEvent/half-saree/half-saree.component';
import { UpanayanaComponent } from './portfolio/SmallEvent/upanayana/upanayana.component';
import { EarComponent } from './portfolio/SmallEvent/ear/ear.component';
import { AnniComponent } from './portfolio/SmallEvent/anni/anni.component';
import { HousewarmComponent } from './portfolio/SmallEvent/housewarm/housewarm.component';
import { PrePostComponent } from './portfolio/OutDoor/pre-post/pre-post.component';
import { ModelComponent } from './portfolio/OutDoor/model/model.component';
import { SaurashtraEngagementComponent } from './portfolio/SmallEvent/saurashtra-engagement/saurashtra-engagement.component';
import { PremiumComponent } from './portfolio/OutDoor/premium/premium.component';
import { PostComponent } from './portfolio/OutDoor/post/post.component';
import { KidsComponent } from './portfolio/OutDoor/kids/kids.component';
import { BabyComponent } from './portfolio/OutDoor/baby/baby.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CalendarModule } from 'primeng/calendar'; 
import { MessagesModule } from 'primeng/messages';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { VlogsComponent } from './vlog/vlogs/vlogs.component';
import { CelebrationComponent } from './vlog/celebration/celebration.component';
import { KulasaiComponent } from './vlog/kulasai/kulasai.component';
import { AccordionModule } from 'primeng/accordion';
import { ImageUrlPipe } from './image-url.pipe';
import { HashLocationStrategy,LocationStrategy, registerLocaleData } from '@angular/common';
import { SwipeScrollDirective } from './SwipeScrollDirective';
import { ScrollTopModule } from 'primeng/scrolltop';
import {MatIconModule} from '@angular/material/icon';
import { DayComponent } from './vlog/day/day.component';
import { MatTableModule } from '@angular/material/table';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { PortraitComponent } from './gallery/portrait/portrait.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ThallakulamComponent } from './vlog/thallakulam/thallakulam.component';
import { ThiruparakundramComponent } from './vlog/thiruparakundram/thiruparakundram.component';
import { SaniswarComponent } from './vlog/saniswar/saniswar.component';
import { KaithariComponent } from './vlog/kaithari/kaithari.component';
import { CelebraComponent } from './celebra/celebra.component';
import { Cele1Component } from './celebra/cele1/cele1.component';
import { Cele2Component } from './celebra/cele2/cele2.component';
import { Cele3Component } from './celebra/cele3/cele3.component';
import { SrinivasaperumalComponent } from './vlog/srinivasaperumal/srinivasaperumal.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SwipeScrollDirective,
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
    PortfolioComponent,
    HinduComponent,
    SaurashtraComponent,
    ChristianComponent,
    MuslimComponent,
    EngagementComponent,
    BabyShowerComponent,
    NamingComponent,
    BirthdayComponent,
    HalfSareeComponent,
    UpanayanaComponent,
    EarComponent,
    AnniComponent,
    HousewarmComponent,
    PrePostComponent,
    ModelComponent,
    SaurashtraEngagementComponent,
    PremiumComponent,
    PostComponent,
    KidsComponent,
    BabyComponent,
    VlogsComponent,
    CelebrationComponent,
    KulasaiComponent,
    ImageUrlPipe,
    DayComponent,
    PortraitComponent,
    ThallakulamComponent,
    ThiruparakundramComponent,
    SaniswarComponent,
    KaithariComponent,
    CelebraComponent,
    Cele1Component,
    Cele2Component,
    Cele3Component,
    SrinivasaperumalComponent,
    
    
  ],
  imports: [
    NzIconModule,
    NgxSkeletonLoaderModule,
    NzPaginationModule,
    NzButtonModule,
    PaginatorModule,
    BrowserModule,
    NzCardModule,
    NzGridModule,
    NzDrawerModule,
    NzCommentModule,
    NzEmptyModule,
    ToastModule,
    NzWaterMarkModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    GalleriaModule,
    MdbCarouselModule,
    AccordionModule,
    ScrollTopModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    LightboxModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    CommonModule,
    HammerModule,
    MatExpansionModule,
    MatSelectModule,
    CarouselModule,
    FormsModule,
    TableModule,
ImageModule,CalendarModule,
MessagesModule,
provideFirebaseApp(() => initializeApp(environment.firebase)),
provideAuth(() => getAuth()) ,



    
   ],
   
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
