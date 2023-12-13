import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PortraitComponent } from './gallery/portrait/portrait.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BookComponent } from './book/book.component';
import { VideosComponent } from './videos/videos.component';
import { StoriesComponent } from './stories/stories.component';
import { MomentsComponent } from './moments/moments.component';
import { AlbumComponent } from './stories/album/album.component';
import { ReceptionComponent } from './stories/reception/reception.component';
import { KasiComponent } from './stories/kasi/kasi.component';
import { MuhurtComponent } from './stories/muhurt/muhurt.component';
import { MaalaiComponent } from './stories/maalai/maalai.component';
import { OonjalComponent } from './stories/oonjal/oonjal.component';
import { NalanguComponent } from './stories/nalangu/nalangu.component';
import { SangeethComponent } from './stories/sangeeth/sangeeth.component';
import { MehndiComponent } from './stories/mehndi/mehndi.component';
import { HaldiComponent } from './stories/haldi/haldi.component';
import { MaternityComponent } from './stories/maternity/maternity.component';
import { ReelsComponent } from './videos/reels/reels.component';
import { CineteaseComponent } from './videos/cinetease/cinetease.component';
import { CinehighComponent } from './videos/cinehigh/cinehigh.component';
import { PackagesComponent } from './packages/packages.component';
import { TradComponent } from './videos/trad/trad.component';
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
import { OtherComponent } from './vlog/other/other.component';
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
import { ModelComponent } from './portfolio/OutDoor/model/model.component';
import { PrePostComponent } from './portfolio/OutDoor/pre-post/pre-post.component';
import { SaurashtraEngagementComponent } from './portfolio/SmallEvent/saurashtra-engagement/saurashtra-engagement.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { QueryParamChangedGuard } from './querychanged';
import { PostComponent } from './portfolio/OutDoor/post/post.component';
import { PremiumComponent } from './portfolio/OutDoor/premium/premium.component';
import { KidsComponent } from './portfolio/OutDoor/kids/kids.component';
import { BabyComponent } from './portfolio/OutDoor/baby/baby.component';
import { TradhighComponent } from './videos/tradhigh/tradhigh.component';
import { CelebrationComponent } from './vlog/celebration/celebration.component';
import { VlogsComponent } from './vlog/vlogs/vlogs.component';
import { KulasaiComponent } from './vlog/kulasai/kulasai.component';
import { DayComponent } from './vlog/day/day.component';
import { KaithariComponent } from './vlog/kaithari/kaithari.component';
import { ThiruparakundramComponent } from './vlog/thiruparakundram/thiruparakundram.component';
import { SaniswarComponent } from './vlog/saniswar/saniswar.component';
import { ThallakulamComponent } from './vlog/thallakulam/thallakulam.component';
import { CelebraComponent } from './celebra/celebra.component';
import { Cele1Component } from './celebra/cele1/cele1.component';
import { Cele2Component } from './celebra/cele2/cele2.component';
import { Cele3Component } from './celebra/cele3/cele3.component';
import { SrinivasaperumalComponent } from './vlog/srinivasaperumal/srinivasaperumal.component';


const routes: Routes = [
{path:"Celebration",component:CelebraComponent},
{path:"Cele1",component:Cele1Component},
{path:"Cele2",component:Cele2Component},
{path:"Cele3",component:Cele3Component},

  { path:'Gallery',component:GalleryComponent },
  { path: '', redirectTo:'Home', pathMatch: 'full'},
  { path:'Home',component:HomeComponent },
  { path:'About',component:AboutUsComponent},
  { path:'Contact',component:ContactComponent },
  {path:'Blog',component:BlogsComponent},
  {path:'BookNow',component:BookComponent},
  {path:'Videos',component:VideosComponent},
  {path:'Stories',component:StoriesComponent},
  {path:'Moments',component:MomentsComponent},
  { path: 'album/:coupleId', component: AlbumComponent }, // Define a route parameter :coupleId
  {path:'Reception',component:ReceptionComponent},
  {path:'Kasi-Yathirai',component:KasiComponent},
  {path:'Muhurtham',component:MuhurtComponent},
  {path:'MaalaiMatrudal',component:MaalaiComponent},
  {path:'Oonjal',component:OonjalComponent},
  {path:'Nalangu',component:NalanguComponent},
  {path:'Sangeeeth',component:SangeethComponent},
  {path:'Mehandi',component:MehndiComponent},
  {path:'Haldi',component:HaldiComponent},
  {path:'HalfSaree',component:MaternityComponent},
  {path:'Reels',component:ReelsComponent},
  {path:'CinematicHighlights',component:CinehighComponent},
  {path:'CinematicTeaser',component:CineteaseComponent},
  {path:'TraditionalVideo',component:TradComponent},
  {path:'TraditionalHighlight',component:TradhighComponent},
  {path:'InvitationVideo',component:InviteComponent},
  {path:'SaveDate',component:SavedateComponent},
  {path:'PrePostWedding',component:PrepostComponent},
  {path:'StoryTelling',component:StorytellingComponent},
  {path:"Vlog",component:VlogComponent},
  {path:"MeenakshiAmman",component:MeenakshiComponent},
  {path:"AzhagarKovil",component:AzhagarComponent},
  {path:"VandiyurMariamman",component:VandiyurComponent},
  {path:"KoodalAzhagar",component:KoodalComponent},
  {path:"Southkrishnan",component:KrishnanComponent},
  {path:"KamakshiEkambareswarar",component:KamakshiComponent},
  {path:"ArulmiguVenkatachalapathi",component:VenkatachalapathiComponent},
  {path:"balagivenkateshwara",component:BalagiComponent},
  {path:"NavaratriFestival",component:NavaratriComponent},
  {path:"Vlogs",component:VlogsComponent},
  {path:"Kulasai",component:KulasaiComponent},
  {path:"Thiruparankundram",component:ThiruparakundramComponent},
  {path:"Srinivasaperumal",component:SrinivasaperumalComponent},
  {path:"Angayarkanni",component:KaithariComponent},
  {path:"Saneeswarar",component:SaniswarComponent},
  {path:"Thallakulam",component:ThallakulamComponent},
  {path:"Videos",component:VideosComponent},
  {path:"Folder",component:PortfolioComponent},
{path:"day",component:DayComponent},
{path:"Portraits",component:PortraitComponent},
  {path:"Other",component:OtherComponent},
  {
    path: 'Portfolio/GrandEvent/HinduWedding',
    component: HinduComponent,
    children: [
      {
        path: 'folder',
        component: PortfolioComponent, // Updated component name
      },
    ],
  },
  {path:"Portfolio/GrandEvent/SaurashtraWedding",component:SaurashtraComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/GrandEvent/ChristianWedding",component:ChristianComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/GrandEvent/MuslimWedding",component:MuslimComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/HinduEngagement",component:EngagementComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/SaurashtraEngagement",component:SaurashtraEngagementComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},

  {path:"Portfolio/SmallEvent/BabyShower",component:BabyShowerComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/NamingCeremony",component:NamingComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/Birthday",component:BirthdayComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/HalfSaree",component:HalfSareeComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/Upanayana",component:UpanayanaComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/EarPiercing",component:EarComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/Anniverisery",component:AnniComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/SmallEvent/HouseWarming",component:HousewarmComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/OutDoor/PreWedding",component:PrePostComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/OutDoor/PostWedding",component:PostComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/OutDoor/Model",component:ModelComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/OutDoor/Baby",component:BabyComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Portfolio/OutDoor/Kids",component:KidsComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},
  {path:"Premium",component:PremiumComponent,
  children: [
    {
      path: 'folder',
      component: PortfolioComponent, // Updated component name
    },
  ],},




{path:'Packages',component:PackagesComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
