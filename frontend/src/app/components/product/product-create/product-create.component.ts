import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product :Product = {
          name : '',
          price : 0,
          cost: 0,
          code: '',
          percent: 0,
          active: false,
          shelflife: 0
  };
  constructor(private productService : ProductService,
            private router : Router) { }

  ngOnInit(): void {
  }
  
  createProduct() :void{
    this.product.active = true;
    this.productService.createProduct(this.product).subscribe(
        ()=> {
              this.productService.showMessage("Operação executada com sucesso!");
              this.router.navigate(["/products"]);
            }
      );
  }
  cancel() :void{
    this.router.navigate(["/products"]);
  }
}
