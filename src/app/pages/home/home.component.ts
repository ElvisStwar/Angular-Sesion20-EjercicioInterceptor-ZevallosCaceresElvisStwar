import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  users:any[] = [];

  constructor(private traerDatos:DataServiceService){

  }

  
  ngOnInit(): void {
      // this.traerDatos.getDatos().subscribe(
      //   res=> {
      //     console.log(res);
      //     this.users=res;
      //   },err =>{

      //   }
      //   );
  }
  
  mostrar(){
    this.traerDatos.getDatos().subscribe(
      res=> {
        console.log(res);
        this.users=res;
      },err =>{

      }
      );
  }

}
