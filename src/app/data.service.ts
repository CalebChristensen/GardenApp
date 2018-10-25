import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

let token = JSON.parse(sessionStorage.getItem('currentUser'))

const httpOptions = {  
  headers: new HttpHeaders({'Authorization': token})
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://efa-gardenapp-backend.herokuapp.com/api/product')
  }

  deleteProduct(id: number) {
    return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`, httpOptions).subscribe()
  }

}
