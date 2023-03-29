import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  constructor(private http: HttpClient) {

    //Exercici_1
    //this.http.get<any>("http://localhost:3080/ex1", {}).subscribe();

    //Exercici_2
    //this.http.get<any>("http://localhost:3080/ex2", {}).subscribe();

  }


}
