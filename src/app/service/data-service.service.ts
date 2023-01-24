import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService  implements OnInit{

  urlData="https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      this.getDatos();
  }

  getDatos(){
    return this.http.get<any>(this.urlData);
  }
}
