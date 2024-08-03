import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortFolioComponent } from './port-folio/port-folio.component';

export const routes: Routes = [
{path:'', redirectTo :'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'gallery',component:GalleryComponent},
{path:'portfolio',component:PortFolioComponent},
];
