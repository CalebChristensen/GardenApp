import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'

let token = sessionStorage.getItem('currentUser')

const httpOptions = {  
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 
  'Authorization': token})
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://efa-gardenapp-backend.herokuapp.com/api/product')
  }

  deleteProduct(id) {
    console.log(id)
    return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`, httpOptions).pipe(
      tap(data => console.log(data)))
  }

}
