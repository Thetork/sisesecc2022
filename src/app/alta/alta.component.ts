import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnInit {
  public id_usuario: any;
  public comites: any;
  constructor(public router:Router,) { 

  }

  ngOnInit(): void {
    this.id_usuario = window.sessionStorage.getItem('usuario');
    this.comites = [
      {id: '1', nombre: 'Comité...', acronimo: 'CPC', asesor: 'Consejera...', preside: 'Nombre...', secretario: 'Nombre...'},
      {id: '2', nombre: 'Comisión...', acronimo: '', asesor: 'Consejero...', preside: 'Nombre...', secretario: 'Nombre...'},
      {id: '3', nombre: 'Comisión...', acronimo: '', asesor: 'Consejero...', preside: 'Nombre...', secretario: 'Nombre...'},
      {id: '4', nombre: 'Comité...', acronimo: '', asesor: 'Consejera...', preside: 'Nombre...', secretario: 'Nombre...'},

    ];

  }
  logout(){
    this.router.navigate(['./login']);

  }
}
