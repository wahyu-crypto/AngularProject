import { Component } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  data:any;
  constructor (private postData:ProductsService){}
  ngOnInit()
  {
    this.postData.getProducts().subscribe((result)=>{
      console.warn("result",result)
      this.data=result
    })
  }
}
