import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UpperFooterComponent } from './upper-footer/upper-footer.component';
import { LowerFooterComponent } from './lower-footer/lower-footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortFolioComponent } from './port-folio/port-folio.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationComponent,UpperFooterComponent,LowerFooterComponent,HomeComponent,AboutComponent,ContactComponent,PortFolioComponent,GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignement1';
}
