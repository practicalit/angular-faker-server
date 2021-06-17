import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products = [];
  constructor(private productService: ProductService) { }
  ngOnInit() {
      this.productService.get().subscribe((data: any[])=>{  
          console.log(data);  
          this.products = data;  
      })  
  }

}
