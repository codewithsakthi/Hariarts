import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
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


const routes: Routes = [
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
  {path:'TraditionalHighlight',component:TradComponent},

{path:'Packages',component:PackagesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
