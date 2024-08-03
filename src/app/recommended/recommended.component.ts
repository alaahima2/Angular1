import { Component } from '@angular/core';
interface Product{
  pname:String;
  pprice:Number;
  pimage:String;
  pcat:string;
}
@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {

  productlist:Product[]=[
    {pname:'PlayStation4',pprice:100,pimage:'assets/img/more/3.jpg',pcat:'Electronics'},
    {pname:'Smart Watch',pprice:50,pimage:'assets/img/more/4.jpg',pcat:'Electronics'},
    {pname:'OPPO',pprice:110,pimage:'assets/img/more/5.jpg',pcat:'Mobile'},
    {pname:'Envelope',pprice:90,pimage:'assets/img/more/6.jpg',pcat:'Other'},
  ]
}
