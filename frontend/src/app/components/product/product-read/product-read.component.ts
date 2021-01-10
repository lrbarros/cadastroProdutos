import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [] ;
  displayedColumns: string[] = ['id','code', 'name','cost','percent','price','shelflife','active'];

  constructor(private productService : ProductService, ) {
    
   }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products;
    });
  }

}
