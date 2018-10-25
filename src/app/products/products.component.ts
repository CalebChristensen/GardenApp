import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Object

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products)
    })
  }

  delete(id) {
   this.data.deleteProduct(id)
   console.log(id)
 }
}
