import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnInit {
  public comites: any;
  constructor(public router:Router,) { 

  }

  ngOnInit(): void {
    this.comites = [
      {id: '1', nombre: 'Comité...', acronimo: 'CPC', asesor: 'Consejera...', integrantes: 'Nombres...'},
      {id: '2', nombre: 'Comisión...', acronimo: '', asesor: 'Consejero...', integrantes: 'Nombres...'},
      {id: '3', nombre: 'Comisión...', acronimo: '', asesor: 'Consejero...', integrantes: 'Nombres...'},
      {id: '4', nombre: 'Comité...', acronimo: '', asesor: 'Consejera...', integrantes: 'Nombres...'},

    ];

  }

}
