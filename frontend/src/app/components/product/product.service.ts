import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000/products";

  constructor(private snackBar : MatSnackBar , private http : HttpClient) { }


  createProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product);
  }

  read() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandleArray(e))
    );
  }

  readById(id : string ):Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandle(e))
    );
  }
  update(product : Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url,product).pipe(
      map((obj) => obj),
      catchError((e)=>this.errorHandle(e))
    );
  }
  delete(id : string):Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return  this.http.delete<Product>(url).pipe(
      map((obj)=>obj),
      catchError((e)=> this.errorHandle(e))
    );
  }
  showMessage(msg : string , isErro : boolean = false): void{
    this.snackBar.open(msg,'x',{
      duration:4000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isErro?['msg-erro']:['msg-success'],

    });
  }
  errorHandle(e : any):Observable<Product>{
    console.log(e)
    this.showMessage('Ocorreu um erro',true);
    return EMPTY;
  }
  errorHandleArray(e : any):Observable<Product[]>{
    console.log(e)
    this.showMessage('Ocorreu um erro',true);
    return EMPTY;
  }
}
