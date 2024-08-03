import { Component } from '@angular/core';
import { RecommendedComponent } from '../recommended/recommended.component';

interface Product{
pname:String;
pprice:Number;
pimage:String;
pcat:string;


}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  productlist:Product[]=[
    {pname:'Apple',pprice:100,pimage:'assets/img/gallery/1.jpg',pcat:'Charger'},
    {pname:'Map',pprice:50,pimage:'assets/img/gallery/2.jpg',pcat:'E-Book'},
    {pname:'Board',pprice:110,pimage:'assets/img/gallery/3.jpg',pcat:'Electronic'},
    {pname:'Lamb',pprice:90,pimage:'assets/img/gallery/4.jpg',pcat:'Electronic'},
    {pname:'Map',pprice:50,pimage:'assets/img/gallery/5.jpg',pcat:'E-book'},
    {pname:'Smart Calculator',pprice:120,pimage:'assets/img/gallery/6.jpg',pcat:'Electronic'},
  ]
}
