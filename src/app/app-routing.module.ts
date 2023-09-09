import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BookComponent } from './book/book.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path:'Gallery',component:GalleryComponent },
  { path: '', redirectTo:'Home', pathMatch: 'full'},
  { path:'Home',component:HomeComponent },
  { path:'About',component:AboutUsComponent},
  { path:'Contact',component:ContactComponent },
  {path:'Blog',component:BlogsComponent},
  {path:'BookNow',component:BookComponent},
  {path:'Videos',component:VideosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
